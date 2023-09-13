---
id: scripts-dependency
title: Scripts dependency
---

In case you are having a conflict with some other plugin or theme, you can try to change the order of the scripts loading. This filter will make forms scripts dependent on your scripts and load them after your scripts.

```php
add_filter('es_forms_general_scripts_dependency', function(): array {
	return [
		'infinum-block-frontend-scripts',
	];
})
