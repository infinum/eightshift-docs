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
