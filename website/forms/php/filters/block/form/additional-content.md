---
id: additional-content
title: Additional content
---

This filter allows to add custom content before the closing tag of the field element. Can be useful for additional markup, styles, etc.

```php
add_filter('es_forms_block_form_additional_content', function(): string {
	return '<custom-string>';
})
```
