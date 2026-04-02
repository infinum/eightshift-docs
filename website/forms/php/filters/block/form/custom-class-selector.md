---
id: custom-class-selector
title: Custom class selector
---

Allows adding a custom CSS class to the form element. Useful for targeting specific forms with custom styles or JavaScript.

```php
\add_filter('es_forms_block_form_custom_class_selector', [$this, 'getBlockFormCustomClassSelector'], 10, 3);

/**
 * Add a custom CSS class to the form element.
 *
 * @param string $class Default class value (empty string).
 * @param array<string, mixed> $attributes Block attributes.
 * @param string $formId Form ID.
 *
 * @return string
 */
public function getBlockFormCustomClassSelector(string $class, array $attributes, string $formId): string
{
	return 'my-custom-form-class';
}
```
