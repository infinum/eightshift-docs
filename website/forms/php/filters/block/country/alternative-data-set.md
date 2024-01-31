---
id: alternative-data-set
title: Alternative datasets
---

We use the DataHub country list to provide a REST route with all the countries, as well as the data in the Geolocation and phone number fields.

The complete list can be found [here](https://github.com/infinum/eightshift-forms/blob/develop/data/country/manifest.json).

By default the Country field will show the full list of countries. With this filter, an alternate dataset can be provided to use instead of the built-in one. Please note that the built-in dataset can't be edited, only a replacement can be provided.

For example, if you only want to allow choosing between 4 countries, you can do that with this filter. Add a new entry, add the `label` and the `slug`, then provide the countries you want to be included in the `onlyUse` key.

#### Available options:
* **remove** - Allows you to remove certain countries from the default dataset.
* **change** - Allows you to modify the names of countries in the default dataset.
* **onlyUse** - Allows providing a custom list of countries, instead of using the full dataset.

```php
\add_filter('es_forms_block_country_alternative_data_set', [$this, 'getBlockCountryAlternativeDataSet']);

/**
 * Get country alternative changes for data set and provide filters.
 *
 * This filter will only provide alternative options and change the original list.
 *
 * @return array<mixed>
 */
public function getBlockCountryAlternativeDataSet(): array
{
	{
		return [
			[
				'label' => 'New List',
				'slug' => 'new-list',
				'remove' => [
					'cz',
					'us',
				],
				'change' => [
					'hr' => 'New Croatia',
				],
				'onlyUse' => [
					'de',
					'gb',
					'hr',
					'cz',
				],
			],
			[
				'label' => 'Cool List',
				'slug' => 'cool-list',
				'onlyUse' => [
					'ba',
					'jp',
					'gb',
					'fr',
				],
			],
		];
	}
}
```
