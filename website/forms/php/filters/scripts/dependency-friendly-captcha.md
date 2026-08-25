---
id: dependency-friendly-captcha
title: Friendly Captcha script dependency
---

Allows adding custom script dependencies that should load before the Friendly Captcha script. Useful when you have custom scripts that need to be loaded before the Friendly Captcha widget initializes.

The filter is only applied when Friendly Captcha is the active [spam prevention](/forms/features/spam-prevention) provider and its keys are set.

```php
\add_filter('es_forms_scripts_dependency_friendly_captcha', [$this, 'getScriptsDependencyFriendlyCaptcha']);

/**
 * Add custom script dependencies for the Friendly Captcha script.
 *
 * @return array<int, string>
 */
public function getScriptsDependencyFriendlyCaptcha(): array
{
	return [
		'my-custom-script-handle',
	];
}
```
