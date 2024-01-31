---
id: force-mimetype-from-fs
title: Force mimetype from FS
---

Forces MIME type validation based on the filesystem values. This is the default behavior. In case the file does not exist, the behavior falls back to validating using the MIME type from the POST object.

If `true` is returned from this filter, the Forms file upload will fail if the MIME type cannot be matched from the filesystem.

```php
\add_filter('es_forms_validation_force_mimetype_from_fs', [$this, 'forceMimetypeFs']);

/**
 * Force MIME type validation based on the filesystem values.
 *
 * @return bool
 */
public function forceMimetypeFs(): bool
{
	return true;
}
````
