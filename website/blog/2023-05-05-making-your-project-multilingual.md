---
title: Making your project multilingual
description: Examples of using I18n in a project
slug: making-your-project-multilingual
authors: obradovic
date: 2023-05-05
tags: [eightshift, boilerplate, i18n, multilingual]
hide_table_of_contents: false
---

Automatic website translation with tools like Google Translate has become quite decent, but it is still a much better approach to add multiple languages to your project and maintain the translations for those languages yourself.
<!--truncate-->

## Translating the strings in PHP
It is good practice to always wrap your hardcoded strings in one of the functions used for I18n (internationalization). Even if your website may initially be only in one language, it will be much easier if you have to add multilingual support later.

If you've already worked on a multilingual project, you most likely came across `__()` and `_e()` functions. The main difference between the `__()` and `_e()` is that `__()` only returns the value, while `_e()` also echoes it. Both of these functions accept two arguments, the first one is your string, and the second one is your textdomain.

> Textdomain is usually your project name written in kebab-case.

WordPress functions like `__()` and `_e()` do the job quite well, but it is much better to use the variants of these functions that also escape the output. These are `esc_html__()` and `esc_html_e()`. There are also a few more functions for I18n you can use, but to keep it simple, we'll just mention these two for now.

Here is an example of using one of these functions:
```php
<?php echo esc_html__('Contact', 'project-name'); ?>
```

## Translating the strings in JS
To translate the strings in your block editor or options, you will first have to import the function.
```jsx
import { __ } from '@wordpress/i18n';
```
To output your string, simply use it like this:
```jsx
{__('Icon position', 'project-name')}
```

## The I18n class
The easiest way to add I18n support to your project is by using our WP CLI boilerplate command:
```bash
wp boilerplate create i18n
```

This command generated a new class inside the `src/I18n` folder. This class instructs WordPress to look for translations in `src/I18n/languages` with the textdomain defined as your project name. The next step is generating .po and .mo files that are used for translation.

## Generating .pot file
You can create a .pot file by using WP CLI. Run the following command in your project root:
```bash
wp i18n make-pot
```

Alternatively, you can use [Poedit](https://poedit.net/) to generate the .pot file and generate translations from it later.

## Translating with Poedit
Once you have the .pot file, you can use Poedit to generate .po and .mo files that are used for translating hardcoded strings in your project. When generating the .po and .mo files, you can choose for which locale you're creating the translation. For example, if you are creating a translation for the German language, your files will be named de_DE.po and de_DE.mo.

After generating the files, you should go to **Translation -> Properties** and go to **Sources Paths** tab. For the Base path, you should set your theme folder. In Excluded paths, you can add folders like `node_modules`, `vendor`, and `public`.

In the **Sources keywords** tab you can set additional functions which you use in your project for translations. Some of the most commonly used include:
- _e
- __
- esc_html__
- esc_html_e
- esc_attr__
- esc_html_x

> If you're missing a string in your .po file, be sure to check which function is used for translation for that string and if that function is added to Sources keywords.

After updating the settings, click on the Update from source code option to get the updated list of strings to translate.

The translation process is simple. The left column represents the source text, and the right column the translation. When you have finished translating the strings, copy the .po and .mo files in the `src/I18n/languages` folder.

## Enabling languages and content translation
To have the option of switching between languages and translate the content you've written in WordPress, your best bet is to use a plugin. Here are a few plugins that we actively use or recommend:
- **WPML** - one of the most popular plugins on the market. It is a paid plugin but offers a lot of advanced options
- **Polylang** - free plugin, but also has a paid Pro version

Please keep in mind that this is just a summary of plugins we recommend and that you should thoroughly research various multilingual plugins and decide which would be the best for your project.

Most of the translation work will be through the editor since you'll need to translate the content on posts and pages. The best approach for this is to use one of the multilingual plugins like WPML.

## Additional resources
There are a lot of details regarding Internationalization (I18n) and Localization (L10n), so it's impossible to cover everything in a single blog post. If you wish to know about the core I18n functionality or a bit more about how it is being used in the Eightshift Development kit, here are a few resources which you may find interesting:
- [WordPress Codex - I18n for WordPress Developers](https://codex.wordpress.org/I18n_for_WordPress_Developers)
- [Eightshift Development kit documentation - Tips & Tricks](https://eightshift.com/docs/basics/tips-tricks/#internationalization-i18n-and-localization-l10n)
