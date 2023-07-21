---
id: disable
title: Disable
---

This filter provides you with the ability to totally disable geolocation on the frontend usage. This is useful if you want to disable geolocation depending on and external condition, e.g. gdpr compliance.

```php
add_filter('es_forms_geolocation_disable', function(): bool {
	return true;
})
```

:::note
Global variable alternative:
* [ES_GEOLOCATION_USE](/forms/php/global-variables/geolocation#es_geolocation_use)
:::

:::caution
If global variable is set it will override this filter.
:::
