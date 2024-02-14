---
id: addon-boilerplate
title: Add-on boilerplate
---

We have created a boilerplate for creating a new addon for the Eightshift Forms plugin. This boilerplate will help you to create a new addon with the correct structure and naming conventions.

You can download the boilerplate from the [Eightshift Forms Addon Boilerplate](https://github.com/infinum/eightshift-forms-addon-boilerplate) repository.

## How to use the boilerplate
1. Clone the [Eightshift Forms Addon Boilerplate](https://github.com/infinum/eightshift-forms-addon-boilerplate) repository.
2. Rename the `eightshift-forms-addon-boilerplate` folder to `eightshift-forms-addon-<addon-name>`.
3. Run the `composer install` command to install the required dependencies.
4. Add the addon plugin to you projects plugins folder.
5. Activate the addon plugin.

### Using CSS, JavaScript or Blocks?

If you are using custom CSS, JavaScript or Blocks:
1. Change the `webpack.config.js` file `output.library` key to avoid conflicts with the main plugin.
2. Run the `npm install` command to install the required dependencies.
3. Run the `npm start` command to start the development environment.

### Not using CSS, JavaScript or Blocks?

If you are not using custom CSS, JavaScript or Blocks you can remove the following files and folders:
* `src/Blocks` folder.
* `src/Manifest` folder.
* `src/Enqueue` folder.
* `.eslintignore` file.
* `.eslintrc` file.
* `.stylelintrc` file.
* `postcss.config.js` file.
* `webpack.config.js` file
* `package.json` file

