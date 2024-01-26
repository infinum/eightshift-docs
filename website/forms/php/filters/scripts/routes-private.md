---
id: routes-private
title: Routes private
---

Allows adding custom routes to the private routes list, available from the Forms global window object.

```php
\add_filter('es_forms_scripts_routes_private', [$this, 'getPrivateRoutes']);

/**
 * Adds custom routes to the private routes list, available from the Forms global window object.
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
