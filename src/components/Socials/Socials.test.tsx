import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Socials from './Socials';

describe('Socials', () => {
  it('renders the socials heading', () => {
    render(<Socials />);

    expect(screen.getByRole('heading', { level: 2, name: 'socials' })).toBeInTheDocument();
  });

  it('links to the Instagram, PlayStation, and Steam profiles', () => {
    render(<Socials />);

    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/scottenriquez'
    );
    expect(screen.getByRole('link', { name: 'PlayStation' })).toHaveAttribute(
      'href',
      'https://profile.playstation.com/exoentropy'
    );
    expect(screen.getByRole('link', { name: 'Steam' })).toHaveAttribute(
      'href',
      'https://steamcommunity.com/id/exoentropy/'
    );
  });
});
