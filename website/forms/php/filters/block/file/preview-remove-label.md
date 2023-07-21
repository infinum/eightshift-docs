---
id: preview-remove-label
title: Preview remove label
---

We use `Dropzone.js` for file uploads, and this filter allows you to change the label for the remove button. By default it will display only string "Remove" but with this filter you can change this to any other string or SVG icon.

```php
add_filter('es_forms_block_file_preview_remove_label', function(): string {
	return 'Remove item'; // This can be string or svg.
})
```
