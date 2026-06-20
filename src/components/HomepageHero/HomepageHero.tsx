import type { ReactNode } from 'react';
import styles from './HomepageHero.module.css';

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Scottie Enriquez</h1>
        <h2 className={styles.heroSubtitle}>Los Angeles, California</h2>
      </div>
    </section>
  );
}
