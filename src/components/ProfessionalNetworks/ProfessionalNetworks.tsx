import type { ReactNode } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function ProfessionalNetworks(): ReactNode {
  return (
    <LinkSection
      id="professionalNetworks"
      heading="professional networks"
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
