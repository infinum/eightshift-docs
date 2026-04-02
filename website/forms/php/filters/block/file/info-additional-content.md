---
id: info-additional-content
title: Info additional content
---

Allows injecting custom HTML content into the file field info section (the area below the file input that shows upload instructions or constraints).

```php
\add_filter('es_forms_block_file_info_additional_content', [$this, 'getBlockFileInfoAdditionalContent'], 10, 2);

/**
 * Add custom content to the file field info section.
 *
 * @param string $content Default content (empty string).
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return string
 */
public function getBlockFileInfoAdditionalContent(string $content, array $attributes): string
{
	return '<p class="file-info-note">Only PDF and Word documents are accepted.</p>';
}
```
