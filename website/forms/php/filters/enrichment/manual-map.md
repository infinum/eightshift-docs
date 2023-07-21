---
id: manual-map
title: Manual map
---

_Enrichment_ is a feature that allows storing URL parameters or cookie values in the browser `localStorage`, allowing their use during form submissions, in case they are not available after the user returns to the page.

This filter allows to configure the _Enrichment_ functionality. You should have a list of URL parameter/cookie names, and their corresponding form field names ready. Return an associative array with the keys being URL paramter/cookie names, and the value an array of one or more form field names. The parameter mapping will happen during form submission.

```php
add_filter('es_forms_enrichment_manual_map', function(): array {
	return [
		'__IB_LT_utm_medium' => ['utm_medium_lt'],
		'__IB_LT_utm_source' => ['utm_source_lt'],
	];
})
```

In this example, if while submitting the form you have a URL paramter or a cookie name `__IB_LT_utm_medium`, its value will be entered into the `utm_medium_lt` form field.

The data is stored in `localStorage` for the duration set in Settings.
