---
id: additional-blocks
title: Additional blocks
---

Adding additional custom or core blocks to the form builder page. For example you want to use heading block in your form with this filter you can provide it.

:::note
Every block provided must ba fully qualified block name.
:::

```php
add_filter('es_forms_blocks_additional_blocks', function() {
	return [
		'core/heading',
		'core/paragraph',
	];
})
```
