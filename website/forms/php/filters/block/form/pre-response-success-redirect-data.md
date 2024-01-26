---
id: pre-response-success-redirect-data
title: Pre-Response Success Redirect Data
---

Allows adding data to the API response key, which is used when passing data to the success redirect URL.

```php
\add_filter('es_forms_block_form_pre_response_success_redirect_data', [$this, 'getPreResponseSuccessRedirectData'], 10, 2);

/**
 * Set additional data to API response for success redirect.
 *
 * @param array<mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.
 *
 * @return array<mixed>
 */
public function getPreResponseSuccessRedirectData(array $output, string $formDetails): array
{
	$output['successData'] = [
		'key' => 'value',
	];

	return $output;
}
```
