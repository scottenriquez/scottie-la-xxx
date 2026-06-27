import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LinkSection, { type SectionLink } from './LinkSection';

const baseLink: SectionLink = {
  label: 'Example',
  href: 'https://example.com',
  icon: faGithub,
  accentClassName: 'linkGithub',
};

function renderSection(links: SectionLink[], heading = 'demo heading') {
  return render(<LinkSection id="demo" heading={heading} links={links} />);
}

describe('LinkSection', () => {
  it('renders the heading and associates the navigation with it', () => {
    renderSection([baseLink]);

    expect(screen.getByRole('heading', { level: 2, name: 'demo heading' })).toHaveAttribute('id', 'demoHeading');
    expect(screen.getByRole('navigation', { name: 'demo heading' })).toBeInTheDocument();
  });

  it('opens links in a new tab with rel protection when newTab is set', () => {
    renderSection([{ ...baseLink, newTab: true }]);

    const link = screen.getByRole('link', { name: 'Example' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('omits target and rel for internal links when newTab is not set', () => {
    renderSection([{ ...baseLink, href: '/blog' }]);

    const link = screen.getByRole('link', { name: 'Example' });
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders an icon inside each link', () => {
    renderSection([baseLink]);

    expect(screen.getByRole('link', { name: 'Example' }).querySelector('svg')).toBeInTheDocument();
  });

  it('renders one link per entry, keyed by label', () => {
    renderSection([baseLink, { ...baseLink, label: 'Second', href: 'https://example.org' }]);

    expect(screen.getByRole('link', { name: 'Example' })).toHaveAttribute('href', 'https://example.com');
    expect(screen.getByRole('link', { name: 'Second' })).toHaveAttribute('href', 'https://example.org');
  });
});
