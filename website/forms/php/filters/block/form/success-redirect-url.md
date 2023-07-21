---
id: success-redirect-url
title: Success redirect URL
---

This filter allows you to override the success redirect URL, regardless of the one selected in Settings. With the `$formType` parameter you can customize the URL for each form type.

```php
add_filter('es_forms_block_form_success_redirect_url', function(string $formType, string $formId): string {
	return 'https://infinum.com/custom-filter';
}, 10, 2)
```


