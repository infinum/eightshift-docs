---
id: dependency-blocks-frontend
title: Dependency blocks frontend
---

This filter will allow you to change the order of scripts that are loaded in the blocks frontend area. Generally used when writing a addon plugin and you want to load you scripts before the main plugin scripts in order to listen to the forms custom event listeners.

```php
\add_filter('es_forms_scripts_dependency_blocks_frontend', 'getScriptsDependency');

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
