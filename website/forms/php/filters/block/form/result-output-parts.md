---
id: result-output-parts
title: Result output parts
---

Allows modifying form result output parts data using API to toggle the correct shortcode on the frontend based on the users input. Used in `esFormsROIP` shortcode.

```php
add_filter('es_forms_integrations_form_result_output_parts', 'getIntegrationResultOutputParts', 10, 3);

/**
 * Populate result output parts in the API response data used in the 'esFormsROIP' shortcode.
 *
 * @param array<string, mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the 'getFormDetailsApi' function.
 * @param string $formId Form ID.
 *
 * @return array<string, mixed>
 */
function getIntegrationResultOutputParts(array $output, array $formDetails, string $formId): array
{
	$output['testKeys'] = 'testValue';

	return $params;
}
```


