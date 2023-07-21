---
id: success-redirect-url
title: Success redirect url
---

This filter will override settings for success redirect url. By using the `$formType` param you can filter this filter by type and target only integrations you would like.

```php
add_filter('es_forms_block_form_success_redirect_url', function(string $formType, string $formId): string {
	return 'https://infinum.com/custom-filter';
}, 10, 2)
```


