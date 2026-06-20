import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Socials from './Socials';

describe('Socials', () => {
  it('renders the socials heading', () => {
    render(<Socials />);

    expect(screen.getByRole('heading', { level: 2, name: 'socials' })).toBeInTheDocument();
  });

  it('renders the GitHub and LinkedIn links in a new tab', () => {
    render(<Socials />);

    const github = screen.getByRole('link', { name: 'GitHub' });
    expect(github).toHaveAttribute('href', 'https://github.com/scottenriquez');
    expect(github).toHaveAttribute('target', '_blank');

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/scottenriquez/'
    );
  });
});
