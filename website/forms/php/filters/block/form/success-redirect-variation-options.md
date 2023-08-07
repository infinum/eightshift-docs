---
id: success-redirect-variation-options
title: Success redirect variation options
---

While you can create variations list from the forms global setting, by using this filter you can provide additional variations which are fixed and can't be changed by the user.

Filter returns an array of arrays. The first value is the variation value and the second value is the variation label.

```php
add_filter('es_forms_block_form_success_redirect_variation_options', function(): string {
	return [
		[
			'test1',
			__('label1', '<text_domain>'),
		],
		[
			'test2',
			__('label2', '<text_domain>'),
		],
	];
});
```
