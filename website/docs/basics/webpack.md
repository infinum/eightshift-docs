---
id: webpack
title: Webpack
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

At its core, Webpack is a static module bundler for modern JavaScript applications. When Webpack processes your application, it builds an internal dependency graph that maps every module your project needs and generates one or more bundles. [Learn more about Webpack](https://webpack.js.org/concepts/).

To put it simply, Webpack takes your development files and creates a production-ready version of them based on the config.

Eightshift Development Kit comes with everything set up out of the box. In the root of your project, you will find a file called `webpack.config.js`. If you open it, you will see that the configuration is pulled from the Eightshift Frontend Libs library.

You can remove this config and write everything from scratch (keep in mind that this is a lot of work), or you can use our config and extend/remove whatever you need.

## Override built-in functionality

To remove built-in functionality, add a new array to the config called `overrides`.
If you provide any of the `overrides` keys, it will remove that config from the feature from the build.

You can't change our config; you can only remove it and make your own.

Here is a list of all the features that we use and how to remove them.

```js

const projectConfig = {
  config: {
    ... everything from default setup
  },
  overrides: [
    // Located in project.js
    'application',
    'applicationAdmin',
    'applicationBlocks',
    'applicationBlocksEditor',
    'filename',

    // Located in base.js
    'cleanWebpackPlugin',
    'providePlugin',
    'definePlugin',
    'miniCssExtractPlugin',
    'webpackManifestPlugin',
    'dependencyExtractionWebpackPlugin',
    'runtimeChunk',
    'js',
    'images',
    'fonts',
    'scss',

    // Located in development.js
    'browserSyncPlugin',

    // Located in production.js
    'terserPlugin',
    'cssMinimizerPlugin',
  ],
}
```

## Add new custom functionality

Let's say you want to add a custom `html-webpack-plugin` to the build. You can simply use all the native [webpack features](https://webpack.js.org/guides/), like in this example:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

  ...

  return {
    // Load all projects config from eightshift-frontend-libs.
    ...project,

    plugins: [
      // Load all plugins config from eightshift-frontend-libs.
      ...project.plugins,

      // Add your custom implementation.
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
      // ... everything from default setup
    },
    overrides: [
      'browserSyncPlugin', // this removes our configuration.
    ],
  };

  // Generate Webpack config for this project using options object.
  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);

  return {
    // Load all projects config from eightshift-frontend-libs.
    ...project,

    plugins: [
      // Load all plugins config from eightshift-frontend-libs.
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

## Add a new entrypoint

Let's say you want to add a new, separate JS and/or CSS build for some specific functionality. This functionality may or may not have anything to do with your WordPress theme or plugin, but it needs to be in separate files. To do that you'd need to add a new entrypoint for Webpack to build in `webpack.config.js`:

```js
module.exports = (env, argv) => {

  ...

  return {
    // Load all projects config from eightshift-frontend-libs.
    ...project,

    entry: {
      // Load all entry points config from eightshift-frontend-libs.
      ...project.entry,

      // Your custom build entrypoint.
      newBuild: path.resolve(projectConfig.config.projectDir, 'assets', 'application-newBuild.js'),
    },
  };
};
```

Next thing you'd do is create `application-newBuild.js` in `assets/` directory, in which you'd import and JS or SCSS partials. After restarting the build process, the results should be visible in `public/` directory as new JS or CSS files.
