---
id: data-type-selector
title: Data type selector
---

This filter will add a new data attribute to the form element. It is used to identify the form type in the frontend.

In other words, you can use this filter to change the value of the `formDataTypeSelector` attribute during a form render.
The attribute is used to output a `data-type-selector` HTML attribute of the form element.

```php
add_filter('es_forms_block_form_data_type_selector', function(string $selector, array $attr): string {
	if (($attr['formType'] ?? '') === 'mailchimp') {
		return '';
	}

	return 'my-new-selector';
}, 10, 2)
```
