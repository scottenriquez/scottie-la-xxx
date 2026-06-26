import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Education from './Education';

describe('Education', () => {
  it('renders a logo for each school', () => {
    render(<Education />);

    expect(screen.getByRole('img', { name: 'University of Texas at Austin' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'University of Southern California' })).toBeInTheDocument();
  });

  it('renders the degree for each school', () => {
    render(<Education />);

    expect(screen.getByText('Bachelor of Arts, Computer Science and Asian Studies')).toBeInTheDocument();
    expect(screen.getByText('Master of Science, Applied Data Science')).toBeInTheDocument();
  });

  it('renders the years on their own row for each school', () => {
    render(<Education />);

    expect(screen.getByText('2008 to 2013')).toBeInTheDocument();
    expect(screen.getByText('2025 to present')).toBeInTheDocument();
  });

  it('loads each logo eagerly so the colored chip does not flash before the image', () => {
    render(<Education />);

    expect(screen.getByRole('img', { name: 'University of Texas at Austin' })).not.toHaveAttribute('loading', 'lazy');
    expect(screen.getByRole('img', { name: 'University of Southern California' })).not.toHaveAttribute('loading', 'lazy');
  });
});
