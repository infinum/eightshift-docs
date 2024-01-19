---
id: clearbit
title: Clearbit
---

## Map

This filter provides you the ability to change how we map Clearbit fields so you can combine multiple fields in one and add some new ones.

```php
add_filter('es_forms_integrations_clearbit_map', 'getClearbitMap');

/**
 * Change Clearbit integration fields map.
 *
 * This filter provides you the ability to change how we map Clearbit fields so you can combine multiple fields in one add some new one.
 *
 * @param array $params Default params provided by the forms.
 *
 * @return array<mixed>
 */
function getClearbitMap(array $params): array
{
	$street = $params['company-street-number'] ?? '';
	$city = $params['company-city'] ?? '';
	$postalCode = $params['company-postal-code'] ?? '';

	$params['company-location-combined'] = "{$street} {$city} {$postalCode}";

	return $params;
}
```
