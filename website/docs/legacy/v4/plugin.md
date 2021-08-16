---
id: plugin
title: Create new WordPress plugin
sidebar_label: Plugin Setup
---

Eightshift boilerplate contains all the tools you need to start building a modern WordPress plugin, using all the latest front end development tools.

[Please go here if you wish to setup a theme instead](https://infinum.github.io/eightshift-docs/docs/theme/).

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)

## Quick start

Let's create a **new plugin**!

Navigate to your WordPress plugin folder (`wp-content/plugins`) and run the following command:

```bash
npx create-wp-project plugin
```

Script will prompt you for some info and install a new plugin. After it's finished, you can **activate the plugin through WP Admin Dashboard**.

To start developing run this command from plugin's root folder:

```bash
npm start
```

## Script arguments

You can get a list of available script arguments by running:

```bash
npx create-wp-project --help
```

<div class="legacy-badge legacy-badge--v4"></div>
