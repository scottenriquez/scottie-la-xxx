import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomepageHero from './HomepageHero';

describe('HomepageHero', () => {
  it('renders the name and roles', () => {
    render(<HomepageHero />);
    expect(screen.getByRole('heading', { level: 1, name: 'Scottie Enriquez' })).toBeInTheDocument();
    expect(screen.getByText(/cloud solutions architect/i)).toBeInTheDocument();
  });

  it('renders the GitHub and LinkedIn profile links', () => {
    render(<HomepageHero />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/scottenriquez');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/scottenriquez/'
    );
  });

  it('renders all five profile links', () => {
    render(<HomepageHero />);
    expect(screen.getAllByRole('link')).toHaveLength(5);
  });
});
