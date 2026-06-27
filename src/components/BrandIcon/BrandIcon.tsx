import type { ReactNode } from 'react';
import type { SimpleIcon } from 'simple-icons';

type BrandIconProps = {
  icon: SimpleIcon;
  className?: string;
};

export default function BrandIcon({ icon, className }: BrandIconProps): ReactNode {
  return (
    <svg className={className} viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
