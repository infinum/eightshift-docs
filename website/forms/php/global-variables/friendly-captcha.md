---
id: friendly-captcha
title: Friendly Captcha
---

### ES_FRIENDLY_CAPTCHA_SITE_KEY

Friendly Captcha site key, found on your application in the Friendly Captcha dashboard.

```php
define('ES_FRIENDLY_CAPTCHA_SITE_KEY', '<site-key>');
```

### ES_FRIENDLY_CAPTCHA_API_KEY

Friendly Captcha API key, created under `API Keys` in the Friendly Captcha dashboard. Used to verify the submitted solution on the server.

```php
define('ES_FRIENDLY_CAPTCHA_API_KEY', '<api-key>');
```

:::note
Both keys must be provided for the feature to work, either as global variables or in the settings fields.
:::
