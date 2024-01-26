---
id: dependency-blocks-frontend
title: Dependency blocks frontend
---

Allows changing the order in which the block frontend scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).

```php
\add_filter('es_forms_scripts_dependency_blocks_frontend', [$this, 'getScriptsDependency']);

/**
 * Load add-on scripts before the Forms scripts.
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
