---
id: clearbit
title: Clearbit
---

## Map

Allows changing how Clearbit fields are mapped. Useful if you want to combine multiple fields, or add new ones.

```php
\add_filter('es_forms_integrations_clearbit_map', [$this, 'getClearbitMap']);

/**
 * Change Clearbit integration fields map.
 *
 * Allows changing how Clearbit fields are mapped. Useful if you want to combine multiple fields, or add new ones.
 *
 * @param array $params Default params provided by the forms.
 *
 * @return array<mixed>
 */
public function getClearbitMap(array $params): array
{
	$street = $params['company-street-number'] ?? '';
	$city = $params['company-city'] ?? '';
	$postalCode = $params['company-postal-code'] ?? '';

	$params['company-location-combined'] = "{$street} {$city} {$postalCode}";

	return $params;
}
```
