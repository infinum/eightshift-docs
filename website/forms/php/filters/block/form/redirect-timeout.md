---
id: redirect-timeout
title: Redirect timeout
---

This filter allows you to change the delay for the redirect after a successful form submission, in milliseconds.

```php
\add_filter('es_forms_block_form_redirection_timeout', [$this, 'getBlockFormRedirectionTimeout']);

/**
 * Changing the default success redirection wait time
 *
 * This filter will override our default wait time once the form returns success and it is redirected. The time is calculated in milliseconds. *Example: 1000ms = 1s*.
 *
 * @return string
 */
public function getBlockFormRedirectionTimeout(): string
{
	return '1000'; // 1 seconds.
}
```


