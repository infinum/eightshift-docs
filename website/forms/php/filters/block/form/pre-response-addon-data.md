---
id: pre-response-addon-data
title: Pre-Response add-on Data
---

Allows adding custom data to the API response when the form is submitted.

```php
\add_filter('es_forms_block_form_pre_response_addon_data', [$this, 'getPreResponseAddonData'], 10, 2);

/**
 * Set additional data to API response for addon data.
 *
 * @param array<mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.
 *
 * @return array<mixed>
 */
public function getPreResponseAddonData(array $output, string $formDetails): array
{
	$output['addonData'] = [
		'key' => 'value',
	];

	return $output;
}
```
