---
id: style-options
title: Custom field styles
---

This filter allows you to add definitions for custom field styles. When defined, the style option will be shown in the field options. Make sure to provide a CSS style that targets the class with the name of the `value` provided.

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
