import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardUser,
  faChartLine,
  faCloud,
  faLanguage,
  faLaptopCode,
  faLeaf,
  faMicrochip,
  faPlane,
  faTag,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

type TagProps = {
  permalink: string;
  label: string;
  count?: number;
  description?: string;
};

const themeToIcon: Record<string, IconDefinition> = {
  cloud: faCloud,
  'technology and programming': faLaptopCode,
  hardware: faMicrochip,
  japanese: faLanguage,
  'life and personal': faLeaf,
  travel: faPlane,
  economics: faChartLine,
  teaching: faChalkboardUser,
};

export default function Tag({ permalink, label, count, description }: TagProps): ReactNode {
  const icon = themeToIcon[label.toLowerCase()] ?? faTag;

  return (
    <Link
      rel="tag"
      href={permalink}
      title={description}
      className={clsx(styles.tag, count ? styles.tagWithCount : styles.tagRegular)}
    >
      <FontAwesomeIcon icon={icon} className={styles.tagIcon} aria-hidden="true" />
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
