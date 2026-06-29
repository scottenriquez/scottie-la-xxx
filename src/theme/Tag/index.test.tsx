import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tag from './index';

describe('Tag', () => {
  it('renders the cloud icon for the Cloud theme', () => {
    const { container } = render(<Tag permalink="/tags/cloud" label="Cloud" />);

    expect(container.querySelector('svg.svg-inline--fa')?.getAttribute('data-icon')).toBe('cloud');
  });

  it('renders the laptop-code icon for the Technology and Programming theme', () => {
    const { container } = render(
      <Tag permalink="/tags/technology-and-programming" label="Technology and Programming" />,
    );

    expect(container.querySelector('svg.svg-inline--fa')?.getAttribute('data-icon')).toBe('laptop-code');
  });

  it('renders the leaf icon for the Life and Personal theme', () => {
    const { container } = render(<Tag permalink="/tags/life-and-personal" label="Life and Personal" />);

    expect(container.querySelector('svg.svg-inline--fa')?.getAttribute('data-icon')).toBe('leaf');
  });

  it('matches themes case-insensitively', () => {
    const { container } = render(<Tag permalink="/tags/travel" label="TRAVEL" />);

    expect(container.querySelector('svg.svg-inline--fa')?.getAttribute('data-icon')).toBe('plane');
  });

  it('falls back to the generic tag icon for an unknown theme', () => {
    const { container } = render(<Tag permalink="/tags/unknown" label="Unknown" />);

    expect(container.querySelector('svg.svg-inline--fa')?.getAttribute('data-icon')).toBe('tag');
  });

  it('renders the tag label text', () => {
    const { getByText } = render(<Tag permalink="/tags/japanese" label="Japanese" />);

    expect(getByText('Japanese')).toBeInTheDocument();
  });
});
