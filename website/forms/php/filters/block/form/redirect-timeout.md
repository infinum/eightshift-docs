---
id: redirect-timeout
title: Redirect timeout
---

This filter will override our default wait time once the form returns success and it is redirected. The time is calculated in milliseconds. *Example: 1000ms = 1s*.

```php
add_filter('es_forms_block_form_redirection_timeout', function(): string {
	return '1000'; // 1 seconds.
})


