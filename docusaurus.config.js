import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JSC Docusaurus',
  tagline: 'Documentació construïda amb Docusaurus',
  favicon: 'img/favicon.ico',

  // Configuració de GitHub Pages
  url: 'https://calaix.github.io',
  baseUrl: '/docusaurus/',

  organizationName: 'calaix',
  projectName: 'docusaurus',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Configuración de idioma
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca'],
    localeConfigs: {
      ca: {
        label: 'Català',
        htmlLang: 'ca-ES',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // CORREGIDO: Apunta al repositorio de GitHub y la carpeta de documentos
          editUrl: 'https://github.com/calaix/docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: false,
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'El Meu Lloc',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/calaix/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} JSC Docusaurus. Creat amb Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        showLineNumbers: true,
      },
    }),
};

module.exports = config;
