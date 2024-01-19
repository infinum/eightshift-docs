---
id: force-mimetype-from-fs
title: Force mimetype from FS
---

Force mimetype validation from filesystem values.

By default, mime-types are validated from the filesystem mimetype.

However, in case the file is not present on the filesystem for any reason, this will fall back to the POST-provided mimetype.

Using this filter, you can force Eightshift Forms to fail every file upload where it can't validate the mimetype from the filesystem.

```php
add_filter('es_forms_validation_force_mimetype_from_fs', 'forceMimetypeFs');

/**
 * Force mimetype validation from filesystem values.
 *
 * @return bool
 */
public function forceMimetypeFs(): bool
{
	return true;
}
````
