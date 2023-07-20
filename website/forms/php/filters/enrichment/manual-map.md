---
id: manual-map
title: Manual map
---

Enrichment is a feature that allows us to store URL parameters or cookie values in the browser's localStorage, facilitating their later use during form submissions in case the user returns without the enriched data. This functionality enables us to provide form enrichment data.

To utilize this filter effectively, you must establish a mapping between the cookie/URL parameter key and the corresponding form field key. This mapping will then be employed during the submission process to populate the relevant data automatically. By doing so, the form submission process becomes more seamless and user-friendly, as it leverages the stored data to pre-fill the form with necessary information.

```php
add_filter('es_forms_enrichment_manual_map', function(): array {
	return [
		'__IB_LT_utm_medium' => ['utm_medium_lt'],
		'__IB_LT_utm_source' => ['utm_source_lt'],
	];
})
```

For example if you submit your form with this url param or cookie `__IB_LT_utm_medium` value of this param will be mapped to `utm_medium_lt` field and sent to the integration with the form. The data is stored in the users browser depending on the time set in the configuration.
