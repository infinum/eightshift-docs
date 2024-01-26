---
id: style-classes
title: Custom field classes
---

This filter allows you to add custom CSS classes to the field element. You can use this filter to provide custom styles based on some attributes of the field.

```php
\add_filter('es_forms_block_field_style_classes', [$this, 'getBlockFieldStyleClasses']);

/**
 * Add additional style classes to field block.
 *
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return array<string, mixed>
 */
public function getBlockFieldStyleClasses(array $attributes): array
{
	return [
		'input' => [
			'custom-style'.
		],
		'select' => [
			'default',
		]
	];
}
```
