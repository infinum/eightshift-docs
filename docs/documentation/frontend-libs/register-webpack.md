---
id: frontend-libs-register-webpack
title: Register Webpack
sidebar_label: Register Webpack
---

## Default Config

In order to use this library, you'll need to have a `webpack.config.js` file in the root of your theme.

This file holds basic configuration that will build your assets correctly and provide browsersync functionality. 

`webpack.config.js` is a main entrypoint for webpack config and looks like this:

```js
/* eslint-disable import/no-dynamic-require, global-require */

module.exports = (env, argv) => {

  const projectConfig = {
    config: {
      projectDir: __dirname, // Current project directory absolute path.
      projectUrl: 'local-url.test', // Used for providing browsersync functionality.
      projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.
      assetsPath: 'src/blocks/assets', // Assets path after projectPath location. (add this key only to override the default value.)
      blocksAssetsPathConfig: 'src/blocks/assets', // Blocks assets path after projectPath location. (add this key only to override the default value.)
      outputPath: 'public', // Public output path after projectPath location. (add this key only to override the default value.)
    },
  };

  // Generate webpack config for this project using options object.
  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);

  return {
    ...project,
  };
};
```

## Override built-in functionality

To remove built-in functionality, add a new array to the config called `overrides`.
If you provide any of the `overrides keys`, it will remove that config from the build.
Here is a list of all the features that we use and how to remove them.

```js

const projectConfig = {
  config: {
    ...
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

## Add Custom build

If you want to add something custom to your build, you can simply use all the native [webpack features](https://webpack.js.org/guides/) by providing it like in the example:

```js
/* eslint-disable import/no-dynamic-require, global-require */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

  ...

  return {
    ...project,
    plugin: [
      new HtmlWebpackPlugin(),
    ]
  };
};

```
