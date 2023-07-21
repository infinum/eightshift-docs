---
id: style-options
title: Custom form styles
---

This filter allows you to add definitions for custom form styles. When defined, the style option will be shown in the form options. Make sure to provide a CSS style that targets the class with the name of the `value` provided.

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
