---
title: Making your project multilingual
description: Examples of using I18n in a project
slug: making-your-project-multilingual
authors: obradovic
date: 2024-02-01
tags: [eightshift, boilerplate, i18n, multilingual]
hide_table_of_contents: false
---

Tools like Google Translate can automatically translate websites with reasonable quality. However, users will have a much better experience if you add support for multiple languages in your project and manage the translations yourself.
<!--truncate-->

## Making strings translatable in PHP
A good practice is to use one of the I18n (internationalization) functions for your hardcoded strings, even if your website starts with a single language. This way, you can add multilingual support more easily later.

If you've worked on a multilanguage-capable project, you most likely came across `__()` and `_e()` functions. The main difference between the `__()` and `_e()` is that `__()` returns the value, while `_e()` echoes it. Both functions take two arguments: the first one is the string to be translated, and the second one is the textdomain that identifies the translation file.

> Textdomain is usually your project name written in kebab-case.

While WordPress functions like `__()` and `_e()` will definitely do the job, it is much better to use the variants of these functions that also escape the output. These are `esc_html__()` and `esc_html_e()`. There are also a few more functions for I18n you can use, but to keep it simple, we'll just mention these two for now.

Here is an example of using one of these functions:
```php
<?php echo esc_html__('Contact', 'project-name'); ?>
```

## Making strings translatable in JS
To translate the strings in the Block editor or options, you will first have to import the function from the `@wordpress/i18n` library.
```jsx
import { __ } from '@wordpress/i18n';
```
To output your string, simply use it like this:
```jsx
{__('Icon position', 'project-name')}
```

Alternative functions you can use are:
- `_n` for singular/plural forms
- `_nx` for singular/plural forms with _gettext_ context
- `_x` for a translated string with a _gettext_ context

You can refer to the [block editor handbook](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/) for more information on these functions.

## The I18n class
The easiest way to add I18n support to a project created with Eightshift boilerplate is by using the WP-CLI command:
```bash
wp boilerplate create i18n
```

This command generated a new class inside the `src/I18n` folder. This class instructs WordPress to look for translations in `src/I18n/languages` with the textdomain defined as your project name. The next step is generating .po and .mo files that are used for translation.

## Generating .pot file
You can create a `.pot` (_Portable object template_) file by using WP-CLI. Run the following command in your project root:
```bash
wp i18n make-pot
```

Alternatively, you can use tools like [Poedit](https://poedit.net/) to generate a `.pot` file and generate translations from it later.

## Translating with Poedit
Once you have the `.pot` file, you can use Poedit to generate `.po` and `.mo` files that are used for translating hardcoded strings in your project. When generating the files, you can choose for which locale you're creating the translation for. For example, if you are creating a translation for the German language, your files should be named `de_DE.po` and `de_DE.mo`.

After generating the files, go to **Translation -> Properties** and navigate to the **Sources Paths** tab. Set the _Base path_ to the theme folder path. In _Excluded paths_ you can add folders like `node_modules`, `vendor`, and `public` to exclude external packages.

In the _Sources keywords_ tab you can set additional functions for use in your project for translations. Commonly used functions are:
- `_e` for translating a string and echoing it
- `__` for returning a translated string
- `esc_html__` for returning a translated string which is escaped in a way it's safe to use within HTML
- `esc_html_e` for echoing a translated string which is escaped in a way it's safe to use within HTML
- `esc_attr__` for returning a translated string which is escaped in a way it's safe to use within an attribute
- `esc_html_x` for returning a translated string which is escaped in a way it's safe to use within HTML, with a _gettext_ context
- `_n` for returning a translated string in a singular or plural form, based on the supplied number

> If you're missing a string in your `.po` file be sure to check which function is used for translation for that string, and that the function is added to _Sources keywords_.

After updating the settings, click on _Update from source code_ option to get the updated list of strings to translate.

The translation process is simple. The left column represents the source text, and the right column the translation. When you have finished translating the strings, copy the `.po` and `.mo` files to the `src/I18n/languages` folder.

## JS translations
The process of translating strings in JS has a couple of extra steps.

In order to translate strings in JS (e.g. Block editor strings), you will have to generate translation file. To do this, navigate to your `src/I18n/languages` folder and use the following WP-CLI command:
```bash
wp i18n make-json <po-file> --no-purge
```

This will generate a `.json` file for each JS file present. The strings are extracted from `.po` files, so you'll already have the translations added. The `--no-purge` flag is used to keep the existing translations in the `.po` file.

The method used for setting the script translations is `setScriptTranslations()` from the `I18n` class.

The default way this works in Eightshift DevKit is that you need to have a single `.json` file with all the JS translations. If needed, you can either modify this method to read from multiple files, or just merge all the `.json` files into one.

If using the default setup (everything in one file) follow this naming structure: `{textdomain}-{locale}-{handle}.json`.

For example, if your _textdomain_ is `project-name` and your locale is `de_DE`, your file should be named `project-name-de_DE-project-name-block-editor-scripts.json`.

> The block-related translations depend on the language the user has set in WP admin.

## Enabling languages and content translation
If the website itself needs to support content in multiple languages, a plugin is a good option.

 The most common multi-language plugins are:
- **WPML** - one of the most popular plugins on the market. It is a paid plugin, but offers a lot of advanced options.
- **Polylang** - a free plugin (also has a paid _Pro_ version).

> Explore other options as well, you might find a plugin that is a better fit for your project than WPML or Polylang.

Most of the translation work will be done through the editor, since you'll need to translate the content on posts and pages.

## Additional resources
Internationalization (_I18n_) and Localization (_L10n_) are very broad topics, so it's impossible to cover everything in a single blog post.

If you wish to know about the core I18n functionalities, or a bit more about how it is used in the Eightshift DevKit, here are a few resources which you may find interesting:
- [WordPress Codex - I18n for WordPress Developers](https://codex.wordpress.org/I18n_for_WordPress_Developers)
- [Eightshift Development kit documentation - Tips & Tricks](https://eightshift.com/docs/basics/tips-tricks/#internationalization-i18n-and-localization-l10n)
- [Infinum WordPress Handbook - Localization](https://infinum.com/handbook/wordpress/translations/localization)
