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
