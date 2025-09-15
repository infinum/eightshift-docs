---
id: use-custom-result-output-feature
title: Use custom result output feature
---

With this filter you can enable or disable the custom result output feature based on your needs.

```php
\add_filter('es_forms_block_forms_use_custom_result_output_feature', 'useCustomResultOutputFeature');

/**
 * Use custom result output feature
 *
 * @param bool $output
 *
 * @return bool
 */
public function useCustomResultOutputFeature(bool $output): bool
{
	return true;
}
```
