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
\add_filter('es_forms_block_form_tracking_additional_data', [$this, 'getBlockFormTrackingAdditionalData'], 10, 2);

/**
 * Set tracking additional data and that data will be send to the GTM along with all field values and event name.
 *
 * This filter will override settings for tracking additional data.
 *
 * @param string $formType Type of form used like greenhouse, hubspot, etc.
 * @param string $formId Form ID.
 *
 * @return array<int, array<int, string>>
 */
public function getBlockFormTrackingAdditionalData(string $formType, string $formId): array
{
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
}
```
