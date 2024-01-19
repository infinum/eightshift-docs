---
id: additional-hidden-fields
title: Additional hidden fields
---

This filter allows you to add additional hidden fields to the form block. However this fields will not be visible in the Block Editor.

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
