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
Blocks should be listed with their _fully qualified_ names, e.g. `eightshift-boilerplate/heading`.
:::
