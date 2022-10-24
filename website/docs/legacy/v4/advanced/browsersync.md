---
id: browsersync
title: Browsersync
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/webpack/development.js)

[Browsersync](https://browsersync.io/docs) is a Node module that enables you to develop sites faster. It will react to any code change and will 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured it will inject a script on your web page that will react to any code change.

Besides that, you can test your site on various devices on the same network.

If comes by default with the libs, and when you run:

```bash
npm start
```

it will proxy the page you've specified in the `projectUrl` to your local server

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

Using the IP address you can open it on any device (mobile phone or a tablet) that is connected to the same network and you'll see how your site looks like on them.

## Override default functionality

If you need to override the default settings (because you are using https, or want to change some default configuration), you'll first need to disable the default config and add your own.

For example, if you want to use `https` instead of `http` in your local development you'd put in your `webpack.config.js`:

```js
/* eslint-disable import/no-dynamic-require, global-require */

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * This is a main entrypoint for Webpack config.
 * All the settings are pulled from node_modules/@eightshift/frontend-libs/webpack.
 * We are loading mostly used configuration but you can always override or turn off the default setup and provide your own.
 * Please referer to Eightshift-libs wiki for details.
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
