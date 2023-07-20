---
id: set-locale
title: Set locale
---

This filter can be used to change the value of current locale. By default WordPress sets the locale in the admin to `en_US` and with this filter it can be changed to whichever locale is needed (e.g. when using multilanguage plugin).

```php
add_filter('es_forms_general_set_locale', function(string $locale): string {
	// Get the custom locale (e.g. from WPML plugin).
	return $locale;
})

