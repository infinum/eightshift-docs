---
id: locale
title: Locale
---

This filter can be used to change the value of current locale. By default, WordPress sets the locale in the admin to `en_US`. With this filter it can be changed to any locale (e.g. when using a multilingual plugin).

Filter should return an array with two keys: `default` and `current`. Both keys should contain a string value of the locale for your project.

```php
add_filter('es_forms_general_locale', 'getFormsLocale');

/**
 * Change the current locale.
 *
 * @return array<string, mixed>
 */
public function getFormsLocale(): mixed
{
	// Get the default and current locale (e.g. from WPML plugin).
	return [
		'default' => '',
		'current' => '',
	];
}
```

