import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Certifications from './Certifications';

describe('Certifications', () => {
  it('renders all sixteen certification badges', () => {
    render(<Certifications />);

    expect(screen.getAllByRole('img')).toHaveLength(16);
  });

  it('renders the badges in resume order', () => {
    render(<Certifications />);

    const altTexts = screen.getAllByRole('img').map((image) => image.getAttribute('alt'));
    expect(altTexts[0]).toBe('AWS Certified Cloud Practitioner');
    expect(altTexts[15]).toBe('Certified Kubernetes Application Developer (CKAD)');
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
    expect(links).toHaveLength(16);
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
    }

    expect(screen.getByRole('link', { name: 'AWS Certified Cloud Practitioner' })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/a7e6b0f7-ce2a-431d-8f9f-17bad4a0cb4d/public_url'
    );
  });

  it('lazy loads the badge images', () => {
    render(<Certifications />);

    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveAttribute('loading', 'lazy');
    }
  });
});
