---
id: geolocation
title: Geolocation
---


### ES_GEOLOCATION_IP

Setting this variable will force the geolocation system to use the provided IP address instead of the user's actual one. Can be useful for testing, especially in local setups where `127.0.0.1` / `localhost` will be ignored.

```php
define('ES_GEOLOCATION_IP', '<xxx.xxx.xxx.xxx>');
```
