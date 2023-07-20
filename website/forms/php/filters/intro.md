---
id: intro
title: Intro
---

Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of filters that allow you to modify and extend the behavior of Forms to suit your specific needs.

Need to tweak form elements? No problem! Need custom validation rules? Sure! Want to add a custom action after form submission? We got you covered.

Below you will find a list of filter and constants that can be set, with descriptions and examples of how to use them.
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
