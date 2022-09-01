---
id: browser-sync
title: Browsersync
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0)


[Browsersync](https://browsersync.io/docs) is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change.

Besides that, you can test your site on various devices on the same network.

It's part of the Eightshift Development Kit by default. When you run:

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

## Using SSL for local development

By default, BrowserSync does not work with HTTPS URLs. If you use HTTPS in your local environment you can simply provide an additional key in the Webpack config to make it work.

```js
module.exports = (env, argv) => {
	const projectConfig = {
		config: {
			projectDir: __dirname, // Current project directory absolute path.
			projectUrl: 'local-url.test', // Used for providing browsersync functionality.
			projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.
			useSsl: true,
		},
	};

	// Generate webpack config for this project using options object.
	return require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);
};
```
