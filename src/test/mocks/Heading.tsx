import type { ComponentProps, ReactNode } from 'react';

type HeadingProps = ComponentProps<'h2'> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
};

export default function Heading({ as: Tag, children, ...rest }: HeadingProps): ReactNode {
  return <Tag {...rest}>{children}</Tag>;
}
