import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LanguageIcon from './LanguageIcon';

describe('LanguageIcon', () => {
  it('renders the matching brand icon for a known language', () => {
    const { container } = render(<LanguageIcon language="javascript" />);

    expect(container.querySelector('svg title')?.textContent).toBe('JavaScript');
  });

  it('matches languages case-insensitively', () => {
    const { container } = render(<LanguageIcon language="Python" />);

    expect(container.querySelector('svg title')?.textContent).toBe('Python');
  });

  it('uses the .NET icon for C#', () => {
    const { container } = render(<LanguageIcon language="csharp" />);

    expect(container.querySelector('svg title')?.textContent).toBe('.NET');
  });

  it('uses the OpenJDK icon for Java', () => {
    const { container } = render(<LanguageIcon language="java" />);

    expect(container.querySelector('svg title')?.textContent).toBe('OpenJDK');
  });

  it('prefers the file extension in the title over the language', () => {
    const { container } = render(<LanguageIcon language="javascript" title="config.yaml" />);

    expect(container.querySelector('svg title')?.textContent).toBe('YAML');
  });

  it('falls back to the generic code icon when the title extension is unknown, ignoring the language', () => {
    const { container } = render(<LanguageIcon language="csharp" title="Bounce.pde" />);

    expect(container.querySelector('svg title')).toBeNull();
    expect(container.querySelector('svg.svg-inline--fa')).not.toBeNull();
  });

  it('uses the language when the title has no extension', () => {
    const { container } = render(<LanguageIcon language="docker" title="Dockerfile" />);

    expect(container.querySelector('svg title')?.textContent).toBe('Docker');
  });

  it('falls back to a generic code icon for unknown languages', () => {
    const { container } = render(<LanguageIcon language="pde" />);

    expect(container.querySelector('svg title')).toBeNull();
    expect(container.querySelector('svg.svg-inline--fa')).not.toBeNull();
  });

  it('falls back to the generic code icon when no language is provided', () => {
    const { container } = render(<LanguageIcon language="" />);

    expect(container.querySelector('svg.svg-inline--fa')).not.toBeNull();
  });
});
