import type { ReactNode } from 'react';
import { faBlog, faFootball } from '@fortawesome/free-solid-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function Writing(): ReactNode {
  return (
    <LinkSection
      id="writing"
      heading="writing"
      links={[
        { label: 'Blog', href: '/blog', icon: faBlog, accentClassName: 'linkBlog' },
        { label: 'Fantasy football', href: '#', icon: faFootball, accentClassName: 'linkFootball' },
      ]}
    />
  );
}
