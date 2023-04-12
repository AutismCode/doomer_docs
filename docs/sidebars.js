module.exports = {
  mySidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Technical',
      items: [
        'technical/overview',
        'technical/architecture',
        'technical/implementation',
        'technical/usage',
        'technical/api-reference',
      ],
    },    
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
      label: 'The Story',
      items: [
        'story/begin',
        'story/enjoying-the-process',
        'story/the-transformation',
      ],
    },
  ],
};
