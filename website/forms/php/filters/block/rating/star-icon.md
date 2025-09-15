---
id: star-icon
title: Star icon
---

Change the default star icon for the rating block with your own SVG icon or component.

```php
\add_filter('es_forms_block_rating_star_icon', 'getBlockRatingStarIcon', 10, 2);

/**
 * Change the star icon for the rating block.
 *
 * @param string $currentIcon
 * @param array<mixed> $attributes
 *
 * @return string
 */
public function getBlockRatingStarIcon(string $currentIcon, array $attributes): string
{
	return $currentIcon;
}
```
