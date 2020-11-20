---
id: theme
title: Create new WordPress theme
sidebar_label: Theme Setup
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/setup/create-wp-project)

Eightshift boilerplate contains all the tools you need to start building a modern WordPress theme, using all the latest front end development tools.

[Please go here if you wish to setup a plugin instead](https://infinum.github.io/eightshift-docs/docs/plugin/).

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)
3. [WP-CLI](https://wp-cli.org/)
4. [Git](https://git-scm.com/)

Please make sure that you have all this packages installed and
ready to use on your system. To make sure that they work run this commands:
```bash
node -v
composer -v
wp --info
git --version
```

If it doesn't return any errors you are good to go.

## Quick start
Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```bash
npx create-wp-project
```

Script will prompt you for theme name and local development url (used for BrowserSync) and install a new theme:

![](https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/package/setup.gif)

After the script is finished, please follow the instructions provided by the setup script.

All additional steps after the initial setup are done using WP_CLI commands so please make sure that you have WP-CLI set and ready to use.

## What is next?
Now that we have theme set on your local enviroment, lets do something with it. 

Please make sure you read the Basics chapter to get a better idea how the project is set and what do we use to make your developing experience as smooth as possible.

After Basic chapter you can find all 
