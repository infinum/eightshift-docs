---
id: browser-sync
title: Browser Sync
sidebar_label: Browser Sync
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)


[Browsersync](https://browsersync.io/docs) is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change.

Besides that, you can test your site on various devices on the same network.

If comes with the boilerplate by default. When you run:

```bash
npm start
```

it will proxy the page you've specified in the `projectUrl` to your local server.

```bash
[Browsersync] Proxying: https://local-url.test
[Browsersync] Access URLs:
 --------------------------------------
       Local: https://localhost:3000
    External: https://192.168.0.25:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
```

Using the IP address, you can open it on any device (mobile phone or tablet) that is connected to the same network, and see how your site looks on that device.

## Override default functionality

If you need to override the default settings (because you are using HTTPS or change some default configuration), you'll need to disable the default config and add your own.

For example, if you wanted to use `HTTPS` instead of `HTTP` in your local development, you'd put the following in your `webpack.config.js`:

```js
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * This is the main entry point for Webpack config.
 * All the settings are pulled from node_modules/@eightshift/frontend-libs/webpack.
 * We are loading mostly used configuration, but you can always override or turn off the default setup and provide your own.
 * Please referrer to Eightshift-libs wiki for details.
 */
module.exports = (env, argv) => {

  const projectConfig = {
    config: {
      projectDir: __dirname, // Current project directory absolute path.
      projectUrl: 'local-url.test', // Used for providing browsersync functionality.
      projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.
    },
    overrides: [
      'browserSyncPlugin', // Disable the default.
    ],
  };

  // Generate webpack config for this project using options object.
  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);

  return {
    ...project,
    plugins: [
      ...project.plugins,
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'https://local-url.test', // It's important to add the protocol when using https!
        https: true,
      }, {
        reload: false,
      }),
    ],
  };
};
```
