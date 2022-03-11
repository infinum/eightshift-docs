---
id: theme
title: Create a new WordPress theme
sidebar_label: Create New Theme
---

Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```bash
npx create-wp-project
```

The script will prompt you for a theme name and local development URL (used for BrowserSync). After that, your new theme will be installed:

![](/img/setup.gif)

After the script is finished, please follow the instructions provided by the setup script.

All additional steps after the initial setup are done using WP_CLI commands, so please make sure that you have WP-CLI set and ready to use.

## Specify version to create

If you want to specify a version of Eightshift Libs or Frontend Libs to use, you can use add two additional attributes to this command to specify a branch or release to use:

* `--eightshiftLibsBranch`
* `--eightshiftFrontendLibsBranch`

#### Example:

If you want to pull the `develop` branch of the Eightshift Frontend libs and a specific release of the Eightshift Libs:

```bash
npx create-wp-project --eightshiftLibsBranch="release/3.1.0" --eightshiftFrontendLibsBranch="develop"
```

You can also specify the version of the `create-wp-project` script like this:

```bash
npx create-wp-project@2.0.12 --eightshiftLibsBranch="release/3.1.0" --eightshiftFrontendLibsBranch="develop"
```

You can get a list of available script arguments by running:

```bash
npx create-wp-project --help
```

> You can specify both libraries at once or only one.

## What is next?
Now that we've set the theme up on your local environment, let's do something with it.

Please make sure you read the [Basics chapter](basics/basics-intro) to understand better how the project is set and what is included to make your developing experience as smooth as possible.
