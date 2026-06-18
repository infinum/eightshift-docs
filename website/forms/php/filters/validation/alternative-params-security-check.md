---
id: alternative-params-security-check
title: Alternative params security check
---

By default, all incoming form parameter values are sanitized with `wp_strip_all_tags()`. This filter lets you specify field names whose values should be sanitized with `esc_html()` instead — preserving HTML entities while still escaping the output.

Return an array of internal field names (without the `es-field-` prefix).

```php
\add_filter('es_forms_validation_alternative_params_security_check', [$this, 'alternativeParamsSecurityCheck']);

/**
 * Define fields that use esc_html() instead of wp_strip_all_tags() for sanitization.
 *
 * @return array<int, string>
 */
public function alternativeParamsSecurityCheck(): array
{
	return [
		'my-text-field',
		'my-textarea-field',
	];
}
```
