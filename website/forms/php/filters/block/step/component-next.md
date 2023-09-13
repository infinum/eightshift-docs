---
id: component-next
title: Multi-step form "Next" button
---

This filter allows you to provide custom markup for the multi-step form "Next" button.

```php
add_filter('es_forms_block_step_component_next', function(array $data): string {
	return '<button type="submit" class="custom-button">Next</button>';
});
```

:::note
The custom button will not show in Form settings pages.
:::
