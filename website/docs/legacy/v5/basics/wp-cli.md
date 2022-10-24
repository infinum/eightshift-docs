---
id: wp-cli
title: WP-CLI
sidebar_label: WP-CLI
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)

We have already mentioned the WP-CLI feature of Eightshift Boilerplate. Now, let's dig a little deeper into this awesome feature. We took our time to set up a bunch of WP-CLI commands that will help you set everything up and use all our features without worrying about correct names, files, and organization.

## How it works

In your project's entry point, you have something like this:

```php
/**
 * Run all WP-CLI commands.
 */
if (class_exists(Cli::class)) {
  (new Cli())->load('boilerplate');
}
```

This code loads WP-CLI class from Eightshift Libs responsible for registering all of our custom commands. Keep in mind that, since WP-CLI code loads inside the theme/plugin, that same theme/plugin **must** be activated in the WordPress admin.

To run the WP-CLI command and see what you can use, run this command in your terminal:

`wp boilerplate --help`

> By default, your project's WP-CLI commands run under the parent name `boilerplate` defined in the upper code.

You can change that by simply replacing the string inside the load method like this:

```php
/**
 * Run all WP-CLI commands.
 */
if (class_exists(Cli::class)) {
  (new Cli())->load('superCoolTheme');
}
```

Now, your project's WP-CLI loads like this:

`wp superCoolTheme --help`.

This is especially handy when you have multiple Eightshift Boilerplate powered themes or plugins installed. In that case, you should change the WP-CLI parent name on each of the projects.

## Options and commands

When you type each command in the terminal, it will do some action. Some commands will ask you for additional parameters. You can see them if you run the `command name` and `--help` like this:

`wp boilerplate create_config --help`

Under the `OPTIONS`, you can see all required and optional parameters you can pass to the command to fine-tune your output.

### Commands

We have defined a few command prefixes:

- **create** - services classes that will be copied to your project.
- **init** - additional functions, methods and helpers that will be copied to your project.
- **run** - commands used to run an action directly from Eightshift Libs. They will not copy anything to your project.
- **setup** - commands that runs multiple already defined commands from the list.
- **use** - commands used for blocks and block-related stuff. They will copy various files and folders from the blocks folder to your project.

> **Make WP-CLI your best friend, and your coding life will be much more comfortable, trust me.**

We will explain the classes that we think are necessary and should be described in more detail. For the rest of the classes, you can find the descriptions by running `--help` after each command.
