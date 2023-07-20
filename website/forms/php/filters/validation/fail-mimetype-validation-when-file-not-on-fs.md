---
id: fail-mimetype-validation-when-file-not-on-fs
title: Fail mimetype validation
---

By default, mime-types are validated from the filesystem mimetype. However, in case the file is not present on the filesystem for any reason, this will fall back to the POST-provided mimetype.

Using this filter, you can force Eightshift Forms to fail every file upload where it can't validate the mimetype from the filesystem.

```php
add_filter('es_forms_validation_force_mimetype_from_fs', function(): bool {
	return true;
})


