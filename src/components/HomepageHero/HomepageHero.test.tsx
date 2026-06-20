import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomepageHero from './HomepageHero';

describe('HomepageHero', () => {
  it('renders the name and location', () => {
    render(<HomepageHero />);

    expect(screen.getByRole('heading', { level: 1, name: 'Scottie Enriquez' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Los Angeles, California' })).toBeInTheDocument();
  });

  it('does not render any links', () => {
    render(<HomepageHero />);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});
