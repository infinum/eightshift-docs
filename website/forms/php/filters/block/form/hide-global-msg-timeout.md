---
id: hide-global-msg-timeout
title: Hide global msg timeout
---

This filter will override our default wait time before the global message is removed. The time is calculated in milliseconds. *Example: 10000ms = 10s*.

```php
add_filter('es_forms_block_form_hide_global_msg_timeout', function(): string {
	return '10000'; // 10 seconds.
})


