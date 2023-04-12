const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
const config = {
  title: 'Doomer.AI',
  tagline: 'Unleashing the Power of Decentralized AI',

  url: 'https://x.doomer.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Doomer', // Usually your GitHub org/user name.
  projectName: 'Doomer', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Doomer.AI',
      logo: {
        alt: 'Doomer.AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Let\'s Begin',
        },
        {to: '/docs/whitepaper/introduction', label: 'Whitepaper', position: 'left'},
        {to: '/docs/technical/architecture-overview', label: 'Technical Docs', position: 'left'},
        {
          href: 'https://github.com/Doomer/Doomer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Doomer/Doomer/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/Doomer/Doomer/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  headTags: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Chivo+Mono&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
};

module.exports = config;
