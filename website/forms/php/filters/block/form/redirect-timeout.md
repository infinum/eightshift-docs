---
id: redirect-timeout
title: Redirect timeout
---


This filter allows you to change the delay for the redirect after a successful form submission, in milliseconds.

```php
add_filter('es_forms_block_form_redirection_timeout', function(): string {
	return '1000'; // 1 seconds.
})


