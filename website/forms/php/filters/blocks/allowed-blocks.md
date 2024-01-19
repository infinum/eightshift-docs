---
id: allowed-blocks
title: Allowed blocks
---

This filter allows you to set the allowed blocks for the form builder as it will override the projects settings. This way you can be sure that the custom addon block is always available for the form builder.

```php
\add_filter('es_forms_blocks_allowed_blocks', 'getAllowedBlocks');

	/**
	 * Override the allowed blocks list and provide addon block.
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
