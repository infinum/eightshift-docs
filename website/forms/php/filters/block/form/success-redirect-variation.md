---
id: success-redirect-variation
title: Success redirect variation
---

Success variations is an option that will add additional GET parameter to the success redirect URL. With this parameter you can customize the success page for each form type. First you need to create variations list in the forms global settings and then you can select the variation for each form.

This filter allows you to override the success redirect variation and have it set fixed for all or some of your forms. With the `$formType` parameter you can customize the variation for each form type.

```php
\add_filter('es_forms_block_form_success_redirect_variation', [$this, 'getBlockFormSuccessRedirectVariation'], 10, 2);

/**
 * Set success redirect variation value.
 *
 * This filter will override settings for success redirect variation.
 *
 * @param string $formType Type of form used like greenhouse, hubspot, etc.
 * @param string $formId Form ID.
 *
 * @return string
 */
public function getBlockFormSuccessRedirectVariation(string $formType, string $formId): string
{
	return '<variation>';
}
```
