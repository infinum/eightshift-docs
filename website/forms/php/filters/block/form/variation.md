---
id: variation
title: Variation
---

Allows setting a fixed variation value passed to the success redirect URL. Useful when you need to pass a consistent variation regardless of the form settings.

```php
\add_filter('es_forms_block_form_variation', [$this, 'getBlockFormVariation'], 10, 2);

/**
 * Set fixed variation value for the success redirect.
 *
 * @param string $variation Default variation value (empty string).
 * @param string $formId Form ID.
 *
 * @return string
 */
public function getBlockFormVariation(string $variation, string $formId): string
{
	return 'my-variation';
}
```
