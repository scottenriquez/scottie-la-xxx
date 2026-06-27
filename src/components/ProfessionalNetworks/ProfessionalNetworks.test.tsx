import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProfessionalNetworks from './ProfessionalNetworks';

describe('ProfessionalNetworks', () => {
  it('renders the professional networks heading', () => {
    render(<ProfessionalNetworks />);

    expect(screen.getByRole('heading', { level: 2, name: 'professional networks' })).toBeInTheDocument();
  });

  it('links to the GitHub and LinkedIn profiles', () => {
    render(<ProfessionalNetworks />);

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/scottenriquez');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/scottenriquez/'
    );
  });
});
