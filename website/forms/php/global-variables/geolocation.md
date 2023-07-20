---
id: geolocation
title: Geolocation
---

### ES_GEOLOCATION_USE

This variable will force geolocation to always be in use.

```php
define('ES_GEOLOCATION_USE', '<true|false>');
```

### ES_GEOLOCATION_IP

This variable will force geolocation to always return this IP address. This is useful for testing.

```php
define('ES_GEOLOCATION_IP', '<xxx.xxx.xxx.xxx>');
```

### ES_GEOLOCATION_COOKIE_NAME

This variable will change geolocation cookie name. In general you should never change this value.

```php
define('ES_GEOLOCATION_COOKIE_NAME', '<esForms-country>');
```

### ES_GEOLOCATION_PHAR_PATH

This variable will define geolocation phar path on your server. This is useful if you want to use your own geolocation phar database file.

```php
define('ES_GEOLOCATION_PHAR_PATH', '</path/to/geoip.phar>');
```

### ES_GEOLOCATION_DB_PATH

This variable will define geolocation mmdb path on your server. This is useful if you want to use your own geolocation mmdb database file.

```php
define('ES_GEOLOCATION_DB_PATH', '</path/to/geoip.mmdb>');
```

### ES_GEOLOCATION_COOKIE_EXPIRATION

Expiration time for the geolocation cookie, in seconds. The default is `1296000`, which is equivalent to 15 days.

```php
define('ES_GEOLOCATION_COOKIE_EXPIRATION', '1296000');
```

### ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE

Allows integrating the geolocation cookie with WP Rocket advanced caching "Never cache cookie" option.

Make sure to have `ES_GEOLOCATION_USE` set before enabling this option.

Default: `false`.

:::note
Setting this will not have an effect unless WP Rocket is installed and configured.
:::

```php
define('ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE', '<true|false>');
```
