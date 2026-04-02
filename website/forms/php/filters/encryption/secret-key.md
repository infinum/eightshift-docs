---
id: secret-key
title: Secret keys
---

Allows overriding the encryption keys used by Eightshift Forms for encrypting sensitive data (e.g. variation values passed to the thank-you page). By default, WordPress salts are used.

### Secret key

```php
\add_filter('es_forms_encryption_secret_key', [$this, 'getEncryptionSecretKey']);

/**
 * Override the encryption secret key.
 *
 * Defaults to wp_salt().
 *
 * @return string
 */
public function getEncryptionSecretKey(): string
{
	return \defined('MY_FORMS_SECRET_KEY') ? MY_FORMS_SECRET_KEY : \wp_salt();
}
```

### Secret IV key

```php
\add_filter('es_forms_encryption_secret_iv_key', [$this, 'getEncryptionSecretIvKey']);

/**
 * Override the encryption secret IV key.
 *
 * Defaults to wp_salt('SECURE_AUTH_KEY').
 *
 * @return string
 */
public function getEncryptionSecretIvKey(): string
{
	return \defined('MY_FORMS_SECRET_IV_KEY') ? MY_FORMS_SECRET_IV_KEY : \wp_salt('SECURE_AUTH_KEY');
}
```

:::caution
If you change these keys after forms have already been used, any previously encrypted values (e.g., variation query parameters) will no longer be decryptable.
:::
