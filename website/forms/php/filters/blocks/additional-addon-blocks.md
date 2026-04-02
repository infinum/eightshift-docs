---
id: additional-addon-blocks
title: Additional addon blocks
---

Allows registering additional addon blocks to be available inside the Form builder. This is intended for blocks provided by Eightshift Forms addon plugins.

```php
\add_filter('es_forms_blocks_additional_addon_blocks', [$this, 'getAdditionalAddonBlocks']);

/**
 * Register additional addon blocks in the form builder.
 *
 * @return array<int, string>
 */
public function getAdditionalAddonBlocks(): array
{
	return [
		'my-addon/custom-block',
	];
}
```

:::note
For adding regular custom or core blocks to the form builder, use the [Additional blocks](additional-blocks) filter instead.
:::
