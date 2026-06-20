import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Writing from './Writing';

describe('Writing', () => {
  it('renders the writing heading', () => {
    render(<Writing />);

    expect(screen.getByRole('heading', { level: 2, name: 'writing' })).toBeInTheDocument();
  });

  it('renders the blog and fantasy football links', () => {
    render(<Writing />);

    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    expect(screen.getByRole('link', { name: 'Fantasy football' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
