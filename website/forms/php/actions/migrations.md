---
id: migrations
title: Migrations
---

Based on the migration version you can run custom actions before migration is triggered.

**Actions list:**
* es_forms_migration_two_to_three_general
* es_forms_migration_two_to_three_forms
* es_forms_migration_two_to_three_locale

## How to use

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
