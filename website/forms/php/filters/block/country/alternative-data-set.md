---
id: alternative-data-set
title: Alternative data set
---

We use DataHub list country list for providing the rest data that is used in the Block Editor. This list is used in the dropdown option for selecting the form country usage.

You can find our complete list [on this link](https://github.com/infinum/eightshift-forms/blob/develop/data/country/manifest.json).

By default our country field will always show the full list of countries with this filter you can provide an alternative data set that will be used instead of the default one. You will not be able to change the default list, only provide an alternative one.

For example you only want to show 4 countries in you list, you can do that with this filter by adding a new list name and adding a `onlyUse` key with the list of countries you want to use.

#### Available options:
* **remove** - Remove countries from the list, useful if you want the full list but only want to remove a few countries.
* **change** - Change the country name, useful if you want to change the name of the country you want to show to the users.
* **onlyUse** - Use only the provided countries, useful if you want to show only a few countries and not the whole list.

```php
add_filter('es_forms_block_country_alternative_data_set', function(): array {
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
})
```
