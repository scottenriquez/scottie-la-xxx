import { useEffect, useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

const fallbackHostname = 'scottie.la';

function normalizeHostname(hostname: string): string {
  return hostname.replace(/^www\./, '').toLowerCase();
}

export default function NavbarLogo(): ReactNode {
  const {
    navbar: { logo },
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo?.href || '/');
  const lightSource = useBaseUrl(logo?.src ?? '');
  const darkSource = useBaseUrl(logo?.srcDark ?? logo?.src ?? '');

  const [hostname, setHostname] = useState(fallbackHostname);
  useEffect(() => {
    setHostname(normalizeHostname(window.location.hostname));
  }, []);

  return (
    <Link to={logoLink} className="navbar__brand" {...(logo?.target && { target: logo.target })}>
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
      <b className="navbar__title text--truncate">{hostname}</b>
    </Link>
  );
}
