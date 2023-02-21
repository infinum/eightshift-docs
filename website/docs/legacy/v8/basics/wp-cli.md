---
id: wp-cli
title: WP-CLI
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

Eightshift Development Kit provides extensive [WP-CLI](https://wp-cli.org/) tooling, allowing you to automate bootstrapping of common code, adding blocks from the Frontend Libs library to your projects and more using `wp boilerplate`.

## How it works

In your project's entry point (usually `functions.php`), you'll find something along these lines:

```php
/**
 * Run all WP-CLI commands.
 */
if (\class_exists(Cli::class)) {
	(new Cli())->load('boilerplate');
}
```

This code loads the WP-CLI class from Eightshift Libs, which handles command registration for all of our commands. As this command registration is part of the theme/plugin code, this means that the same theme/plugin **must be activated** for `wp boilerplate` to work.

To run the WP-CLI command and see what you can use, run this command in your terminal:

`wp boilerplate --help`

> By default, your project's WP-CLI commands run under the parent name `boilerplate`, as defined above.

You can change that by simply replacing the string inside the load method like this:

```php
/**
 * Run all WP-CLI commands.
 */
if (\class_exists(Cli::class)) {
  (new Cli())->load('superCoolTheme');
}
```

Now, your project's WP-CLI commands are available using:

`wp superCoolTheme --help`.

This is especially handy when you have multiple Eightshift Boilerplate powered themes or plugins installed. In that case, you should change the WP-CLI parent name on each of the projects.

## Options and commands

To get to know which commands are available and what do they do, run `wp boilerplate --help`. 
The `--help` argument is available on all of our commands and provides a description of the command and a list of required and optional parameters for the command.

`wp boilerplate create config --help`

### Commands

We use these common prefixes for commands:

- **create** - services classes that will be copied to your project.
- **init** - additional functions, methods and helpers that will be copied to your project.
- **run** - commands used to run an action directly from Eightshift Libs. They will not copy anything to your project.
- **setup** - commands that runs multiple already defined commands from the list.
- **use** - commands used for blocks and block-related stuff. They will copy various files and folders from the blocks folder to your project.

> **Make WP-CLI your best friend, and your coding life will be much more comfortable, trust us.**

While we might go into more details about some of these commands, we won't be documenting all of them here - use the built-in manuals for more information about particular commands and to discover what's available. Don't gloss over them, as using `wp boilerplate` is a particularly useful tool when building projects with Eightshift Development Kit.

## Running commands in multisite

When you are running a multisite setup, you should always provide the additional `--url` parameter. Otherwise, WP-CLI will always run the command on the main site.

Here is an example for command running on the primary site:

`wp boilerplate create config`

and here is an example for command running on the subsite:

`wp boilerplate create config --url='custom.domain.com'`
