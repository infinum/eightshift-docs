---
id: component-show-form
title: Component show form
---

Controls whether the form component is rendered. Returning `false` will prevent the form from being output on the page.

```php
\add_filter('es_forms_block_form_component_show_form', [$this, 'getBlockFormComponentShowForm'], 10, 2);

/**
 * Control whether the form component is rendered.
 *
 * @param bool $show Whether to show the form (default: true).
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return bool
 */
public function getBlockFormComponentShowForm(bool $show, array $attributes): bool
{
	// Hide the form for non-logged-in users.
	return \is_user_logged_in();
}
```
