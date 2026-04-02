---
id: modify-data-set
title: Modify dataset
---

Allows modifying the active country dataset. Unlike the [alternative dataset](alternative-data-set) filter which provides a full replacement, this filter lets you make targeted changes to whichever dataset is currently in use.

```php
\add_filter('es_forms_block_country_modify_data_set', [$this, 'getBlockCountryModifyDataSet'], 10, 2);

/**
 * Modify the active country dataset.
 *
 * @param array<mixed> $dataSet The current dataset.
 * @param string $formId Form ID.
 *
 * @return array<mixed>
 */
public function getBlockCountryModifyDataSet(array $dataSet, string $formId): array
{
	// Remove a specific country from the dataset.
	return \array_filter($dataSet, static fn($country) => ($country['value'] ?? '') !== 'xx');
}
```
