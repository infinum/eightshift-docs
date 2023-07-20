---
id: http-request-timeout
title: Http request timeout
---

This filter can be used to change the cURL timeout for the file upload, useful if you have to upload large files.

```php
add_filter('es_forms_general_http_request_timeout', function(): int {
	return 50;
})


