import { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

const fallbackHostname = 'scottie.la';

export default function NavbarLogo(): ReactNode {
  const {
    navbar: { logo },
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo?.href || '/');
  const lightSource = useBaseUrl(logo?.src ?? '');
  const darkSource = useBaseUrl(logo?.srcDark ?? logo?.src ?? '');

  return (
    <Link
      to={logoLink}
      className="navbar__brand"
      aria-label={fallbackHostname}
      {...(logo?.target && { target: logo.target })}
    >
      {logo && (
        <div className="navbar__logo">
          <ThemedImage
            sources={{ light: lightSource, dark: darkSource }}
            height={logo.height}
            width={logo.width}
            alt={logo.alt ?? ''}
            style={logo.style}
          />
        </div>
      )}
      <b className="navbar__title text--truncate" aria-hidden="true" />
    </Link>
  );
}
