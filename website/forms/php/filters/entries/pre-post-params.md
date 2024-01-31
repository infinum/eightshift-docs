---
id: pre-post-params
title: Pre-Post Params
---

Allows modifying field data before storing it into the database. Useful if, for example, a field value needs to determine a custom output of a different field.

```php
\add_filter('es_forms_entries_pre_post_params', [$this, 'getIntegrationPrePostParams'], 10, 3);

/**
 * Change form fields data before it is stored to the WordPress database
 *
 * @param array<string, mixed> $params Array of params.
 * @param string $formId Form ID.
 * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.
 *
 * @return array<string, mixed>
 */
public function getIntegrationPrePostParams(array $params, string $formId, array $formDetails): array
{
	$formSubmissionPageLt = $params['form_submission_page_lt']['value'] ?? '';

	if ($formSubmissionPageLt) {
		$params['ib-submission-source'] = [
			'name' => 'ib-submission-source',
			'value' => $formSubmissionPageLt,
			'type' => 'text',
			'internalType' => '',
		];
	}

	return $params;
}
```
