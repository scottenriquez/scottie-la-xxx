import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero/HomepageHero';
import AboutMe from '@site/src/components/AboutMe/AboutMe';
import Resume from '@site/src/components/Resume/Resume';
import Writing from '@site/src/components/Writing/Writing';
import UsesLink from '@site/src/components/UsesLink/UsesLink';
import ProfessionalNetworks from '@site/src/components/ProfessionalNetworks/ProfessionalNetworks';
import Socials from '@site/src/components/Socials/Socials';
import Certifications from '@site/src/components/Certifications/Certifications';
import Education from '@site/src/components/Education/Education';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Scottie Enriquez">
      <main>
        <HomepageHero />
        <AboutMe />
        <Education />
        <Certifications />
        <Resume />
        <Writing />
        <UsesLink />
        <ProfessionalNetworks />
        <Socials />
      </main>
    </Layout>
  );
}
