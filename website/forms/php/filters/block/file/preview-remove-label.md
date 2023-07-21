---
id: preview-remove-label
title: Uploaded item remove button label
---

This filter allows you to change the label for the _Remove_ button in the preview section for the uploaded files. Within the provided string an SVG icon or similar can be included, or anything else that `Dropzone.js` supports.

```php
add_filter('es_forms_block_file_preview_remove_label', function(): string {
	return 'Remove item'; // This can be string or svg.
})
```
