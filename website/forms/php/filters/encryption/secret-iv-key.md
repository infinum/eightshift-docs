---
id: secret-iv-key
title: Secret iv key
---

Encrypting uses `\wp_salt('SECURE_AUTH_KEY')` from WordPress to encrypt the data. If you want to use your own secret key, you can use the provided filter.

```php
\add_filter('es_forms_encryption_secret_iv_key', 'getEncryptionSecretIvKey');

/**
 * Get the encryption secret IV key.
 *
 * @return string
 */
public function getEncryptionSecretIvKey(): string
{
	return '<your-secret-iv-key>';
}
```
