---
id: file-security-deny-extensions
title: File security deny extensions
---

Overrides the built-in list of denied file extensions for file upload validation. Any file whose extension matches an entry in the returned array will be rejected.

Extensions can be provided with or without a leading dot (e.g. `'exe'` or `'.exe'`). The default list blocks executables, shell scripts, server-side code, web config files, browser-executable formats, and Office macro-enabled formats.

```php
\add_filter('es_forms_validation_file_security_deny_extensions', [$this, 'fileSecurityDenyExtensions']);

/**
 * Override the list of denied file upload extensions.
 *
 * @param array<int, string> $extensions Default denied extensions list.
 *
 * @return array<int, string>
 */
public function fileSecurityDenyExtensions(array $extensions): array
{
	// Add extra extensions on top of the defaults.
	return \array_merge($extensions, ['psd', 'ai']);
}
```
