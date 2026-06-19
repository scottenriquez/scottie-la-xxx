import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faBlog, faFilePdf, faFootball } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from './HomepageHero.module.css';

config.autoAddCss = false;

type HeroLink = {
  label: string;
  href: string;
  icon: IconDefinition;
  accentClassName: string;
};

const heroLinks: HeroLink[] = [
  { label: 'Resume', href: '#', icon: faFilePdf, accentClassName: styles.linkResume },
  { label: 'Blog', href: '/blog', icon: faBlog, accentClassName: styles.linkBlog },
  { label: 'Fantasy football', href: '#', icon: faFootball, accentClassName: styles.linkFootball },
  { label: 'GitHub', href: 'https://github.com/scottenriquez', icon: faGithub, accentClassName: styles.linkGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/scottenriquez/',
    icon: faLinkedin,
    accentClassName: styles.linkLinkedin,
  },
];

const roles = 'Cloud solutions architect, software engineer, data scientist, and technical leader';

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Scottie Enriquez</h1>
        <h2 className={styles.heroSubtitle}>Los Angeles, California</h2>
        <p className={styles.heroTagline}>{roles}</p>
        <nav className={styles.heroLinks} aria-label="Profile links">
          {heroLinks.map((heroLink) => (
            <Link
              key={heroLink.label}
              to={heroLink.href}
              aria-label={heroLink.label}
              className={`${styles.heroLink} ${heroLink.accentClassName}`}
            >
              <FontAwesomeIcon icon={heroLink.icon} size="2x" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
