---
id: phone-sync
title: Phone sync
---

By default if you change the value on the phone field the country field (if present) will be updated automatically. If you want to disable this feature you can use this filter or use the form global/local settings. This filter will override global settings for phone sync.

```php
add_filter('es_forms_block_form_phone_sync', function(string $formType, string $formId): bool {
	if ($formType === 'hubspot') {
		return true;
	}

	return false;
}, 10, 2)
```
