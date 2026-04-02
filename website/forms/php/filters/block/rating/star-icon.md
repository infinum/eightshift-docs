---
id: star-icon
title: Star icon
---

Allows replacing the default star icon used in the rating field with a custom SVG icon.

```php
\add_filter('es_forms_block_rating_star_icon', [$this, 'getBlockRatingStarIcon'], 10, 2);

/**
 * Replace the default star icon in the rating field.
 *
 * @param string $icon Default star icon SVG markup.
 * @param array<string, mixed> $attributes Block attributes.
 *
 * @return string
 */
public function getBlockRatingStarIcon(string $icon, array $attributes): string
{
	return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z"/></svg>';
}
```
