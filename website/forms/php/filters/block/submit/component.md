---
id: component
title: Custom form submit button
---

This filter allows you to provide custom markup for the form submit button.

```php
add_filter('es_forms_block_submit_component', function(array $data): string {
	return '<button type="submit" class="custom-button">Submit</button>';
});
```

:::note
The custom button will not show in Form settings pages.
:::
