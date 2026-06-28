import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import prismIcGreen from './src/theme/prismIcGreen';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const sharedBlogOptions = {
  blogSidebarTitle: 'Posts',
  blogSidebarCount: 'ALL' as const,
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};

const config: Config = {
  title: 'Scottie Enriquez',
  tagline: 'Cloud solutions architect, software engineer, data scientist, and technical leader',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://scottie.la',
  baseUrl: '/',

  organizationName: 'scottenriquez',
  projectName: 'scottie-la-xxx',

  onBrokenLinks: 'throw',

  clientModules: ['./src/clientModules/randomLights.ts'],

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML:
        "(function(){try{var hostname=window.location.hostname.replace(/^www\\./,'').toLowerCase();document.documentElement.style.setProperty('--navbar-hostname','\"'+hostname+'\"');}catch(error){}})();",
    },
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
        docs: false,
        blog: {
          showReadingTime: true,
          ...sharedBlogOptions,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'twiath',
        routeBasePath: 'fantasy',
        blogTitle: 'Fantasy Football',
        path: './twiath',
        ...sharedBlogOptions,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
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
          to: '/fantasy',
          label: 'Fantasy Football',
          position: 'left',
        },
        { to: '/uses', label: 'Uses', position: 'left' },
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
      theme: prismIcGreen,
      darkTheme: prismIcGreen,
      additionalLanguages: [
        'bash',
        'json',
        'yaml',
        'csharp',
        'java',
        'hcl',
        'toml',
        'sql',
        'docker',
        'editorconfig',
        'swift',
        'markdown',
        'typescript',
        'jsx',
        'python',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
