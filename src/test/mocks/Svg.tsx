import type { ComponentProps, ReactNode } from 'react';

export default function Svg(props: ComponentProps<'svg'>): ReactNode {
  return <svg {...props} />;
}
