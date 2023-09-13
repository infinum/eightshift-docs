---
id: global-msg-headings
title: Global msg headings
---

By default there are no headings on error or success messages but with this filter you will be able to set them. This filter is applied to all forms.

```php
add_filter('es_forms_block_form_global_msg_headings', function(): array {
	return [
		'success' => \__('Good news!', 'eightshift-form'),
		'error' => \__('Something went wrong.', 'eightshift-form'),
	];
})
```
