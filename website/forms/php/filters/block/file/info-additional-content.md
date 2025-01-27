---
id: info-additional-content
title: Info additional content
---

This filter will allow you to change the additional content of the info component of the file block. By default, it contains the `infoText` and `removeButton`. You can provide your own content to be displayed in the info component.

```php
\add_filter('es_forms_block_file_info_additional_content', [$this, 'getBlockFileInfoAdditionalContent']);

/**
 * Change details of info component of the file block.
 *
 * @param string $output The current output.
 * @param array<mixed> $attributes The attributes.
 *
 * @return string
 */
public function getBlockFileInfoAdditionalContent(string $output, array $attributes): string
{
	return \esc_html__('Info Text', 'text-domain');
}
```
