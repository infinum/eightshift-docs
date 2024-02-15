---
id: requirements
title: Requirements
---

## Add-on naming convention

When creating a new add-on, you should follow the naming convention. The name of the add-on should be in the format `eightshift-forms-addon-<addon-name>`. For example, if you are creating an add-on for computed fields, the name of the add-on should be `eightshift-forms-addon-computed-fields`.

Based on the this example add-on plugin folder name should be `eightshift-forms-addon-computed-fields` and the main file should be `eightshift-forms.php`.

## Add-on trigger action

In order to be sure that your add-on is loaded after the main plugin is loaded, you need to have trigger the add-on plugin main plugin action on the custom action hook. This is done by adding the following code to the `main.php` file and the action name is `es_forms_loaded`.

```php
/**
	 * Register the project with the WordPress system.
	 *
	 * The register_service method will call the register() method in every service class,
	 * which holds the actions and filters - effectively replacing the need to manually add
	 * them in one place.
	 *
	 * @return void
	 */
	public function register(): void
	{
		// Hook all plugin features in a custom hook name to make sure it's called after the main plugin is loaded.
		\add_action('es_forms_loaded', [$this, 'registerServices']);
	}
```

## Add-on dependency

In order to ensure that your add-on is working properly, you need to have the main plugin installed. When you uninstall the main plugin, all add-ons should be uninstalled as well. Also you will not be able to activate the add-on if the main plugin is not installed. 

To make sure that the user gets the notification that the main plugin is not active, you need to add the following code to the `main.php` file.

```php
use EightshiftFormsAddonComputedFields\Config\Config;
use EightshiftFormsAddonComputedFieldsVendor\EightshiftFormsUtils\Main\UtilsMain;

/**
	 * Register the project with the WordPress system.
	 *
	 * @return void
	 */
	public function register(): void
	{
		// Check if main plugin is active.
		\add_action('admin_init', [$this, 'checkAddonPlugins']);
		\add_action('admin_notices', [$this, 'checkAddonPluginsNotice']);
	}

	/**
	 * Check if main plugin is active.
	 *
	 * @return void
	 */
	public function checkAddonPlugins(): void
	{
		UtilsMain::checkAddonPlugins(Config::PLUGIN_FULL_NAME);
	}

	/**
	 * Check if main plugin is active if not set a notice.
	 *
	 * @return void
	 */
	public function checkAddonPluginsNotice(): void
	{
		UtilsMain::checkAddonPluginsNotice(\esc_html__('Computed Field', 'eightshift-forms-addon-computed-fields'));
	}
```

## Adding custom JavaScript in your add-on

If you need to add custom JavaScript to your add-on, you should use forms store and events for triggering you custom JavaScript.

Documentation for forms store and events can be found [here](/forms/javascript/state/store) and [here](/forms/javascript/events/available-events).

Another thing to consider is that, by default, the main form JavaScript is loaded before the add-on JavaScript and you will not be able to add event listeners. To fix this you need to add script dependency in your `Enqueue` folder classes.

* `Enqueue/Admin/EnqueueAdmin.php` - for admin scripts.
* `Enqueue/Admin/EnqueueBlocks.php` - for block editor and frontend scripts.

**Example: Enqueue/Admin/EnqueueAdmin.php**

```php
/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		// Make add-on scripts fired before main plugin scripts.
		\add_filter(UtilsHooksHelper::getFilterName(['scripts', 'dependency', 'admin']), [$this, 'getScriptsDependency']);
	}

	/**
	 * Make add-on scripts fired before main plugin scripts.
	 *
	 * @return array<int, string>
	 */
	public function getScriptsDependency(): array
	{
		return [
			$this->getAdminScriptHandle(),
		];
	}

```

**Example: Enqueue/Admin/EnqueueBlocks.php**

```php
/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		// Make add-on scripts fired before main plugin scripts.
		\add_filter(UtilsHooksHelper::getFilterName(['scripts', 'dependency', 'blocksEditor']), [$this, 'getScriptsDependency']);
	}

	/**
	 * Make add-on scripts fired before main plugin scripts.
	 *
	 * @return array<int, string>
	 */
	public function getScriptsDependency(): array
	{
		return [
			$this->getBlockEditorScriptsHandle(),
		];
	}

```

## Adding custom CSS or JavaScript in your add-on

If you need to add custom CSS or JavaScript to your add-on, you should change webpack configuration to include your custom files and add custom `output.library` name to avoid conflicts with the main plugin.

## Adding custom Blocks in your add-on

If you need to add custom blocks to your add-on, you should use the `Blocks` folder and the `Blocks/Blocks.php` file.

With this function we are overriding the allowed blocks list and providing the add-on block to be used in the block editor.

```php
	/**
	 * Register all the hooks
	 *
	 * @return void
	 */
	public function register(): void
	{
		// Register all utility hooks.
		parent::register();

		// Override the allowed blocks list and provide add-on block.
		\add_filter(UtilsHooksHelper::getFilterName(['blocks', 'allowedBlocks']), [$this, 'getAddonBlocks']);
	}

	/**
	 * Override the allowed blocks list and provide add-on block.
	 *
	 * @return array<int, string> List of blocks.
	 */
	public function getAddonBlocks(): array
	{
		return [
			'eightshift-forms-addon-computed-fields/computed-fields-result',
		]
	}
```
