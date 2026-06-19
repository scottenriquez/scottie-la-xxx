import type { ComponentProps, ReactNode } from 'react';

type LinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  to?: string;
  href?: string;
  children: ReactNode;
};

export default function Link({ to, href, children, ...rest }: LinkProps): ReactNode {
  return (
    <a href={to ?? href} {...rest}>
      {children}
    </a>
  );
}
