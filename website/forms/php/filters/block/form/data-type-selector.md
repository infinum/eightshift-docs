---
id: data-type-selector
title: Data type selector
---

This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend.

In other words, you can use this filter to change the value of the `formDataTypeSelector` attribute during a form render.
The attribute is used to output a `data-type-selector` HTML attribute of the form element.

```php
\add_filter('es_forms_block_form_data_type_selector', [$this 'getFormDataTypeSelector'], 10, 2);

/**
 * Changing the form type selector on render
 * This filter will override the attribute-provided type selector for a Form component.
 * Passes form component attributes to the callback function as well, so you can check all sorts of conditions when filtering.
 *
 * In other words, you can use this filter to change the value of the `formDataTypeSelector` attribute during a form render.
 * The attribute is used to output a `data-type-selector` HTML attribute of the form element.
 *
 * @param string $selector The data type selector to filter.
 * @param array<mixed> $attr Form component attributes.
 *
 * @return string Filtered value.
 */
public function getFormDataTypeSelector(string $selector, array $attr): string
{
	if (($attr['formType'] ?? '') === 'mailchimp') {
		return '';
	}

	return 'my-new-selector';
}
```
