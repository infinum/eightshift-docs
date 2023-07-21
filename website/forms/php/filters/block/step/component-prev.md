---
id: component-prev
title: Multi-step form "Previous" button
---

This filter allows you to provide custom markup for the multi-step form "Previous" button.

```php
add_filter('es_forms_block_step_component_prev', function(array $data): string {
	return '<button type="submit" class="custom-button">Submit</button>';
});
```

:::note
The custom button will not show in Form settings pages.
:::
