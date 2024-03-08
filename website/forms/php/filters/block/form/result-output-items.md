---
id: result-output-items
title: Result output items
---

Allows modifying form result output items data using API to toggle the correct block on the frontend based on the users input. Used in `result-output-item` block.

```php
add_filter('es_forms_integrations_form_result_output_items', 'getIntegrationResultOutputItems', 10, 3);

/**
 * Populate result output items in the API response data used in 'result-output-item' block.
 *
 * @param array<string, mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the 'getFormDetailsApi' function.
 * @param string $formId Form ID.
 *
 * @return array<string, mixed>
 */
function getIntegrationResultOutputItems(array $output, array $formDetails, string $formId): array
{
	$output['testKeys'] = 'testValue';

	return $params;
}
```


