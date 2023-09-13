---
id: hide-global-msg-timeout
title: Global message timeout
---

This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds.


```php
add_filter('es_forms_block_form_hide_global_msg_timeout', function(): string {
	return '10000'; // 10 seconds.
})


