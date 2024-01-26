---
id: dependency-admin
title: Dependency admin
---

Allows changing the order in which the admin area scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).

```php
\add_filter('es_forms_scripts_dependency_admin', [$this, 'getScriptsDependency']);

/**
 * Fire add-on scripts before the Forms scripts.
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
