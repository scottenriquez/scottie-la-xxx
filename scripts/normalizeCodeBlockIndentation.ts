import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export type BlockStatus = 'converted' | 'unchanged' | 'skipped';

export interface BlockReport {
  line: number;
  language: string;
  unit: number | null;
  target: number;
  status: BlockStatus;
  reason?: string;
}

export interface NormalizeResult {
  output: string;
  reports: BlockReport[];
}

export const defaultIndentWidth = 2;

export const languageIndentWidths: Record<string, number> = {
  python: 4,
  py: 4,
  csharp: 4,
  cs: 4,
  java: 4,
  swift: 4,
};

export function indentWidthForLanguage(language: string): number {
  return languageIndentWidths[language.toLowerCase()] ?? defaultIndentWidth;
}

const structuralUnits = new Set<number>([4, 8]);
const openFencePattern = /^( {0,3})(`{3,}|~{3,})(.*)$/;
const closeFencePattern = /^( {0,3})([`~]+)[ \t]*$/;

function greatestCommonDivisor(first: number, second: number): number {
  let dividend = first;
  let divisor = second;
  while (divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return dividend;
}

function leadingSpaceCount(line: string): number {
  let count = 0;
  while (count < line.length && line[count] === ' ') {
    count += 1;
  }
  return count;
}

function hasLeadingTab(line: string): boolean {
  return /^[ ]*\t/.test(line);
}

function isClosingFence(line: string, fenceCharacter: string, fenceLength: number): boolean {
  const match = closeFencePattern.exec(line);
  if (match === null) {
    return false;
  }
  const run = match[2];
  return run.length >= fenceLength && [...run].every((character) => character === fenceCharacter);
}

function detectUnit(extras: number[]): number | null {
  const positives = extras.filter((value) => value > 0);
  if (positives.length === 0) {
    return null;
  }
  return positives.reduce((accumulated, value) => greatestCommonDivisor(accumulated, value));
}

interface BlockTransform {
  lines: string[];
  unit: number | null;
  status: BlockStatus;
  reason?: string;
}

function transformBlock(contentLines: string[], baseIndent: number, target: number): BlockTransform {
  const extras: number[] = [];
  let containsTab = false;
  for (const line of contentLines) {
    if (hasLeadingTab(line)) {
      containsTab = true;
    }
    if (line.trim() === '') {
      continue;
    }
    const extra = leadingSpaceCount(line) - baseIndent;
    if (extra > 0) {
      extras.push(extra);
    }
  }

  if (containsTab) {
    return { lines: contentLines, unit: null, status: 'skipped', reason: 'contains tab indentation' };
  }

  const unit = detectUnit(extras);
  if (unit === null || unit <= target) {
    return { lines: contentLines, unit, status: 'unchanged' };
  }
  if (!structuralUnits.has(unit)) {
    return {
      lines: contentLines,
      unit,
      status: 'skipped',
      reason: `non-structural indent unit (${unit} spaces)`,
    };
  }

  const lines = contentLines.map((line) => {
    if (line.trim() === '') {
      return '';
    }
    const spaces = leadingSpaceCount(line);
    if (spaces < baseIndent) {
      return line;
    }
    const extra = spaces - baseIndent;
    const newExtra = Math.round((extra * target) / unit);
    return ' '.repeat(baseIndent + newExtra) + line.slice(spaces);
  });

  return { lines, unit, status: 'converted' };
}

export function normalizeCodeBlockIndentation(source: string): NormalizeResult {
  const lines = source.split('\n');
  const output: string[] = [];
  const reports: BlockReport[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const open = openFencePattern.exec(line);
    const isBacktickFence = open !== null && open[2][0] === '`';
    const hasInlineBacktick = isBacktickFence && open !== null && open[3].includes('`');

    if (open === null || hasInlineBacktick) {
      output.push(line);
      index += 1;
      continue;
    }

    const baseIndent = open[1].length;
    const fenceCharacter = open[2][0];
    const fenceLength = open[2].length;
    const languageToken = open[3].trim().split(/\s+/)[0] ?? '';
    const language = languageToken || '(none)';
    const target = indentWidthForLanguage(languageToken);

    const contentLines: string[] = [];
    let cursor = index + 1;
    let closingFence: string | null = null;
    while (cursor < lines.length) {
      if (isClosingFence(lines[cursor], fenceCharacter, fenceLength)) {
        closingFence = lines[cursor];
        break;
      }
      contentLines.push(lines[cursor]);
      cursor += 1;
    }

    if (closingFence === null) {
      output.push(line);
      reports.push({ line: index + 1, language, unit: null, target, status: 'skipped', reason: 'unterminated fence' });
      index += 1;
      continue;
    }

    const transformed = transformBlock(contentLines, baseIndent, target);
    output.push(line, ...transformed.lines, closingFence);
    reports.push({
      line: index + 1,
      language,
      unit: transformed.unit,
      target,
      status: transformed.status,
      reason: transformed.reason,
    });
    index = cursor + 1;
  }

  return { output: output.join('\n'), reports };
}

function collectMarkdownFiles(directory: string): string[] {
  return readdirSync(directory, { recursive: true, encoding: 'utf8' })
    .filter((entry) => entry.endsWith('.md'))
    .map((entry) => join(directory, entry))
    .sort();
}

function runCli(argv: string[]): number {
  const checkOnly = argv.includes('--check');
  const verbose = argv.includes('--verbose');
  const directories = argv.filter((argument) => !argument.startsWith('--'));
  const targets = directories.length > 0 ? directories : ['blog', 'twiath'];

  let convertedBlocks = 0;
  let skippedBlocks = 0;
  const changedFiles: string[] = [];
  const skippedDetails: string[] = [];

  for (const directory of targets) {
    for (const filePath of collectMarkdownFiles(directory)) {
      const source = readFileSync(filePath, 'utf8');
      const { output, reports } = normalizeCodeBlockIndentation(source);

      for (const report of reports) {
        if (report.status === 'converted') {
          convertedBlocks += 1;
        }
        if (report.status === 'skipped' && report.reason !== undefined && report.unit !== null) {
          skippedBlocks += 1;
          skippedDetails.push(`${filePath}:${report.line} [${report.language}] ${report.reason}`);
        }
      }

      if (output !== source) {
        changedFiles.push(filePath);
        if (!checkOnly) {
          writeFileSync(filePath, output);
        }
      }
    }
  }

  if (verbose || skippedDetails.length > 0) {
    for (const detail of skippedDetails) {
      console.log(`skipped: ${detail}`);
    }
  }

  if (checkOnly && changedFiles.length > 0) {
    console.error(`Found ${convertedBlocks} code block(s) needing re-indentation in ${changedFiles.length} file(s):`);
    for (const filePath of changedFiles) {
      console.error(`  ${filePath}`);
    }
    console.error('Run "npm run format:code-blocks" to fix them.');
    return 1;
  }

  console.log(
    `${checkOnly ? 'checked' : 'converted'} ${convertedBlocks} block(s) across ${changedFiles.length} file(s); ` +
      `skipped ${skippedBlocks} non-structural block(s) for manual review.`
  );
  return 0;
}

const invokedPath = process.argv[1] ?? '';
if (import.meta.url === pathToFileURL(invokedPath).href) {
  process.exitCode = runCli(process.argv.slice(2));
}
