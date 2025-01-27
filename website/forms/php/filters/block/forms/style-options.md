---
id: style-options
title: Custom form styles
---

This filter allows you to add definitions for custom form styles. When defined, the style option will be shown in the form options. Make sure to provide a CSS style that targets the class with the name of the `value` provided.

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
