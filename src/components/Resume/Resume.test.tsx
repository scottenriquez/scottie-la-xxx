import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Resume from './Resume';

describe('Resume', () => {
  it('renders the resume heading', () => {
    render(<Resume />);

    expect(screen.getByRole('heading', { level: 2, name: 'resume' })).toBeInTheDocument();
  });

  it('links to the resume PDF', () => {
    render(<Resume />);

    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', 'pathname:///serving/resume.pdf');
  });
});
