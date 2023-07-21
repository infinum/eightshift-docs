---
id: style-options
title: Style options
---

This filter will add new options to the style select dropdown in the filed block. Field style option selector will not show unless a filter is provided. This option is shown in Block Editor when you click on any field block.

By providing style options you can change the style of the field with a simple CSS selector. This is useful if you want to have multiple fields with different styles.

```php
add_filter('es_forms_block_field_style_options', function(): array {
	return [
			'input' => [
				[
					'label' => 'Default',
					'value' => 'default'
				],
				[
					'label' => 'Custom Style',
					'value' => 'custom-style'
				],
			],
			'select' => [
				[
					'label' => 'Default',
					'value' => 'default'
				],
				[
					'label' => 'Custom Style',
					'value' => 'custom-style',
				],
			]
		];
})
```
