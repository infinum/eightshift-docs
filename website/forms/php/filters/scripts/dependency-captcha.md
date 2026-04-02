---
id: dependency-captcha
title: Captcha script dependency
---

Allows adding custom script dependencies that should load before the captcha script. Useful when you have custom scripts that need to be loaded before the reCAPTCHA integration initializes.

```php
\add_filter('es_forms_scripts_dependency_captcha', [$this, 'getScriptsDependencyCaptcha']);

/**
 * Add custom script dependencies for the captcha script.
 *
 * @return array<int, string>
 */
public function getScriptsDependencyCaptcha(): array
{
	return [
		'my-custom-script-handle',
	];
}
```
