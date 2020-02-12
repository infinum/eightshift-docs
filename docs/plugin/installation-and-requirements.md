---
id: boilerplate-plugin-installation
title: Installation and Requirements
---

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)

## Quick start
Let's create a new plugin!

Navigate to your WordPress plugin folder and run the following command:

```
npx create-wp-project plugin
```

Script will prompt you for plugin name and local development url (used for BrowserSync) and install a new plugin:

![](https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/package/setup.gif)

After the script is finished, you can activate the plugin through WP Admin Dashboard. 

To start developing run this command from projects root folder:
```
npm start
```
