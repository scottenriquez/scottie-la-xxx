import { type ReactNode } from 'react';
import clsx from 'clsx';
import { useCodeBlockContext } from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import Title from '@theme/CodeBlock/Title';
import Content from '@theme/CodeBlock/Content';
import type { Props } from '@theme/CodeBlock/Layout';
import Buttons from '@theme/CodeBlock/Buttons';
import LanguageIcon from '@site/src/components/LanguageIcon/LanguageIcon';

import styles from './styles.module.css';

export default function CodeBlockLayout({ className }: Props): ReactNode {
  const { metadata } = useCodeBlockContext();
  return (
    <Container as="div" className={clsx(className, metadata.className)}>
      {metadata.title && (
        <div className={styles.codeBlockTitle}>
          <LanguageIcon
            language={metadata.language}
            title={typeof metadata.title === 'string' ? metadata.title : undefined}
            className={styles.codeBlockTitleIcon}
          />
          <span className={styles.codeBlockTitleText}>
            <Title>{metadata.title}</Title>
          </span>
        </div>
      )}
      <div className={styles.codeBlockContent}>
        <Content />
        <Buttons />
      </div>
    </Container>
  );
}
