---
id: global-msg-headings
title: Global msg headings
---

By default there are no headings on error or success messages but with this filter you will be able to set them. This filter is applied to all forms.

```php
\add_filter('es_forms_block_form_global_msg_headings', [$this, 'getGlobalMsgHeadings']);

/**
 * Set global msg headings.
 *
 * This filter will set global message headings for success and error.
 *
 * @return array<string, string>
 */
public function getGlobalMsgHeadings(): array
{
	return [
		'success' => \__('Good news!', 'eightshift-form'),
		'error' => \__('Something went wrong.', 'eightshift-form'),
	];
}
```
