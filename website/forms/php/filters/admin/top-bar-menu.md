---
id: top-bar-menu
title: Top bar menu
---

Add additional items to the top bar menu under the Add-on parent.

```php
add_filter('es_forms_admin_top_bar_menu_items', 'getTopBarMenuItems', 10, 2);

/**
 * Add additional items to the top bar menu under the Add-on parent
 *
 * @param array<mixed> $menuItems Menu items from internal db.
 * @param string $menuType Menu type.
 *
 * @return array<mixed>
 */
function getTopBarMenuItems(array $output, string $addonsPrefix): array
{
	return [
		[
			'id' => 'item-id',
			'parent' => $addonsPrefix,
			'title' => __('Item title', 'text-domain'),
			'href' => 'https://example.com',
		],
	];
}
```
