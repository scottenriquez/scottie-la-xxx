import { describe, expect, it } from 'vitest';
import { indentWidthForLanguage, normalizeCodeBlockIndentation } from './normalizeCodeBlockIndentation';

describe('indentWidthForLanguage', () => {
  it('returns the configured width for a known language', () => {
    expect(indentWidthForLanguage('python')).toBe(4);
    expect(indentWidthForLanguage('csharp')).toBe(4);
    expect(indentWidthForLanguage('java')).toBe(4);
    expect(indentWidthForLanguage('swift')).toBe(4);
  });

  it('matches the configured language case-insensitively', () => {
    expect(indentWidthForLanguage('Python')).toBe(4);
  });

  it('falls back to two spaces for an unconfigured language', () => {
    expect(indentWidthForLanguage('javascript')).toBe(2);
    expect(indentWidthForLanguage('yaml')).toBe(2);
    expect(indentWidthForLanguage('unknown')).toBe(2);
  });
});

describe('normalizeCodeBlockIndentation', () => {
  it('converts a four-space block to two spaces for a language that defaults to two', () => {
    const source = ['```javascript', 'function greet() {', '    log("hi");', '}', '```', ''].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(['```javascript', 'function greet() {', '  log("hi");', '}', '```', ''].join('\n'));
    expect(reports[0].status).toBe('converted');
    expect(reports[0].unit).toBe(4);
    expect(reports[0].target).toBe(2);
  });

  it('leaves a four-space block unchanged for a language configured to four', () => {
    const source = ['```python', 'def greet():', '    print("hi")', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports[0].status).toBe('unchanged');
    expect(reports[0].target).toBe(4);
  });

  it('never expands a block below its language target (reduce-only)', () => {
    const source = ['```python', 'def outer():', '  def inner():', '    return 1', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports[0].status).toBe('unchanged');
  });

  it('reduces an eight-space block to a four-space language target', () => {
    const source = ['```python', 'def f():', '        return 1', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(['```python', 'def f():', '    return 1', '```'].join('\n'));
    expect(reports[0].status).toBe('converted');
    expect(reports[0].target).toBe(4);
  });

  it('rescales nested four-space levels for a two-space language', () => {
    const source = ['```typescript', 'class A {', '    method() {', '        run();', '    }', '}', '```'].join('\n');

    const { output } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(['```typescript', 'class A {', '  method() {', '    run();', '  }', '}', '```'].join('\n'));
  });

  it('leaves a two-space block unchanged for a two-space language', () => {
    const source = ['```typescript', 'function add() {', '  return 1;', '}', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports[0].status).toBe('unchanged');
  });

  it('skips a block whose indent unit is non-structural', () => {
    const source = ['```text', 'command \\', '            --flag', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports[0].status).toBe('skipped');
    expect(reports[0].unit).toBe(12);
  });

  it('skips a block that uses tab indentation', () => {
    const source = ['```go', 'func main() {', '\tprintln("x")', '}', '```'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports[0].status).toBe('skipped');
    expect(reports[0].reason).toContain('tab');
  });

  it('does not alter prose outside code fences', () => {
    const source = ['Some intro text.', '', '    not a fenced block', '', 'More text.'].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(source);
    expect(reports).toHaveLength(0);
  });

  it('handles tilde fences', () => {
    const source = ['~~~json', '{', '    "a": 1', '}', '~~~'].join('\n');

    const { output } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(['~~~json', '{', '  "a": 1', '}', '~~~'].join('\n'));
  });

  it('normalizes whitespace-only lines inside a converted block', () => {
    const source = ['```javascript', 'function f() {', '    a();', '    ', '    b();', '}', '```'].join('\n');

    const { output } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(['```javascript', 'function f() {', '  a();', '', '  b();', '}', '```'].join('\n'));
  });

  it('applies each block its own language target within one document', () => {
    const source = [
      '```javascript',
      'function f() {',
      '    return 1;',
      '}',
      '```',
      '',
      'between',
      '',
      '```python',
      'def g():',
      '    return 1',
      '```',
    ].join('\n');

    const { output, reports } = normalizeCodeBlockIndentation(source);

    expect(output).toContain('  return 1;');
    expect(output).toContain('    return 1');
    expect(reports.map((report) => report.status)).toEqual(['converted', 'unchanged']);
  });

  it('preserves a trailing newline', () => {
    const source = ['```javascript', 'function f() {', '    return 1;', '}', '```', ''].join('\n');

    const { output } = normalizeCodeBlockIndentation(source);

    expect(output.endsWith('\n')).toBe(true);
  });

  it('preserves the fence indentation when a block is nested in a list', () => {
    const source = ['- item', '', '  ```javascript', '  function f() {', '      return 1;', '  }', '  ```'].join('\n');

    const { output } = normalizeCodeBlockIndentation(source);

    expect(output).toBe(
      ['- item', '', '  ```javascript', '  function f() {', '    return 1;', '  }', '  ```'].join('\n')
    );
  });
});
