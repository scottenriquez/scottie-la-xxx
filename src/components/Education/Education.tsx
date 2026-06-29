import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './Education.module.css';

type Program = {
  logoFileName: string;
  school: string;
  degree: string;
  years: string;
  homepageUrl: string;
  logoClassName?: string;
};

const programs: Program[] = [
  {
    logoFileName: 'texas.svg',
    school: 'University of Texas at Austin',
    degree: 'Bachelor of Arts, Computer Science and Asian Studies',
    years: '2008 to 2013',
    homepageUrl: 'https://www.utexas.edu/',
    logoClassName: 'logoWide',
  },
  {
    logoFileName: 'usc.svg',
    school: 'University of Southern California',
    degree: 'Master of Science, Applied Data Science',
    years: '2025 to present',
    homepageUrl: 'https://www.usc.edu/',
  },
];

export default function Education(): ReactNode {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className={styles.section} aria-labelledby="educationHeading">
      <h2 id="educationHeading" className={styles.heading}>
        education
      </h2>
      <ul className={styles.list}>
        {programs.map((program) => (
          <li key={program.school} className={styles.entry}>
            <Link
              to={program.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={program.school}
              className={styles.logo}
            >
              <img
                src={withBaseUrl(`/img/education/${program.logoFileName}`)}
                alt={program.school}
                className={program.logoClassName ? styles[program.logoClassName] : undefined}
              />
            </Link>
            <div className={styles.details}>
              <p className={styles.school}>{program.school}</p>
              <p className={styles.degree}>{program.degree}</p>
              <p className={styles.years}>{program.years}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
