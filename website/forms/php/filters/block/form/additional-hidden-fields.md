---
id: additional-hidden-fields
title: Additional hidden fields
---

Allows adding custom hidden fields to the form block. These fields will **not** be visible in the Block Editor. Useful if external data needs to be passed through the form.

```php
\add_filter('es_forms_block_form_additional_hidden_fields', [$this, 'getBlockFormAdditionalHiddenFields'], 10, 2);

/**
 * Set additional hidden fields to form block.
 *
 * @param array<mixed> $output Output data.
 * @param string $formId FormId value.
 *
 * @return array<mixed>
 */
public function getBlockFormAdditionalHiddenFields(array $output, string $formId): array
{
	$output['additionalHiddenFields'] = [
		[
			'name' => 'additional-hidden-field',
			'value' => 'additional-hidden-field-value',
		],
	];

	return $output;
}
```
