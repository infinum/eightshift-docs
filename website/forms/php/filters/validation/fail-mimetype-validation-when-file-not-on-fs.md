---
id: fail-mimetype-validation-when-file-not-on-fs
title: Fail mimetype validation
---

By default, MIME types are validated by the filesystem. However, if the file is not present on the filesystem for any reason, this will fall back to the POST-provided MIME types.

Using this filter, you can force Forms to fail every file upload where it can't validate the MIME type from the filesystem.

```php
add_filter('es_forms_validation_force_mimetype_from_fs', function(): bool {
	return true;
})


