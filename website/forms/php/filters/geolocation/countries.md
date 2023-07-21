---
id: countries
title: Countries
---

This filter provides you with the ability to add/remove/edit countries list and countries groups used to filter forms.

```php
add_filter('es_forms_geolocation_countries_list', function(array $countries): array {
	return \array_merge(
		$countries,
		[
			[
				'label' => \__('<country-name>', 'text-domain'),
				'value' => '<country-value>',
				'group' => [
					'<country-value>',
				],
			],
		],
	);
})
```

:::tip
This list can also be found in the rest route:
* `/wp-json/eightshift-forms/v1/geolocation-countries`.
:::
