---
id: tracking-additional-data
title: Tracking additional data
---

This filter allows you to set additional data that is going to be sent in the dataLayer on certain events. This filter works great in combination with the [Tracking event name](/forms/php/filters/block/form/tracking-event-name) filter.

You can add as many key/value pairs as you want. The data is sent as an array of arrays. The first value is the key and the second value is the value.

**We support three different keys:**
* general - this data is sent on all events.
* success - this data is sent only on success event.
* error - this data is sent only on error event.


```php
add_filter('es_forms_block_form_tracking_additional_data', function(string $formType, string $formId): string {
	return [
		'general' => [
			[
				'customKey',
				'customValue',
			],
			[
				'additionalKey',
				'additionalValue',
			],
		],
		'success' => [
			[
				'successKey',
				'successValue',
			],
			[
				'successAdditionalKey',
				'successAdditionalValue',
			],
		],
		'error' => [
			[
				'errorKey',
				'errorValue',
			],
			[
				'errorAdditionalKey',
				'errorAdditionalValue',
			],
		],
	];
}, 10, 2);
```
