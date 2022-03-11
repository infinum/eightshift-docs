---
id: eightshift-frontend-libs
title: Eightshift Frontend Libs
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

This library is meant to bring modern front-end development tools to the [Eightshift Boilerplate](https://github.com/infinum/eightshift-boilerplate) or [Eightshift Boilerplate Plugin](https://github.com/infinum/eightshift-boilerplate-plugin), but you can use it on any WordPress project.

## Prerequisites

The knowledge of the core editor components and React.js is recommended, since this library is focused on working with the new block editor and contains custom blocks. If you want to create your custom blocks, that knowledge will come in handy.

The library can be used for pure Webpack/JS/SCSS functionality, but if you want to use our blocks, [Eightshift Libs](https://github.com/infinum/eightshift-libs/) must be used in tandem because they handle block registration, attribute handling and more.

### The library contains:

- All JS packages required for the Webpack build
- ESLint ruleset
- Stylelint ruleset
- Babel ruleset
- A collection of useful front-end utility modules
- The complete storybook of over 30+ useful blocks and components
- Block editor block examples
- A growing collection of blocks and components
- The complete Webpack build for [Eightshift Boilerplate](https://github.com/infinum/eightshift-boilerplate)
- Helpers for creating dynamic block editor blocks
- ...

## How to integrate into an existing project

The process of integrating the libs into an existing project is not easy, because it really depends on how your theme or plugin is built. Our libs expect the usage of namespacing, and adding namespace in a non namespaced codebase can potentially cause breakage.

You can try to manually add the backend libs using composer and frontend using npm, but the process of connecting everything up can be a complex one. So we recommend starting from a clean slate.

## Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/infinum/eightshift-frontend-libs/issues) on GitHub, and we will do our best to give you a timely answer.
