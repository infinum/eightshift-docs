---
id: top-bar-menu-items
title: Top bar menu items
---

Allows adding custom items to the Eightshift Forms top bar menu in the WordPress admin area.

```php
\add_filter('es_forms_admin_top_bar_menu_items', [$this, 'getAdminTopBarMenuItems']);

/**
 * Add custom items to the Forms top bar menu.
 *
 * @param array<mixed> $items Existing menu items.
 *
 * @return array<mixed>
 */
public function getAdminTopBarMenuItems(array $items): array
{
	$items[] = [
		'label' => \__('My Custom Page', 'text-domain'),
		'url' => \admin_url('admin.php?page=my-custom-page'),
		'icon' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg>',
	];

	return $items;
}
```
