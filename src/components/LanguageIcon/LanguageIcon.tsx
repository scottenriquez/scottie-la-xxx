import type { ReactNode } from 'react';
import {
  siCss,
  siDocker,
  siDotnet,
  siEditorconfig,
  siEslint,
  siGit,
  siGnubash,
  siGo,
  siGraphql,
  siHtml5,
  siJavascript,
  siJson,
  siJupyter,
  siMarkdown,
  siOpenjdk,
  siProcessingfoundation,
  siPython,
  siReact,
  siReplit,
  siRust,
  siSwift,
  siTerraform,
  siToml,
  siTypescript,
  siXml,
  siYaml,
  type SimpleIcon,
} from 'simple-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const languageToIcon: Record<string, SimpleIcon> = {
  javascript: siJavascript,
  js: siJavascript,
  jsx: siReact,
  typescript: siTypescript,
  ts: siTypescript,
  tsx: siReact,
  python: siPython,
  py: siPython,
  ipynb: siJupyter,
  jupyter: siJupyter,
  bash: siGnubash,
  sh: siGnubash,
  shell: siGnubash,
  zsh: siGnubash,
  console: siGnubash,
  json: siJson,
  jsonc: siJson,
  yaml: siYaml,
  yml: siYaml,
  csharp: siDotnet,
  cs: siDotnet,
  csproj: siDotnet,
  java: siOpenjdk,
  jav: siOpenjdk,
  hcl: siTerraform,
  terraform: siTerraform,
  tf: siTerraform,
  toml: siToml,
  editorconfig: siEditorconfig,
  eslintrc: siEslint,
  replit: siReplit,
  swift: siSwift,
  processing: siProcessingfoundation,
  pde: siProcessingfoundation,
  markdown: siMarkdown,
  md: siMarkdown,
  mdx: siMarkdown,
  graphql: siGraphql,
  gql: siGraphql,
  html: siHtml5,
  markup: siHtml5,
  xml: siXml,
  css: siCss,
  go: siGo,
  golang: siGo,
  rust: siRust,
  rs: siRust,
  docker: siDocker,
  dockerfile: siDocker,
  git: siGit,
};

type LanguageIconProps = {
  language: string;
  title?: string;
  className?: string;
};

function getTitleExtension(title: string | undefined): string | undefined {
  if (!title) {
    return undefined;
  }
  const fileName = title.split('/').pop() ?? '';
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex < 0) {
    return undefined;
  }
  const suffix = fileName.slice(dotIndex + 1).toLowerCase();
  return suffix.length > 0 ? suffix : undefined;
}

export default function LanguageIcon({ language, title, className }: LanguageIconProps): ReactNode {
  const lookupKey = getTitleExtension(title) ?? (language ? language.toLowerCase() : undefined);
  const icon = lookupKey ? languageToIcon[lookupKey] : undefined;

  if (!icon) {
    return <FontAwesomeIcon icon={faCode} className={className} aria-hidden="true" />;
  }

  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
