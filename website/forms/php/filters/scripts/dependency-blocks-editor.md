---
id: dependency-blocks-editor
title: Dependency blocks editor
---

Allows changing the order in which the Block Editor scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).

```php
\add_filter('es_forms_scripts_dependency_blocks_editor', [$this, 'getScriptsDependency']);

/**
 * Load add-on scripts before Forms scripts.
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
