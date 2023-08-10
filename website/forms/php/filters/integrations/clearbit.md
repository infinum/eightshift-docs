---
id: clearbit
title: Clearbit
---

This filter provides you the ability to change how we map Clearbit fields so you can combine multiple fields in one add some new one.

```php
add_filter('es_forms_integrations_clearbit_map', function(array $params): array {
	$street = $params['company-street-number'] ?? '';
	$city = $params['company-city'] ?? '';
	$postalCode = $params['company-postal-code'] ?? '';

	$params['company-location-combined'] = "{$street} {$city} {$postalCode}";

	return $params;
});
