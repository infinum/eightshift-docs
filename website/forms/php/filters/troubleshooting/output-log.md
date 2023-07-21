---
id: output-log
title: Output log
---

This filter provides you with the ability to output internal debug log to an external source like Bugsnag, Sentry, or similar.

If not set, the log will be outputted to projects `wp-content/debug.log` file.

Make sure you have `WP_DEBUG_LOG` set to true in your `wp-config.php` file to be able to use this filter.

```php
add_filter('es_forms_troubleshooting_output_log', function(): bool {
	return true;
})
```

:::caution
**Do not use on production sites!**
This filter is used only for testing and debugging purposes.
:::
