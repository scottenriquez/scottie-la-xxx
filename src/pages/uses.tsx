import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Uses from '@site/src/components/Uses/Uses';

export default function UsesPage(): ReactNode {
  return (
    <Layout title="Uses" description="The hardware, software, and tools Scottie Enriquez uses day to day.">
      <main>
        <Uses />
      </main>
    </Layout>
  );
}
