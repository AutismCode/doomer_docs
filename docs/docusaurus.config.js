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
        {to: '/docs/story/begin', label: 'Its not a MEME', position: 'left'},
        {to: '/docs/technical/overview', label: 'Technical Docs', position: 'left'},
        {to: '/docs/whitepaper/introduction', label: 'Whitepaper', position: 'left'},
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
