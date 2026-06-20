import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutMe from './AboutMe';

describe('AboutMe', () => {
  it('renders the about me heading', () => {
    render(<AboutMe />);

    expect(screen.getByRole('heading', { level: 2, name: 'about me' })).toBeInTheDocument();
  });

  it('renders the roles text', () => {
    render(<AboutMe />);

    expect(screen.getByText(/cloud solutions architect/i)).toBeInTheDocument();
  });
});
