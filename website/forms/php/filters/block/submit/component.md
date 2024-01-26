---
id: component
title: Custom form submit button
---

This filter allows you to provide custom markup for the form submit button.

```php
\add_filter('es_forms_block_submit_component', [$this, 'getBlockSubmitComponent']);

/**
 * Override default submit button with your own component
 *
 * This filter will remove the default forms submit button component and use your callback. This will not apply to form settings pages.
 *
 * @param array<string, mixed> $data Data provided from the forms.
 *
 * @return string
 */
public function getBlockSubmitComponent(array $data): string
{
	return '<button type="submit" class="custom-button">Submit</button>';
}
```

:::note
The custom button will not show in Form settings pages.
:::
