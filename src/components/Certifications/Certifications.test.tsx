import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Certifications, { certifications } from './Certifications';

describe('Certifications', () => {
  it('renders a badge for every certification, in order, labelled by name', () => {
    render(<Certifications />);

    const altTexts = screen.getAllByRole('img').map((image) => image.getAttribute('alt'));
    expect(altTexts).toEqual(certifications.map((certification) => certification.name));
  });

  it('omits the removed FinOps and Python certifications', () => {
    render(<Certifications />);

    expect(screen.queryByRole('img', { name: 'FinOps Certified Engineer' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('img', { name: 'PCEP – Certified Entry-Level Python Programmer' })
    ).not.toBeInTheDocument();
  });

  it('links each badge to its credential in a new tab', () => {
    render(<Certifications />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(certifications.length);
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
    }

    const [firstCertification] = certifications;
    expect(screen.getByRole('link', { name: firstCertification.name })).toHaveAttribute(
      'href',
      firstCertification.credentialUrl
    );
  });

  it('lazy loads the badge images', () => {
    render(<Certifications />);

    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveAttribute('loading', 'lazy');
    }
  });
});
