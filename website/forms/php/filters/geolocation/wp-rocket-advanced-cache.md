---
id: wp-rocket-advanced-cache
title: WP Rocket advanced cache
---

This filter enables providing custom function in WP-Rocket plugin activation process by overriding advanced-cache.php file.

In general you would never need to use this filter, because this is added by default in the plugin.

To be able to use this functionality you need to define global variable `ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE` to `true` using you `wp-config.php` file.

```php
add_filter('es_forms_geolocation_wp_rocket_advanced_cache', function(string $content, string $outputContent): string {
	$position = \strpos($content, '$rocket_config_class');

	$output = '
		$esFormsPath = ABSPATH . "wp-content/plugins/eightshift-forms/src/Geolocation/geolocationDetect.php";
		if (file_exists($esFormsPath)) {
			require_once $esFormsPath;
		};';

	return \substr_replace($content, $output, $position, 0);
})
```

:::note
Global variable dependency:
* [ES_GEOLOCATION_USE_WP_ROCKET_ADVANCED_CACHE](/forms/php/global-variables/geolocation#es_geolocation_use_wp_rocket_advanced_cache)
:::
