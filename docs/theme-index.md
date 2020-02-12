---
id: theme-index
title: Create new WordPress theme
sidebar_label: Setup
---

Eightshift boilerplate contains all the tools you need to start building a modern WordPress theme, using all the latest front end development tools.

[Please go here if you wish to setup a plugin instead](plugin-index).

## Requirements

1. [Node.js](https://nodejs.org/en/)
2. [Composer](https://getcomposer.org/)

## Quick start 
Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```
npx create-wp-project
```

Script will prompt you for theme name and local development url (used for BrowserSync) and install a new theme:

![](https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/package/setup.gif)

After the script is finished, you can activate the theme through WP Admin Dashboard. 

To start developing run this command from theme's root folder:

```
npm start
```

## Script arguments

You can get a list of available script arguments by running:

```
npx create-wp-project --help
```