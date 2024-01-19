---
id: routes-public
title: Routes public
---

This filter allows you to add additional routes to the public routes list passed to the JS via global variable.

```php
\add_filter('es_forms_scripts_routes_public', 'getPublicRoutes');

/**
 * Add custom route to the public routes list passed to the JS via global variable.
 *
 * @return array<string>
 */
public function getPublicRoutes(): array
{
	return [
		'<route-name>' => '<route-slug>',
	];
}
```
