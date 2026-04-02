---
id: data-output
title: Data output
---

Allows providing custom data output for the dynamic block. This filter is used to return data that will be rendered inside the dynamic block, based on the current form attributes.

```php
\add_filter('es_forms_block_dynamic_data_output', [$this, 'getBlockDynamicDataOutput'], 10, 2);

/**
 * Provide custom data output for the dynamic block.
 *
 * @param array<string, mixed> $attributes Block attributes.
 * @param string $formId Form post ID.
 *
 * @return array<string, mixed>
 */
public function getBlockDynamicDataOutput(array $attributes, string $formId): array
{
	return [
		[
			'label' => \__('Option A', 'text-domain'),
			'value' => 'option-a',
		],
		[
			'label' => \__('Option B', 'text-domain'),
			'value' => 'option-b',
		],
	];
}
```
