---
id: media-breakpoints
title: Media breakpoints
---

We are using 4 breakpoints in our responsive design defined [here](https://github.com/infinum/eightshift-forms/blob/develop/src/Blocks/manifest.json) under the `breakpoints` key. If you project used different breakpoints you can change them with this filter.

:::note
You can't provide additional breakpoints, only change the existing ones.
:::

```php
add_filter('es_forms_blocks_media_breakpoints', function() {
	return [
		'mobile' => 200,
		'tablet' => 500,
		'desktop' => 800,
		'large' => 1200
	];
})
```

