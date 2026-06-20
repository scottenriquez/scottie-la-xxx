import type { ReactNode } from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './Education.module.css';

type Program = {
  logoFileName: string;
  school: string;
  degree: string;
  years: string;
  chipColor: string;
};

const programs: Program[] = [
  {
    logoFileName: 'ut-austin.svg',
    school: 'University of Texas at Austin',
    degree: 'Bachelor of Arts, Computer Science and Asian Studies',
    years: '2008 to 2013',
    chipColor: 'var(--school-ut)',
  },
  {
    logoFileName: 'usc.svg',
    school: 'University of Southern California',
    degree: 'Master of Science, Applied Data Science',
    years: '2025 to present',
    chipColor: 'var(--school-usc-chip)',
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
            <div className={styles.logo} style={{ backgroundColor: program.chipColor }}>
              <img src={withBaseUrl(`/img/education/${program.logoFileName}`)} alt={program.school} loading="lazy" />
            </div>
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
