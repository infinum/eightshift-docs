---
id: phar-location
title: Phar location
---

Geolocation `.phar` file path on your server. Useful if you want to provide the geolocation service yourself.

```php
add_filter('es_forms_geolocation_phar_location', function(): string {
	return __DIR__ . \DIRECTORY_SEPARATOR . 'geoip.phar';
})
```

:::note
Global variable alternative:
* [ES_GEOLOCATION_PHAR_PATH](/forms/php/global-variables/geolocation#es_geolocation_phar_path)
:::

:::caution
If global variable is set it will override this filter.
:::
