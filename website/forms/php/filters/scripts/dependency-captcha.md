---
id: dependency-captcha
title: Dependency captcha
---


Allows changing the order in which the captcha scripts are loaded on the frontend. This filter is useful when you want to load the captcha scripts earlier or later than the default order. 

:::caution
We highly discourage changing the order of the captcha scripts. This can cause issues with the captcha functionality.
:::

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

