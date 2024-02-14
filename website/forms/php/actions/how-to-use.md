---
id: how-to-use
title: How to use?
---

Eightshift Forms was made by developers, for developers, so we provide a comprehensive set of actions that allow you to hook project specific functionality into the Forms plugin.

Difference between actions and filters is that actions are used to add functionality, while filters are used to modify data.

## How to use actions

The list of all available actions can be found [here](https://github.com/infinum/eightshift-forms/blob/develop/testFilters/testFilters.php), along with descriptions and examples.

To use a action, simply copy the code snippet from the example and paste it into your project, e.g.
```php
\add_action('es_forms_migration_two_to_three_locale', [$this, 'runMigration2To3Locale']);

/**
 * Run custom action after migration from version 2 to 3 locale.
 *
 * @return void
 */
public function runMigration2To3Locale(): void
{
	\update_option('<option-name>', '<option-value>');
}
```
