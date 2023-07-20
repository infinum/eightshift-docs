---
id: additional-content
title: Additional content
---

This filter is used if you want to add some custom string/component/css variables, etc. to the block. It will be loaded before closing the field element.

```php
add_filter('es_forms_block_textarea_additional_content', function(): string {
	return '<custom-string>';
})
```
