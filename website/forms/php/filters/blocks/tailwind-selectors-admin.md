---
id: tailwind-selectors-admin
title: Tailwind selectors admin
---

The same as the [Tailwind selectors](tailwind-selectors) filter, but used when a form is rendered inside the WordPress admin (form editor, settings previews). Forms decides which of the two filters to use based on `is_admin()`.

Eightshift Forms hooks into this filter itself to provide the admin theme, at the default priority. Register your callback with a higher priority number and merge into the incoming value, otherwise you will drop the admin styling.

```php
\add_filter('es_forms_blocks_tailwind_selectors_admin', [$this, 'getBlocksTailwindSelectorsAdmin'], 20, 2);

/**
 * Provide custom Tailwind selector data for blocks in the admin.
 *
 * @param array<mixed> $selectors Selectors provided by Forms admin theme.
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return array<mixed>
 */
public function getBlocksTailwindSelectorsAdmin(array $selectors, array $attributes): array
{
	return \array_merge_recursive(
		$selectors,
		[
			'input' => [
				'base' => [
					'esf:text-sm',
				],
			],
		]
	);
}
```

:::note
The selector structure is identical to the frontend filter — see [Tailwind selectors](tailwind-selectors) for the full list of available components and parts.
:::
