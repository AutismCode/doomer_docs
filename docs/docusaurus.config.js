const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
const config = {
  title: 'Doomer.AI',
  tagline: 'The decentralized AI platform',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Doomer', // Usually your GitHub org/user name.
  projectName: 'Doomer', // Usually your repo name.
  themeConfig: {
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
};

module.exports = config;
