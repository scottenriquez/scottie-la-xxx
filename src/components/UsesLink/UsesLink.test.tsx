import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UsesLink from './UsesLink';

describe('UsesLink', () => {
  it('renders the uses heading', () => {
    render(<UsesLink />);

    expect(screen.getByRole('heading', { level: 2, name: 'uses' })).toBeInTheDocument();
  });

  it('links to the uses page', () => {
    render(<UsesLink />);

    expect(screen.getByRole('link', { name: 'Uses' })).toHaveAttribute('href', '/uses');
  });
});
