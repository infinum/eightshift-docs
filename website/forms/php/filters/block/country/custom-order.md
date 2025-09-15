---
id: custom-order
title: Custom order
---

This will filter will allow you to change the original order of the default or custom countries list by providing the list key and the order of the countries you want to display.

You don't need to provide order for all countries, only the ones you want to change the order and the rest will be displayed in the default order.

```php
add_filter('es_forms_block_country_custom_order', 'getBlockCountryCustomOrder');

/**
 * Change default countries order.
 *
 * This filter provides you with the ability to change the default countries order.
 *
 * @param array<mixed> $output Output.
 *
 * @return array<mixed>
 */
public function getBlockCountryCustomOrder(array $output): array
{
	return [
		'default' => [
			'hr',
			'de',
		],
	];
}
```
