---
id: component-prev
title: Component previous
---

This filter will remove the default forms multi step previous button component and use your callback. For example you are using your own button and you don't want to style again a new button with this filter you can provide you custom html that we will use instead of the default button.

```php
add_filter('es_forms_block_step_component_prev', function(array $data): string {
	return '<button type="submit" class="custom-button">Submit</button>';
});
```

:::note
This filter will not apply to form settings pages.
:::
