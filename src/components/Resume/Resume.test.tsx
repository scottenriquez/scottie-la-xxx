import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Resume from './Resume';

describe('Resume', () => {
  it('renders the resume heading', () => {
    render(<Resume />);

    expect(screen.getByRole('heading', { level: 2, name: 'resume' })).toBeInTheDocument();
  });

  it('links to the resume PDF in a new tab', () => {
    render(<Resume />);

    const link = screen.getByRole('link', { name: 'Resume' });
    expect(link).toHaveAttribute('href', 'pathname:///serving/resume.pdf');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
