import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Writing from './Writing';

describe('Writing', () => {
  it('renders the writing heading', () => {
    render(<Writing />);

    expect(screen.getByRole('heading', { level: 2, name: 'writing' })).toBeInTheDocument();
  });

  it('links to the blog and fantasy football sections', () => {
    render(<Writing />);

    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    expect(screen.getByRole('link', { name: 'Fantasy football' })).toHaveAttribute('href', '/fantasy');
  });
});
