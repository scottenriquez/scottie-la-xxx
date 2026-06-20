import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from './LinkSection.module.css';

config.autoAddCss = false;

export type SectionLink = {
  label: string;
  href: string;
  icon: IconDefinition;
  accentClassName: string;
  newTab?: boolean;
};

type LinkSectionProps = {
  id: string;
  heading: string;
  links: SectionLink[];
};

export default function LinkSection({ id, heading, links }: LinkSectionProps): ReactNode {
  const headingId = `${id}Heading`;
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.heading}>
        {heading}
      </h2>
      <nav className={styles.links} aria-label={heading}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            aria-label={link.label}
            className={`${styles.link} ${styles[link.accentClassName]}`}
            {...(link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </Link>
        ))}
      </nav>
    </section>
  );
}
