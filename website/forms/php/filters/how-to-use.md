---
id: how-to-use
title: How to use?
---

Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of filters that allow you to modify and extend the behavior of Forms to suit your specific needs.

Need to tweak form elements? No problem! Need custom validation rules? Sure! Want to add a custom action after form submission? We got you covered.

Below you will find a list of filter and constants that can be set, with descriptions and examples of how to use them.

## How to use filters

The list of all available filters can be found [here](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php), along with descriptions and examples.

To use a filter, simply copy the code snippet from the example and paste it into your project, e.g.
```php
\add_filter('es_forms_block_forms_style_options', [$this, 'getBlockFormsStyleOptions']);

/**
 * Add additional style options to forms block.
 *
 * This filter will add new options to the style select dropdown in the forms block. Forms style option selector will not show unless a filter is provided. This option is shown in Block Editor.
 *
 * @return array<int, array<string, string>>
 */
public function getBlockFormsStyleOptions(): array
{
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
}
```

### Testing with provided examples

You can test all of the filters with the examples we provide by adding the filter name as a constant in your `wp-config.php` file.

For example, if you want to test the `es_forms_block_forms_style_options` filter, you would add the following line to your `wp-config.php` file:

```php
define('ES_RUN_TEST_FILTERS', 'es_forms_block_forms_style_options');
```

This will automatically load the `testFilters.php` file and run the `es_forms_block_forms_style_options` filter defined [here](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php).

### Running all filter tests

The whole filter [test suite](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php) can be run by adding the following line to your `wp-config.php` file:

```php
define('ES_RUN_TEST_FILTERS', 'all');
```

:::caution
**Do not use on production sites!**
The filters are used for testing and debugging purposes.
:::
