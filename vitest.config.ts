import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    alias: [
      { find: /.*\.svg$/, replacement: path.resolve(__dirname, 'src/test/mocks/Svg.tsx') },
      { find: '@theme/Heading', replacement: path.resolve(__dirname, 'src/test/mocks/Heading.tsx') },
      { find: '@docusaurus/Link', replacement: path.resolve(__dirname, 'src/test/mocks/Link.tsx') },
      { find: '@site', replacement: path.resolve(__dirname, '.') },
    ],
  },
});
