import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Uses from './Uses';

describe('Uses', () => {
  it('renders the page heading', () => {
    render(<Uses />);

    expect(screen.getByRole('heading', { level: 1, name: 'uses' })).toBeInTheDocument();
  });

  it('renders a heading for each category', () => {
    render(<Uses />);

    for (const heading of ['hardware', 'editors', 'terminal', 'font', 'peripherals']) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument();
    }
  });

  it('lists the key tools', () => {
    render(<Uses />);

    for (const name of [
      'MacBook Pro (16-Inch)',
      'Pro Display XDR',
      'PyCharm (JetBrains)',
      'WebStorm (JetBrains)',
      'Neovim',
      'dotfiles',
      'Ghostty',
      'tmux',
      'JetBrains Mono',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });
});
