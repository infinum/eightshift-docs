---
id: routes-private
title: Routes private
---

This filter allows you to add additional routes to the private routes list passed to the JS via global variable.

```php
\add_filter('es_forms_scripts_routes_private', 'getPrivateRoutes');

/**
 * Add custom route to the private routes list passed to the JS via global variable.
 *
 * @return array<string>
 */
public function getPrivateRoutes(): array
{
	return [
		'<route-name>' => '<route-slug>',
	];
}
```
