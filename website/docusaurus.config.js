module.exports = {
  title: 'Eightshift Development kit',
  tagline: 'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
  url: 'https://infinum.github.io',
  baseUrl: '/eightshift-docs/',
  favicon: 'img/favicon.png',
  organizationName: 'infinum', // Usually your GitHub org/user name.
  projectName: 'eightshift-docs', // Usually your repo name.
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true,
    }
  ],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: 'Eightshift Development kit Logo',
        src: 'img/eightshift-dev-kit-logo.svg',
      },
      links: [
        {
          to: '/get-started',
          activeBasePath: 'pages',
          label: 'Get Started',
          position: 'right',
        },
        {
          to: 'docs/introduction',
          activeBasePath: 'introduction',
          label: 'Docs',
          position: 'right',
        },
        {
          to: '/storybook/',
          activeBasePath: 'storybook',
          label: 'Storybook',
          position: 'right',
        },
        {
          to: '/sass',
          activeBasePath: 'sass',
          label: 'Sass',
          position: 'right',
        },
      ],
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
    },
    algolia: {
      apiKey: '921996f662a2a05c1ffbcf2a87146376',
      indexName: 'infinum_eightshift',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/scss/application.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};