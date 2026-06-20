import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import prismIcGreen from './src/theme/prismIcGreen';
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
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          blogListComponent: '@site/src/components/RedirectToLatestPost',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
        blogSidebarTitle: 'Posts',
        blogSidebarCount: 'ALL',
        blogListComponent: '@site/src/components/RedirectToLatestPost',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
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
          to: '/fantasy',
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
      theme: prismIcGreen,
      darkTheme: prismIcGreen,
      additionalLanguages: [
        'bash',
        'diff',
        'json',
        'yaml',
        'csharp',
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
        'graphql',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
