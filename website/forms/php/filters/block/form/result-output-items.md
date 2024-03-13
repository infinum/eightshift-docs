---
id: result-output-items
title: Result output items
---

Allows modifying _Form result output parts_ using an API to change which block is shown on the frontend, based on the user input.

Used by the `result-output-item` block.

```php
add_filter('es_forms_block_form_result_output_items', 'getFormResultOutputItems', 10, 3);

/**
 * Populate Result output items in the API response data used in 'result-output-item' block.
 *
 * @param array<string, mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the 'getFormDetailsApi' function.
 * @param string $formId Form ID.
 *
 * @return array<string, mixed>
 */
function getFormResultOutputItems(array $output, array $formDetails, string $formId): array
{
	$output['testKeys'] = 'testValue';

	return $output;
}
```


