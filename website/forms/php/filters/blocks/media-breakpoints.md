---
id: media-breakpoints
title: Media breakpoints
---

By default, we use 4 breakpoints in our responsive design system, defined [here](https://github.com/infinum/eightshift-forms/blob/develop/src/Blocks/manifest.json) within the `breakpoints` key.

If you project uses different breakpoint values, you can change them with this filter.

```php
\add_filter('es_forms_blocks_media_breakpoints', [$this, 'getMediaBreakpoints']);

/**
 * Changing the default media breakpoints.
 *
 * This filter will override our default media breakpoints used for responsive selectors like widths of the form fields. You must provide all 4 breakpoints in order for this to work properly and you must follow the pre-defined breakpoint names.
 *
 * @return array<string, int>
 */
public function getMediaBreakpoints(): array
{
	return [
		'mobile' => 200,
		'tablet' => 500,
		'desktop' => 800,
		'large' => 1200
	];
}
```

:::note
Additional breakpoints can't be provided, only the current values can be modified!
:::
