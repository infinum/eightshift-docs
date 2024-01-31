---
id: routes-public
title: Routes public
---

Allows adding custom routes to the public routes list, available from the Forms global window object.

```php
\add_filter('es_forms_scripts_routes_public', [$this, 'getPublicRoutes']);

/**
 * Adds custom routes to the public routes list, available from the Forms global window object.
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
