import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scottie Enriquez',
  tagline: 'Cloud solutions architect, software engineer, data scientist, and technical leader',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  clientModules: ['./src/clientModules/randomLights.ts'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/mona-sans-latin-wght-normal.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/jetbrains-mono-latin-wght-normal.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Scottie Enriquez',
      logo: {
        alt: 'Scottie Enriquez logo',
        src: 'img/scott-s.svg',
        srcDark: 'img/scott-s-dark.svg',
      },
      items: [
        {
          to: 'pathname:///serving/resume.pdf',
          label: 'Resume',
          position: 'left',
          target: '_blank',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: '#',
          label: 'Fantasy Football',
          position: 'left',
        },
        {
          href: 'https://github.com/scottenriquez',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://www.linkedin.com/in/scottenriquez/',
          label: 'LinkedIn',
          position: 'left',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Scottie Enriquez logo',
        src: 'img/scott-s.svg',
        srcDark: 'img/scott-s-dark.svg',
        href: '/',
        width: 160,
        height: 51,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
