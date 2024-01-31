---
id: success-redirect-variation-options
title: Success redirect variation options
---

While you can create variations list from the forms global setting, by using this filter you can provide additional variations which are fixed and can't be changed by the user.

Filter returns an array of arrays. The first value is the variation value and the second value is the variation label.

```php
\add_filter('es_forms_block_form_success_redirect_variation_options', [$this, 'getBlockFormSuccessRedirectVariationOptions']);

/**
 * Set success redirect variation options value.
 *
 * This filter will override settings for success redirect variation options.
 *
 * @return array<string, string>
 */
public function getBlockFormSuccessRedirectVariationOptions(): array
{
	return [
		[
			'test1',
			\esc_html__('label1', '<text_domain>'),
		],
		[
			'test2',
			\esc_html__('label2', '<text_domain>'),
		],
	];
}
```
