---
id: wp-cli
title: WP-CLI
---

## What is WP-CLI?

WP-CLI is the command-line interface for WordPress. You can update plugins, configure multisite installs and much more, without using a web browser.

## Available commands

Eightshift Forms offers a few commands that can be used to speed up your development process.

### copy_stylesheet_set

This stylesheet set is used to give you a head start in providing your own style to the form. It will copy a predefined stylesheet set to your active theme as a new `component` and give you all the files necessary to provide your own style.

:::note
After adding a custom stylesheet, make sure to deactivate built-in styles in Global settings!
:::

``` bash
wp eightshift-forms copy_stylesheet_set
```

**Available options**:
* `--additional-path=<additional-path>` - Set additional path relative from the active theme. Example. `src/Blocks/components`.
