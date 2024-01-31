---
id: additional-blocks
title: Additional blocks
---

Allows enabling the use of any custom, core, or 3rd-party block inside the Form builder, e.g. if you want to enable using a Heading block within the form.

```php
\add_filter('es_forms_blocks_additional_blocks', [$this, 'getAdditionalBlocks']);

/**
 * Adding additional blocks in the custom forms block.
 *
 * This filter is used if you want to add your custom or core blocks to the custom form builder.
 *
 * @return array<int, string>
 */
public function getAdditionalBlocks(): array
{
	return [
		'core/heading',
		'core/paragraph',
	];
}
```

:::note
Blocks should be listed with their _fully qualified_ names, e.g. `eightshift-boilerplate/heading`.
:::
