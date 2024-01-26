---
id: locale
title: Locale
---

Allows changing the current locale. By default, WordPress will use the locale that is set as the Site Language in settings. A plugin like WPML can also set this value.

Filter should return an array with two keys: `default` and `current`. Both keys should contain a string value of the locale for your project.

```php
\add_filter('es_forms_general_locale', [$this, 'getFormsLocale']);

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

