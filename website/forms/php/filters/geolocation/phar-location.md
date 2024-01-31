---
id: phar-location
title: Phar location
---

Geolocation `.phar` file path on your server. Useful if you want to provide the geolocation service yourself.

```php
\add_filter('es_forms_geolocation_phar_location', [$this, 'getGeolocationPharLocation']);

/**
 * Provide custom geolocation phar location.
 *
 * This filter provides you with the ability to provide custom database location for geolocation.
 *
 * @return string
 */
public function getGeolocationPharLocation(): string
{
	return __DIR__ . \DIRECTORY_SEPARATOR . 'geoip.phar';
}
```
