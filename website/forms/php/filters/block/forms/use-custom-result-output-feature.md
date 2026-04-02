---
id: use-custom-result-output-feature
title: Use custom result output feature
---

Enables the custom result output feature. When enabled, the form will use a custom result output block instead of the default success/error message.

```php
\add_filter('es_forms_block_forms_use_custom_result_output_feature', [$this, 'getBlockFormsUseCustomResultOutputFeature']);

/**
 * Enable custom result output feature.
 *
 * When enabled, the form will use a custom result output block for displaying submission results.
 *
 * @return bool
 */
public function getBlockFormsUseCustomResultOutputFeature(): bool
{
	return true;
}
```
