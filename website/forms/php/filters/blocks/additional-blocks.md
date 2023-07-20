---
id: additional-blocks
title: Additional blocks
---

Allows enabling the use of any custom, core, or 3rd-party block inside the Form builder, e.g. if you want to enable using a Heading block within the form.

```php
add_filter('es_forms_blocks_additional_blocks', function(): array {
	return [
		'core/heading',
		'core/paragraph',
	];
})
```

:::note
Blocks should be added with their fully qualified block names, e.g. `eightshift-boilerplate/heading`.
:::
