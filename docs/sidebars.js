// @ts-check
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper/introduction',
        'whitepaper/problem-statement',
        'whitepaper/solution',
        'whitepaper/tokenomics',
        'whitepaper/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Technical Docs',
      items: [
        'technical/architecture-overview',
        'technical/smart-contracts',
      ],
    },
  ],
};

module.exports = sidebars;
