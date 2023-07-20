---
id: intro
title: Intro
---

This plugin is made by developers for developers by providing a comprehensive set of filters that allow you to modify and extend the behavior of Eightshift Forms to suit your specific needs.

Whether you're a seasoned developer or just getting started with WordPress, these filters will empower you to take full control over your forms' functionality and appearance. From tweaking form elements and validation rules to implementing custom actions upon form submission, the possibilities are endless.

In this section, we've gathered a collection of useful filters to help you better understand how they work and how you can integrate them into your own projects. These examples will serve as a starting point for your exploration into the world of WordPress filters.

## How to use filters

All of our filters can be found in [this file](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php) along with their descriptions and examples. To use a filter, simply copy the code snippet from the example and paste it into your project.

Example:
```php
add_filter('es_forms_block_forms_style_options', function () {
	return [
		[
			'label' => 'Default',
			'value' => 'default'
		],
		[
			'label' => 'Custom Style',
			'value' => 'custom-style'
		],
	];
});
```

### Test existing examples

You can test all of our filters from our existing examples by adding the filter name as a constant in your `wp-config.php` file.

For example, if you want to test the `es_forms_block_forms_style_options` filter, you would add the following line to your `wp-config.php` file:

```php
define('ES_RUN_TEST_FILTERS', 'es_forms_block_forms_style_options');
```

this function will automatically load the `testFilters.php` file and run the `es_forms_block_forms_style_options` filter from this [location](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php).

### Running all test filters

Also you can run all available filters in our [test file](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php) by adding the following line to your `wp-config.php` file:

```php
define('ES_RUN_TEST_FILTERS', 'all');
```

:::caution
Make sure you never use this constant on a production site because they are only for testing and debugging purposes.
:::
