---
id: tracking-event-name
title: Tracking event name
---

This filter allows you to set fixed tracking event name for all or some of your forms. This value is used as an event name sent to the dataLayer when the form is submitted.

```php
add_filter('es_forms_block_form_tracking_event_name', function(string $formType, string $formId): string {
	if ($formType === 'workable') {
		return 'job-application';
	}

	return '';
}, 10, 2)
```
