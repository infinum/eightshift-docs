---
id: allowed-blocks
title: Allowed blocks
---

Allows setting a custom list of the allowed blocks within the form editor. It will override the project settings.
Useful if you want to ensure that a custom block (e.g. from an add-on) is visible in the form editor.

```php
\add_filter('es_forms_blocks_allowed_blocks', [$this, 'getAllowedBlocks']);

/**
 * Override the allowed blocks list and provide add-on block.
 *
 * @return array<int, string> List of blocks.
 */
public function getAllowedBlocks(): array
{
	return [
		'<block-namespace>/<block-name>',
	];
}
```

:::note
Blocks should be listed with their _fully qualified_ names, e.g. `eightshift-boilerplate/heading`.
:::
