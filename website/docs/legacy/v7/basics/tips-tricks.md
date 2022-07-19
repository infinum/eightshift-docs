---
id: tips-tricks
title: Tips & Tricks
---

Since we are creating our projects using this setup, we are going to share our tips and tricks for faster development, easier debugging and some cool ideas we had along the way.

### Always disable cache when you are writing block editor components

When you are writing a JavaScript part of the block you should always have your browser inspector open and checkbox checked for disabling browser cache in the network tab. WordPress core is caching JS files and you may not always get the latest changes of your code in the editor. This way you can be sure that everything is up to date.

### When to restart your Webpack watch?

As we described in the previous chapters Webpack watch is used to monitor all your code changes and update the compiled files with your latest changes. We have set our folder structure in a way so we can have files automatically included in the build. However, there are some times you must restart your Webpack watch:

* Adding a new block/component.
* Changing the block/component folder name.
* Changing any of the file names in the block/component folder.
* Adding/removing a JS package to the project.
* Changing the webpack, babel, eslint, stylelint configuration.
* Changing the project domain name for Browser sync.
* Adding/removing a new JS or SCSS file in the global assets folder.

### Using boilerplate and boilerplate-plugin in the same project

When you are using one boilerplate for a theme and another for a plugin keep in mind that you will have to do some changes. We would recommend leaving the theme as is and making changes to the plugin. Here are some of the changes you should make:

* If using manifest, you should update the `MANIFEST_ITEM` filter name to something else.
* If using blocks, change the default category of all your plugin blocks.
* If using blocks, update all blocks to a new category in each block `manifest.json` file.
* If using blocks, update the block namespace in the global block `manifest.json` file.
* If using blocks, change the blocks' background and foreground color (Not necessary but it would be a good UX).
* If using blocks, make your own implementation of the Components::render method so you don't need to pass project location on every usage (example below).
* Update the default project imposter namespace in the `composer.json` file and run `composer install`.
* Update all files with the new vendor namespace prefix.
* Update the default WP-CLI command prefix for your plugin located in the root of your plugin.

`src/Helpers/Components.php`

```php
/**
 * Helpers for components
 *
 * @package PluginNamespace\Helpers
 */

declare(strict_types=1);

namespace PluginNamespace\Helpers;

use PluginNamespace\Config\Config;
use EightshiftLibs\Helpers\Components as LibsComponents;

/**
 * Helpers for components
 */
class Components extends LibsComponents
{
	/**
	 * Local render method.
	 */
	public static function render(string $component, array $attributes = [], string $parentPath = '', bool $useComponentDefaults = false): string
	{
		$parentPath = Config::getProjectPath();

		return parent::render($component, $attributes, $parentPath, $useComponentDefaults);
	}
}
```

### Internationalization (I18n) and localization (L10n)

To make sure your project is translatable into other languages, you should use [WordPress's i18n functions](https://codex.wordpress.org/I18n_for_WordPress_Developers) every time you output text. This process, called internationalization, is quite simple to implement by using the `__` WordPress function, which is available in both PHP and Gutenberg (in the `@wordpress/i18n` package) and is standard practice in Eightshift Frontend Libs for all text output. 

The `__` function accepts a string to translate and a text-domain, which is used to tell WordPress which translation set to use, and returns the translated string (or original string, in case a translation doesn't exist). Note that you can provide a `sprintf`-parametrized string to `__` and use `sprintf` on its return value to populate the string with certain values. You should also load the text-domain using `load_theme_textdomain`. Using the Eightshift Libs `I18n` class will do this for you by instructing WordPress to look for translations in `src/I18n/languages` with the text-domain defined as your project name.

However, there will come a time when _being able_ to translate won't be enough. You'll actually need to _do_ that. This happens in a process called localization and is a bit less trivial to do.

First, you'll need to prepare the strings for translators. As WordPress i18n is based upon the `gettext` system, you should generate a POT ("portable object template") file which you can do by running WP-CLI command `wp i18n make-pot` (https://developer.wordpress.org/cli/commands/i18n/make-pot/) in your project root. Note that you may need to exclude vendor folders.

You can provide this POT file to translators directly, and they can use tools for PO editing such as Poedit to translate the strings. After that, they can export an MO file which you can import into your project. Alternatively, you can set up a translation environment like Glotpress for translations, import your POT file there, and export translations as PO and MO files. You should locate these files into the path defined in your `load_theme_textdomain` call, and they should have the name `{textdomain}-{locale}.mo` (e.g. `eightshift-boilerplate-hr_HR.mo`), that is, `{textdomain}-{locale}.po`.

MO translations are only loaded by PHP code and aren't understood by Gutenberg. To do so, you'll need to generate a JED file from the PO file. You can probably use the WP CLI `wp i18n make-json` file for that (https://developer.wordpress.org/cli/commands/i18n/make-json/). If you're using Glotpress, you can simply export the locale as a JED file.

To instruct Gutenberg on how to load your JED translations, you'll need to call `wp_set_script_translations` providing a text-domain, handle (script identifier), and locale path. If you're using the Eightshift Libs `I18n` class, this is done for you with the same assumptions as for PHP translations. Furthermore, as we're assuming you're setting translations for block editor scripts, we set the handle to `{$assetsPrefix}-block-editor-scripts`. If you haven't changed how scripts are enqueued, this should be the correct handle and your assets prefix should be your project name.

Finally, to make sure WordPress loads the JED translations, you should place them into the path defined by your `wp_set_script_translations` call (`src/I18n/languages` by default in the `I18n` class) and make sure they have the name structure `{textdomain}-{locale}-{handle}.json`. (e.g. `eightshift-boilerplate-hr_HR-eightshift-boilerplate-block-editor-scripts.json`)

After all of this work, you should be able to change the locale on the site, network or user level in the WordPress admin.
