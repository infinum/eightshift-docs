---
id: geolocation
title: Geolocation
---

### ES_GEOLOCATION_USE

This variable will force geolocation to always be in use, regardless of the value set in Settings.

```php
define('ES_GEOLOCATION_USE', '<true|false>');
```

### ES_GEOLOCATION_IP

Setting this variable will force the geolocation system to use the provided IP address instead of the user's actual one. Can be useful for testing, especially in local setups where `127.0.0.1` / `localhost` will be ignored.

```php
define('ES_GEOLOCATION_IP', '<xxx.xxx.xxx.xxx>');
```

### ES_GEOLOCATION_COOKIE_NAME

This variable will change geolocation cookie name. In most cases you won't need to change this value.

```php
define('ES_GEOLOCATION_COOKIE_NAME', '<esForms-country>');
```

### ES_GEOLOCATION_PHAR_PATH

Geolocation `.phar` file path on your server. Useful if you want to provide the geolocation service yourself.

```php
define('ES_GEOLOCATION_PHAR_PATH', '</path/to/geoip.phar>');
```

### ES_GEOLOCATION_DB_PATH

Geolocation database file (`.mmdb`) path on your server. Useful if you want to provide your own IP geolocation library.

```php
define('ES_GEOLOCATION_DB_PATH', '</path/to/geoip.mmdb>');
```

### ES_GEOLOCATION_COOKIE_EXPIRATION

Expiration time for the geolocation cookie, in seconds. The default is `1296000`, which is equivalent to 15 days.

```php
define('ES_GEOLOCATION_COOKIE_EXPIRATION', '1296000');
```

### ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE

Allows integrating the geolocation cookie with WP Rocket caching plugin.

Make sure to have `ES_GEOLOCATION_USE` set before enabling this option.

Default: `false`.

:::note
Setting this will not have an effect unless WP Rocket is installed and configured.
:::

```php
define('ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE', '<true|false>');
```
