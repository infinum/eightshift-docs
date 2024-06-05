---
id: theme
title: Create a new WordPress theme
sidebar_label: Create New Theme
---

Let's create a new theme!

Navigate to your WordPress theme folder and run the following command:

```bash
npx eightshift-create theme
```

The script will prompt you for a theme name and local development URL (used for BrowserSync). After that, your new theme will be installed:

![](/img/setup.gif)

After the script is finished, your new theme will be set up and activated.

## Specify version to create

If you want to specify a version of Eightshift Libs or Frontend Libs to use, you can use add two additional attributes to this command to specify a branch or release to use:

* `--setupRepoUrl`
* `--setupRepoBranch`
* `--libsRepoBranch`
* `--frontendLibsRepoBranch`

#### Example:

If you want to pull the `develop` branch of the Eightshift Frontend Libs and a specific release of the Eightshift Libs:

```bash
npx eightshift-create theme --libsRepoBranch="release/3.1.0" --frontendLibsRepoBranch="develop"
```

You can also specify the version of the `eightshift-create` script like this:

```bash
npx eightshift-create@2.0.12 theme --libsRepoBranch="release/3.1.0" --frontendLibsRepoBranch="develop"
```

You can get a list of available script arguments by running:

```bash
npx eightshift-create theme --help
```

:::tip
You can specify both libraries at once or only one.
:::

## What is next?
Now that we've set the theme up on your local environment, let's do something with it.

Please make sure you read the [Basics chapter](/docs/basics/basics-intro) to understand better how the project is set and what is included to make your developing experience as smooth as possible.
