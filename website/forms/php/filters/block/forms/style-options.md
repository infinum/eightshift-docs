---
id: style-options
title: Style options
---

This filter will add new options to the style select dropdown in the forms block. Forms style option selector will not show unless a filter is provided. This option is shown in Block Editor when you click on the forms block.

By providing style options you can change the style of the form with a simple CSS selector. This is useful if you want to have multiple forms with different styles.

```php
add_filter('es_forms_block_forms_style_options', function(): array {
	return [
		[
			'label' => 'Custom Style',
			'value' => 'custom-style'
		],
	];
})
```
