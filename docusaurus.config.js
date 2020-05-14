/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Eightshit Development kit',
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
    navbar: {
      logo: {
        alt: 'Eightshit Development kit Logo',
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
    footer: {
      style: "light",
    },
    algolia: {
      apiKey: '921996f662a2a05c1ffbcf2a87146376',
      indexName: 'infinum_eightshift',
    },
  },
  themes: [
    [
      "@wgao19/docusaurus-theme-no-style",
      {
        // path relative to your project root
        customCss: require.resolve("./src/scss/main.scss")
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs-legacy",
      {
        sidebarPath: require.resolve("./sidebars.js")
      }
    ],
    ["@docusaurus/plugin-content-blog"],
    ["@docusaurus/plugin-content-pages"],
    ['docusaurus-plugin-sass'],
  ]
};
