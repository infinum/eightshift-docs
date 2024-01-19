---
id: dependency-admin
title: Dependency admin
---

This filter will allow you to change the order of scripts that are loaded in the admin area. Generally used when writing a addon plugin and you want to load you scripts before the main plugin scripts in order to listen to the forms custom event listeners.

```php
\add_filter('es_forms_scripts_dependency_admin', 'getScriptsDependency');

/**
 * Make addon scripts fired before main plugin scripts.
 *
 * @return array<int, string>
 */
public function getScriptsDependency(): array
{
	return [
		'<script-handle-name>',
	];
}
```
