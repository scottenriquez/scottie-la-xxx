import type { ReactNode } from 'react';
import { faInstagram, faPlaystation, faSteam } from '@fortawesome/free-brands-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function Socials(): ReactNode {
  return (
    <LinkSection
      id="socials"
      heading="socials"
      links={[
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/scottenriquez',
          icon: faInstagram,
          accentClassName: 'linkInstagram',
          newTab: true,
        },
        {
          label: 'PlayStation',
          href: 'https://profile.playstation.com/exoentropy',
          icon: faPlaystation,
          accentClassName: 'linkPlaystation',
          newTab: true,
        },
        {
          label: 'Steam',
          href: 'https://steamcommunity.com/id/exoentropy/',
          icon: faSteam,
          accentClassName: 'linkSteam',
          newTab: true,
        },
      ]}
    />
  );
}
