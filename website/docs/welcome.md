---
id: welcome
title: Welcome
---

## Eightshift Development Kit

Eightshift Development Kit is a modern, developer-friendly solution that makes building large, feature-rich WordPress projects painless. 
It contains all the tools you need to start building a modern WordPress theme or plugin, using battle-tested front-end and back-end development tools and practices.

### Features

The Eightshift Development Kit provides you with a lot of useful features, so let's take a quick look at some of the core ones:
- **Custom Block Editor blocks** - Using automatic block registration and attribute handling features, building dynamic Gutenberg blocks with the Eightshift Development Kit is a joy. We also provide an extensive library of blocks and components that you can use and customize in your projects. 
  - **Dynamic blocks** - The Eightshift Development Kit is focused on supporting dynamic blocks, a type of WordPress blocks that are rendered from attributes instead of being serialized as HTML. Dynamic blocks allow you more flexibility when developing and avoid issues with Gutenberg's validation, ensuring you can ship new features and update existing blocks in record time.
  - **Components** - Extract commonly used parts into _components_. Manage attributes on the component level. Use powerful composition features to build blocks from multiple components, or even multiple instances of them without worrying about attribute registration. It's a game-changer.
  - **The Manifest** - Every block and component has a `manifest.json` file, which is a single source of truth for metadata about your block.
- **Sustainable coding practices** - All our code follows battle-tested programming practices.
  - **OOP** - Object-oriented programming is at the core of the Development Kit. Extend our classes or replace them entirely. Need to build a new WP-CLI command? [There's an abstract class for that.](https://github.com/infinum/eightshift-libs/tree/develop/src/Cli)
  - **DI** - Eightshift Development Kit ships with a dependency injection container set up out of the box.
  - **Code style** - Linters for PHP, JavaScript and SCSS ship out of the box, helping you write better code. Also, all of our code [follows Eightshift Coding Standards](https://github.com/infinum/eightshift-coding-standards/) - consistency assured.
  - **Unit tests** - We use Pest and Jest to run unit tests on our code, catching bugs early.
  - **Great documentation** - Apart from this website, everything in the code is commented and covered with Docblocks.
- **WP-CLI** - Eightshift Development Kit provides amazing WP-CLI tooling. Import blocks and components from our collection. Build custom commands with ease. Include Development Kit features at will. 
- **Frontend build processes** - Eightshift Development Kit comes with Webpack preconfigured. Tweak it to your needs or keep our defaults - it's up to you. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!
- **First-class CSS variables** - Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code.
- **Cache busting** - Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production.

### Parts of the Development Kit

Eightshift Development Kit consists of a few separate projects. It's useful to know what they are, especially if you're contributing to the Development Kit.
#### Eightshift Libs - [docs](eightshift-libs) | [github](https://github.com/infinum/eightshift-libs)

Eightshift Libs handles backend functionality and provides backend support for your projects. This includes abstract classes and interfaces for our core features, dependency injection, asset enqueuing, filter & actions and more.

#### Eightshift Frontend Libs - [docs](eightshift-frontend-libs) | [github](https://github.com/infinum/eightshift-frontend-libs)

Eightshift Frontend Libs houses our frontend code, including various helpers, JavaScript functionality, SCSS styles, and block and component defaults.

#### Boilerplate

We provide [boilerplates for themes](https://github.com/infinum/eightshift-boilerplate) and [plugins](https://github.com/infinum/eightshift-boilerplate-plugin/), so you can start building your project right away - without manually setting up the libraries above.

The easiest way to set up the Development Kit is to use the `npx create-wp-project` command, which we'll go into further detail about in the following chapters.
