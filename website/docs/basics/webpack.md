---
id: webpack
title: Webpack
sidebar_label: Webpack
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

At its core, Webpack is a static module bundler for modern JavaScript applications. When Webpack processes your application, it internally builds a dependency graph that maps every module your project needs and generates one or more bundles. Learn more about Webpack [here](https://webpack.js.org/concepts/).

To put this simply, Webpack takes your development files and creates a production or development version of them based on the config.

Eightshift Boilerplate comes with everything set for you to use out of the box. In the root of your project, you will find a file called `webpack.config.js`. If you open it, you will see that the configuration is pulled from the Eightshift Frontend Libs library.

You can remove this config and write everything from scratch (keep in mind that this is a lot of work), or you can use our config and extend/remove whatever you need.

## Override built-in functionality

To remove built-in functionality, add a new array to the config called `overrides`.
If you provide any of the `overrides keys`, it will remove that config from the feature from the build.

You can't change our config; you can only remove it and make your own.

Here is a list of all the features that we use and how to remove them.

```js

const projectConfig = {
  config: {
    ... everything from default setup
  },
  overrides: [
    'application',
    'applicationAdmin',
    'applicationBlocks',
    'applicationBlocksEditor',
    'filename',
    'cleanWebpackPlugin',
    'terserPlugin',
    'browserSyncPlugin',
    'providePlugin',
    'manifestPlugin',
    'miniCssExtractPlugin',
    'copyWebpackPlugin',
    'optimizeCSSAssetsPlugin',
    'js',
    'scss',
    'images',
    'fonts',
    'runtimeChunk',
  ],
}
```

## Add a new custom functionality

Let's say you want to add a custom `html-webpack-plugin` to the build; you can simply use all the native [webpack features](https://webpack.js.org/guides/) by providing it like in the example:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

  ...

  return {
    ...project,
    plugins: [
      ...project.plugins,
      new HtmlWebpackPlugin(),
    ],
  };
};
```

## Change the default config

Let's say you want to change what we made and adjust it to your specific needs. In that case, you should remove our functionality by providing the `overrides` array and create your implementation. For example:

```js
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env, argv) => {

  const projectConfig = {
    config: {
      ... everything from default setup
    },
    overrides: [
      'browserSyncPlugin', // this removes our configuration.
    ],
  };

  // Generate webpack config for this project using options object.
  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);

  return {
    ...project,
    plugins: [
      ...project.plugins,

      // This provides your configuration.
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        https: true,
      }),
    ],
  };
```
