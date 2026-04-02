---
id: tailwind-selectors
title: Tailwind selectors
---

Allows adding custom Tailwind CSS selector data used for block styling. This is used internally to pass Tailwind class mappings to block components.

```php
\add_filter('es_forms_blocks_tailwind_selectors', [$this, 'getBlocksTailwindSelectors'], 10, 2);

/**
 * Provide custom Tailwind selector data for blocks.
 *
 * @param array<mixed> $selectors Default selectors (empty array).
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return array<mixed>
 */
public function getBlocksTailwindSelectors(array $selectors, array $attributes): array
{
	return \array_merge($selectors, [
		'mySelector' => 'bg-blue-500 text-white',
	]);
}
```
