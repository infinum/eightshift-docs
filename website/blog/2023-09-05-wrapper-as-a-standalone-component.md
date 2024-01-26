---
title: How to use the Wrapper as a standalone component
description: Explains the process of using the Wrapper component in WordPress templates.
slug: wrapper-as-a-standalone-component
authors: kancijan

date: 2023-09-05
tags: [eightshift, boilerplate, wrapper, components]
hide_table_of_contents: false
---

As one of the most powerful features in the Eightshift DevKit, the Wrapper is a part of every Eightshift block in the Gutenberg editor, but what about WordPress templates?
<!--truncate-->

:::note
[Wrapper](https://eightshift.com/docs/basics/blocks-wrapper/) is designed to be the ultimate top-level component that controls how your block behaves in the website layout. It is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an option to add custom attributes and tailor the Wrapper to the needs of your project.
:::

## What are WordPress templates?

Before the days of [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) in WordPress, we used [template files](https://developer.wordpress.org/themes/basics/template-hierarchy/) to add custom layouts to a blog page or post archives.

:::note
While Full-site editing (FSE) _is_ supported in Eightshift Libs, a couple of modifications have to be done in your project to make it work.
:::

Depending on your setup, you might still use those as they are still a core part of WordPress themes.

## Usage in templates

Thanks to the `Components` helper, we can easily `render()` any component in our template. 

:::note
Interested in how to use components in a block? Take a look at [our docs](https://eightshift.com/docs/basics/blocks-component-in-block#i-have-a-component-that-i-want-to-use-manually).
:::

For this example, we'll use `index.php`, as you already have it in your theme. If not, use the code below:

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

And there it is, a bog-standard blog page that you can style only "the old way"... But not in our case!

## Using the Wrapper component

First, let's import our `Components` helper class. Make sure to use the namespace from your `composer.json`.
```php
use InfinumLibsVendor\EightshiftLibs\Helpers\Components;
```

If we look deeper into the `render` method, we'll see that for the `$component` parameter, we can pass the _component's name or the full path (ending with .php)_. We made it simple, so use `wrapper`.

:::note
If you are upgrading from an older version (supported since [Libs v6.5.7] (https://github.com/infinum/eightshift-libs/releases/tag/6.5.7) and [Frontend Libs v8.6.2](https://github.com/infinum/eightshift-frontend-libs/releases/tag/8.6.2)) copy code from [wrapper.php](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/wrapper/wrapper.php) into your project.
:::

We have two required properties to add to the Wrappers `manifest.json`: `wrapperOnlyOutput` and `wrapperManualContent`.

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

```php
echo Components::render(
	'wrapper',
	[
		'wrapperOnlyOutput' => true,
		'wrapperManualContent' => '',
	],
	'',
	true
);
```
:::note
Setting the `$useComponentDefaults` to `true` will save you the trouble of setting a lot of additional properties by using default values defined in your manifest.
:::

### Wrapper output

Now that we have a working Wrapper component in our template, it's time to display posts in the loop.

Let's use the [Card](https://infinum.github.io/eightshift-frontend-libs/storybook/?path=/story/components-card--editor) from the Frontend Libs as it's the perfect component to display post details and pass it to the `wrapperManualContent`.

To make the Card component look even better, we'll use some of the powerful properties the Wrapper component has to offer and add spacing between each item.

```php
'wrapperSpacingTopLarge' => 50,
'wrapperSpacingBottomLarge' => 50,
```

:::note
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
				'wrapperManualContent' => Components::render('card', [
					'introContent' => sprintf(__('On %1$s by %2$s', 'eightshift'), get_the_date(), get_the_author_meta('display_name')),
					'headingContent' => get_the_title(),
					'paragraphContent' => apply_filters('the_content', get_the_excerpt()),
					'buttonContent' => __('View more', 'eightshift'),
					'buttonUrl' => get_permalink(),
				]),
				'wrapperSpacingTopLarge' => 50,
				'wrapperSpacingBottomLarge' => 50,
			],
			'',
			true
		);
	}
}

get_footer();
```
![Wrapper with content](/img/blog/wrapper-content.png)

## Conclusion

Although the Wrapper is (usually) not intended to be used as a standalone component, there is a nice benefit to having a time-saving, out-of-the-box solution for displaying content in a grid already defined in your project.
