// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doomer.AI',
  tagline: 'Dominating the digital realm',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Doomer', // Usually your GitHub org/user name.
  projectName: 'Doomer', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Doomer/Doomer/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Doomer/Doomer/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
  title: 'Doomer.AI',
  logo: {
    alt: 'Doomer.AI Logo',
    src: 'img/logo.svg', // Replace this with the path to your logo file
  },
  items: [
    {
      to: '/docs/intro',
      label: "Let's Begin",
      position: 'left',
    },
    {
      type: 'doc',
      docId: 'whitepaper',
      label: 'Whitepaper',
      position: 'left',
      items: [
        {
          label: 'Introduction',
          to: '/docs/whitepaper/introduction',
        },
        {
          label: 'Problem Statement',
          to: '/docs/whitepaper/problem-statement',
        },
        {
          label: 'Solution',
          to: '/docs/whitepaper/solution',
        },
        {
          label: 'Tokenomics',
          to: '/docs/whitepaper/tokenomics',
        },
        {
          label: 'Roadmap',
          to: '/docs/whitepaper/roadmap',
        },
      ],
    },
    {
      type: 'doc',
      docId: 'technical',
      label: 'Technical Docs',
      position: 'left',
      items: [
        {
          label: 'Architecture Overview',
          to: '/docs/technical/architecture-overview',
        },
        {
          label: 'Smart Contracts',
          to: '/docs/technical/smart-contracts',
        },
        {
          label: 'API Documentation',
          to: '/docs/technical/api-documentation',
        },
        {
          label: 'Integration Guide',
          to: '/docs/technical/integration-guide',
        },
        {
          label: 'Security Measures',
          to: '/docs/technical/security-measures',
        },
      ],
    },



        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Doomer/Doomer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Doomer, Inc. Built with Doomer.AI.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
