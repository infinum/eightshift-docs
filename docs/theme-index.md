---
id: theme-index
title: Create new WordPress theme
---

You can easily setup a new WordPress theme with our setup script.

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)

## Quick start 
Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```
npx create-wp-project
```

Script will prompt you for theme name and local development url (used for BrowserSync) and install a new theme:

![](https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/package/setup.gif)

After the script is finished, you can activate the theme through WP Admin Dashboard. 

To start developing run this command from projects root folder:

```
npm start
```

## Script arguments

You can get a list of available script arguments by running:

```
npx create-wp-project --help
```

## Features

Here's why you should use Eightshift Boilerplate for your next project.

- **OOP** - All code is written following the latest object-oriented programming paradigms
- **[Webpack](https://webpack.js.org/)** - Modern bundling & build process
- **[SASS (scss)](https://sass-lang.com/)** - Easy to learn CSS on steroids
- **[Autoprefixing](https://autoprefixer.github.io/)** - Automatically adds vendors prefixes to your CSS
- **[JS Compiler (Babel)](https://babeljs.io/)** - Write JS using the latest features and let webpack worry about making it work accross all browsers
- **Minifying** - Automatically minifies your production assets (JS / CSS) during build process
- **Cache busting** - Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.
- **[Synchronised browser testing](https://www.browsersync.io/)**
- **Helps you write better code (automatic code linting)**
  - [phpcs](https://github.com/squizlabs/PHP_CodeSniffer)
  - [eslint](https://eslint.org/)
  - [stylelint](https://stylelint.io/)
- **[Easy SASS media queries](https://github.com/infinum/media-blender)**
- **[Eightshift Libs](https://github.com/infinum/eightshift-libs)** - Library aimed at bringing the modern development tools to your project.
- **[Eightshift Frontend Libs](https://github.com/infinum/eightshift-frontend-libs)** - A collection of useful frontend utility modules and all the tools you need to start building a modern Gutenberg dynamic blocks.