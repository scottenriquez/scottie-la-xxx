import type { ReactNode } from 'react';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import LinkSection from '@site/src/components/LinkSection/LinkSection';

export default function Resume(): ReactNode {
  return (
    <LinkSection
      id="resume"
      heading="resume"
      links={[
        {
          label: 'Resume',
          href: 'pathname:///serving/resume.pdf',
          icon: faFilePdf,
          accentClassName: 'linkResume',
          newTab: true,
        },
      ]}
    />
  );
}
