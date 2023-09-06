---
title: How to use the Wrapper as a standalone component
description: Explains the process of using the Wrapper component in WordPress templates.
slug: wrapper-as-a-standalone-component
authors: kancijan

date: 2023-09-05
tags: [eightshift, boilerplate, wrapper, components]
hide_table_of_contents: false
---

As one of the most powerful features in the Eightshift DevKit, the Wrapper is a component used for every block in the Gutenberg editor, but what about WordPress templates?
<!--truncate-->

:::note
[The Wrapper](https://eightshift.com/docs/basics/blocks-wrapper/) is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The Wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an option to add your custom attributes and fine-tune the Wrapper to your project's needs.
:::

## What are WordPress templates?

Before the days of [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) in WordPress, we used [template files](https://developer.wordpress.org/themes/basics/template-hierarchy/) to add custom layout to a blog page or post archives.

Depending on your setup, you might still use those as they are still a core part of WordPress themes.

## Usage in templates

Thanks to the `Components` helper we can easily `render()` any component in our template. 

:::Note
Interested in how to use components in a block? Take a look at [our docs](https://eightshift.com/docs/basics/blocks-component-in-block#i-have-a-component-that-i-want-to-use-manually).
:::

For this example, we'll use `index.php` as you probably already have it in your theme. If not, use the code below.

```php
<?php

/**
 * Display regular index/home page
 *
 * @package InfinumLibs
 */

use InfinumLibsVendor\EightshiftLibs\Helpers\Components;

get_header();

if (have_posts()) {
	while (have_posts()) {
		the_post();
		the_title();
		the_content();
	}
}

get_footer();
```
![No Wrapper](/img/blog/no-wrapper.png)

And here it is, a bone stock blog page that you can style only `the old way`... But not in our case!

## Using the Wrapper component

First, let's import our `Components` helper class. Make sure to use the namespace from your `composer.json`.
```php
use InfinumLibsVendor\EightshiftLibs\Helpers\Components;
```

If we take a deeper look into the `render` method, we'll see that for the `$component` parameter we can pass `component's name or the full path (ending with .php)`, and since the Wrapper is outside of the `components` or `custom` folder, we have to use `wrapper.php` combined with `Components::getProjectPaths('blocksDestinationWrapper')` for the `$parentPath` parameter.

```php
echo Components::render(
	'wrapper.php',
	[],
	Components::getProjectPaths('blocksDestinationWrapper'),
	true
);
```
:::Note
Setting the `$useComponentDefaults` to `true` will save you the trouble of setting a lot of additional properties by using default values defined in your manifest.
:::

### Wrapper output

Now that we have a working Wrapper component in our template, it's time to display posts in the loop.
We have two required properties; `wrapperOnlyOutput` and `wrapperManualContent`.

```json
"wrapperOnlyOutput": {
	"type": "boolean",
	"default": false
},
"wrapperManualContent": {
	"type": "string",
	"default": ""
}
```

Let's use the Card component from the [libs](https://eightshift.com/docs/additional-libraries/libs) as it's the perfect component to display post details and pass it to the `wrapperManualContent`.

To make the Card component look even better, we'll use the powerful properties that the Wrapper component has to offer and add some spacing between each item.

```php
'wrapperSpacingTopLarge' => 40,
'wrapperSpacingBottomLarge' => 40,
```

:::Note
For the list of all available properties, look at the Wrapper's `manifest.json`.
:::

### Final result

```php
<?php

/**
 * Display regular index/home page
 *
 * @package InfinumLibs
 */

use InfinumLibsVendor\EightshiftLibs\Helpers\Components;

get_header();

if (have_posts()) {
	while (have_posts()) {
		the_post();

		echo Components::render(
			'wrapper.php',
			[
				'wrapperOnlyOutput' => true,
				'wrapperSpacingTopLarge' => 40,
				'wrapperSpacingBottomLarge' => 40,
				'wrapperManualContent' => Components::render('card', [
					'introContent' => sprintf(__('On %1$s by %2$s', 'eightshift'), get_the_date(), get_the_author_meta('display_name')),
					'headingContent' => get_the_title(),
					'paragraphContent' => apply_filters('the_content', get_the_excerpt()),
					'buttonContent' => __('View more', 'eightshift'),
					'buttonUrl' => get_permalink(),
				]),
			],
			Components::getProjectPaths('blocksDestinationWrapper'),
			true
		);
	}
}

get_footer();
```
![Wrapper with content](/img/blog/wrapper-content.png)

## Conclusion

Although the Wrapper is not intended to be used as a standalone component, there is a nice benefit to having a time-saving out-of-the-box solution for displaying a content in a grid already defined in your project.
