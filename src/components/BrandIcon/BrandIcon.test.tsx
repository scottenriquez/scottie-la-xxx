import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { siApple } from 'simple-icons';
import BrandIcon from './BrandIcon';

describe('BrandIcon', () => {
  it('renders the icon path as an inline svg', () => {
    const { container } = render(<BrandIcon icon={siApple} />);

    expect(container.querySelector('svg path')?.getAttribute('d')).toBe(siApple.path);
  });

  it('hides the decorative svg from assistive technology', () => {
    const { container } = render(<BrandIcon icon={siApple} />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies the provided className', () => {
    const { container } = render(<BrandIcon icon={siApple} className="demo" />);

    expect(container.querySelector('svg')).toHaveClass('demo');
  });
});
