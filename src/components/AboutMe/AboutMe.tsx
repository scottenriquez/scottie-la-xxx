import type { ReactNode } from 'react';
import styles from './AboutMe.module.css';

const roles =
  'Cloud solutions architect, software engineer, data scientist, and technical leader with over 13 years of professional experience';

export default function AboutMe(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="aboutMeHeading">
      <h2 id="aboutMeHeading" className={styles.heading}>
        about me
      </h2>
      <p className={styles.text}>{roles}</p>
    </section>
  );
}
