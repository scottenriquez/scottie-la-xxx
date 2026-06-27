import type { ReactNode } from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function UsesLink(): ReactNode {
  return (
    <LinkSection
      id="uses"
      heading="uses"
      links={[{ label: 'Uses', href: '/uses', icon: faLaptopCode, accentClassName: 'linkUses' }]}
    />
  );
}
