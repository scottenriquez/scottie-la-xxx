import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomepageFeatures from './index';

describe('HomepageFeatures', () => {
  it('renders a heading for every feature', () => {
    render(<HomepageFeatures />);

    expect(screen.getByRole('heading', { name: 'Easy to Use' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Focus on What Matters' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Powered by React' })).toBeInTheDocument();
  });

  it('renders an accessible image for every feature', () => {
    render(<HomepageFeatures />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
});
