---
id: success-redirect-url
title: Success redirect URL
---

This filter allows you to override the success redirect URL, regardless of the one selected in Settings. With the `$formType` parameter you can customize the URL for each form type.

```php
\add_filter('es_forms_block_form_success_redirect_url', [$this, 'getBlockFormSuccessRedirectUrl'], 10, 2);

/**
 * Set success redirect url value.
 *
 * This filter will override settings for success redirect url.
 *
 * @param string $formType Type of form used like greenhouse, hubspot, etc.
 * @param string $formId Form ID.
 *
 * @return string
 */
public function getBlockFormSuccessRedirectUrl(string $formType, string $formId): string
{
	return 'https://infinum.com/custom-filter';
}
```


