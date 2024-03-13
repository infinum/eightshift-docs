---
id: result-output-parts
title: Result output parts
---

Allows modifying _Form result output parts_ using an API to change which shortcode is output on the frontend, based on the user input.

Used by the `esFormsROIP` shortcode.

```php
add_filter('es_forms_block_form_result_output_parts', 'getFormResultOutputParts', 10, 3);

/**
 * Populate result output parts in the API response data used in the 'esFormsROIP' shortcode.
 *
 * @param array<string, mixed> $output Output data.
 * @param array<string, mixed> $formDetails Data passed from the 'getFormDetailsApi' function.
 * @param string $formId Form ID.
 *
 * @return array<string, mixed>
 */
function getFormResultOutputParts(array $output, array $formDetails, string $formId): array
{
	$output['testKeys'] = 'testValue';

	return $output;
}
```


