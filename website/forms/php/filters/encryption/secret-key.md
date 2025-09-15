---
id: secret-key
title: Secret key
---


Encrypting uses `wp_salt()` from WordPress to encrypt the data. If you want to use your own secret key, you can use the provided filter.

```php
\add_filter('es_forms_encryption_secret_key', 'getEncryptionSecretKey');

/**
 * Get the encryption secret key.
 *
 * @return string
 */
public function getEncryptionSecretKey(): string
{
	return '<your-secret-key>';
}
```

