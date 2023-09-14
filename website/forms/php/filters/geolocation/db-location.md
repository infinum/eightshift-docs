---
id: db-location
title: DB location
---

Geolocation database file (`.mmdb`) path on your server. Useful if you want to provide your own IP geolocation library.

```php
add_filter('es_forms_geolocation_db_location', function(): string {
	return __DIR__ . \DIRECTORY_SEPARATOR . 'geoip.mmdb';
})
```
