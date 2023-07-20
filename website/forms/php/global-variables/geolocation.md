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

This variable will define geolocation time used for cookie expiration. Default value is 15 days. Value should be set in seconds.

```php
define('ES_GEOLOCATION_COOKIE_EXPIRATION', '1296000');
```

### ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE

This variable will define geolocation code that will be used in the WP Rocket advanced cache. Default value is false. With this constant you wil be able to use geolocation cookies with WP Rocket cache plugin.

When using this constant you should also set `ES_GEOLOCATION_USE` geolocation constant to be sure everything works as expected.

:::tip
This constant is only available if WP Rocket plugin is installed and activated and configuration is added when WP Rocket is activated.
:::

```php
define('ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE', '<true|false>');
```
