---
id: hide-global-msg-timeout
title: Global message timeout
---

This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds.

```php
\add_filter('es_forms_block_form_hide_global_msg_timeout', [$this, 'getBlockFormHideGlobalMsgTimeout']);

/**
 * Changing the default success hide global message wait time.
 *
 * This filter will override our default wait time before the global message is removed. The time is calculated in milliseconds. *Example: 1000ms = 1s*.
 *
 * @return string
 */
public function getBlockFormHideGlobalMsgTimeout(): string
{
	return '10000'; // 10 seconds.
}
```
