---
id: tracking-event-name
title: Tracking event name
---

This filter allows you to set fixed tracking event name for all or some of your forms. This value is used as an event name sent to the dataLayer when the form is submitted.

```php
\add_filter('es_forms_block_form_tracking_event_name', [$this, 'getBlockFormTrackingEventName'], 10, 2);

/**
 * Set tracking event name value.
 *
 * This filter will override settings for tracking event name.
 *
 * @param string $formType Type of form used like greenhouse, hubspot, etc.
 * @param string $formId Form ID.
 *
 * @return string
 */
public function getBlockFormTrackingEventName(string $formType, string $formId): string
{
	if ($formType === 'workable') {
		return 'job-application';
	}

	return '';
}
```
