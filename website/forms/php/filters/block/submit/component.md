---
id: component
title: Component
---

This filter will remove the default forms submit button component and use your callback. For example you are using your own button and you don't want to style again a new button with this filter you can provide you custom html that we will use instead of the default button.

```php
add_filter('es_forms_block_submit_component', function(array $data): string {
	return '<button type="submit" class="custom-button">Submit</button>';
});
```

:::note
This filter will not apply to form settings pages.
:::
