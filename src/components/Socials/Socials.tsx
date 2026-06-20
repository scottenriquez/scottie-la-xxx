import type { ReactNode } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function Socials(): ReactNode {
  return (
    <LinkSection
      id="socials"
      heading="socials"
      links={[
        {
          label: 'GitHub',
          href: 'https://github.com/scottenriquez',
          icon: faGithub,
          accentClassName: 'linkGithub',
          newTab: true,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/scottenriquez/',
          icon: faLinkedin,
          accentClassName: 'linkLinkedin',
          newTab: true,
        },
      ]}
    />
  );
}
