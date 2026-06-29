import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faComputerMouse, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { siApple, siGhostty, siGnubash, siJetbrains, siNeovim, siPycharm, siTmux, siWebstorm } from 'simple-icons';
import BrandIcon from '@site/src/components/BrandIcon/BrandIcon';
import styles from './Uses.module.css';

config.autoAddCss = false;

type UsesItem = {
  name: string;
  detail: ReactNode;
  icon: ReactNode;
};

type UsesCategory = {
  heading: string;
  items: UsesItem[];
};

const categories: UsesCategory[] = [
  {
    heading: 'hardware',
    items: [
      {
        name: 'MacBook Pro (16-Inch)',
        detail: 'M4 Max model with 16-core CPU, 40-core GPU, and 48 GB of unified memory',
        icon: <BrandIcon icon={siApple} />,
      },
      {
        name: 'Pro Display XDR',
        detail: '32-inch 6K Retina model',
        icon: <BrandIcon icon={siApple} />,
      },
    ],
  },
  {
    heading: 'editors',
    items: [
      {
        name: 'PyCharm (JetBrains)',
        detail: 'Daily-driver IDE for Python and data science projects',
        icon: <BrandIcon icon={siPycharm} />,
      },
      {
        name: 'WebStorm (JetBrains)',
        detail: 'Daily-driver IDE for web and TypeScript AWS Cloud Development Kit (CDK) projects',
        icon: <BrandIcon icon={siWebstorm} />,
      },
      {
        name: 'Neovim',
        detail: 'Backup editor for quick edits and remote sessions',
        icon: <BrandIcon icon={siNeovim} />,
      },
    ],
  },
  {
    heading: 'terminal',
    items: [
      {
        name: 'dotfiles',
        detail: (
          <>
            My shell, editor, and terminal configuration are available on{' '}
            <Link to="https://github.com/scottenriquez/dotfiles" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </>
        ),
        icon: <BrandIcon icon={siGnubash} />,
      },
      {
        name: 'Ghostty',
        detail: 'Daily-driver terminal emulator',
        icon: <BrandIcon icon={siGhostty} />,
      },
      {
        name: 'tmux',
        detail: 'Terminal multiplexer for managing panes and sessions',
        icon: <BrandIcon icon={siTmux} />,
      },
    ],
  },
  {
    heading: 'font',
    items: [
      {
        name: 'JetBrains Mono',
        detail: 'Monospace font in the editor, terminal, and across this site.',
        icon: <BrandIcon icon={siJetbrains} />,
      },
    ],
  },
  {
    heading: 'peripherals',
    items: [
      {
        name: 'ASUS ROG Strix Scope II 96',
        detail: 'Wireless and mechanical gaming keyboard',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
      },
      {
        name: 'Razer Basilisk V3 X HyperSpeed',
        detail: 'Wireless gaming mouse',
        icon: <FontAwesomeIcon icon={faComputerMouse} />,
      },
    ],
  },
];

export default function Uses(): ReactNode {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageHeading}>uses</h1>
      {categories.map((category) => (
        <section key={category.heading} className={styles.category} aria-labelledby={`${category.heading}Heading`}>
          <h2 id={`${category.heading}Heading`} className={styles.categoryHeading}>
            {category.heading}
          </h2>
          <ul className={styles.list}>
            {category.items.map((item) => (
              <li key={item.name} className={styles.entry}>
                <span className={styles.icon} aria-hidden="true">
                  {item.icon}
                </span>
                <div className={styles.details}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.detail}>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
