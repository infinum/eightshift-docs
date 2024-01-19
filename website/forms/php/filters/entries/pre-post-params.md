---
id: pre-post-params
title: Pre-Post Params
---

Change form fields data before it is stored to the WordPress database. This way you can manipulate data and provide additional mapping to the data sent to the WordPress database.

```php
add_filter('es_forms_entries_pre_post_params', 'getIntegrationPrePostParams', 10, 3);

/**
 * Change form fields data before it is stored to the WordPress database
 *
 * @param array<string, mixed> $params Array of params.
 * @param string $formId Form ID.
 * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.
 *
 * @return array<string, mixed>
 */
function getIntegrationPrePostParams(array $params, string $formId, array $formDetails): array
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
