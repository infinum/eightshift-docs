---
id: http-request-timeout
title: HTTP request timeout
---

This filter can be used to change the cURL timeout for the file upload, useful if you have to upload large files. The time is calculated in seconds.

```php
add_filter('es_forms_general_http_request_timeout', function(): int {
	return 50; // 50 seconds.
})


