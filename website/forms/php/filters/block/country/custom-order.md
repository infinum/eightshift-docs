---
id: custom-order
title: Custom order
---

Allows setting a custom display order for countries in the country field. Countries listed here will appear at the top of the dropdown, above the rest of the list.

```php
\add_filter('es_forms_block_country_custom_order', [$this, 'getBlockCountryCustomOrder'], 10, 2);

/**
 * Set custom ordering of countries in the country field.
 *
 * Countries listed here are shown at the top of the dropdown.
 *
 * @param array<int, string> $order Default order (empty array).
 * @param string $formId Form ID.
 *
 * @return array<int, string>
 */
public function getBlockCountryCustomOrder(array $order, string $formId): array
{
	return [
		'hr',
		'de',
		'at',
	];
}
```
