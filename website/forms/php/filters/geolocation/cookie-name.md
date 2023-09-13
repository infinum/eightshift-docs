---
id: cookie-name
title: Cookie name
---

This filter will change geolocation cookie name. In most cases you won't need to change this value.

```php
add_filter('es_forms_geolocation_cookie_name', function(): string {
	return 'esForms-country';
})
```

:::note
Global variable alternative:
* [ES_GEOLOCATION_COOKIE_NAME](/forms/php/global-variables/geolocation#ES_GEOLOCATION_COOKIE_NAME)
:::

:::caution
If global variable is set it will override this filter.
:::
