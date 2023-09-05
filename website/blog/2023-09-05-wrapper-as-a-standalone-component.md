---
title: How to use wrapper as a standalone component
description: Explains the process of 
slug: wrapper-as-a-standalone-component
authors: kancijan

date: 2023-09-05
tags: [eightshift, boilerplate, wrapper, components]
hide_table_of_contents: false
---

As one of the most powerful features in the Eightshift DevKit, wrapper is a component used for every block in the Gutenberg editor, but what about WordPress templates?
<!--truncate-->

:::note
[The wrapper](https://eightshift.com/docs/basics/blocks-wrapper/) is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an ability to add your custom attributes and fine-tune the wrapper to your project's needs.
:::

## What are Wordpress templates?

Before of the days of [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) in WordPress, we used [template files](https://developer.wordpress.org/themes/basics/template-hierarchy/) to add custom layout to blog page or post archives.

Depending on your setup, you might still use those as they are still core of the WordPress theme.

## Usage in templates

Thanks to the `Components` helper we can easily `render()` any component in our template. For this example we'll use `index.php` as you probably already have it your theme. If not, use the code bellow.

:::Note
Interested in how to use components in a block? Take a look at [our docs](https://eightshift.com/docs/basics/blocks-component-in-block#i-have-a-component-that-i-want-to-use-manually).
:::

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
![No wrapper](/website/static/img/blog/no-wrapper.png)

And here it is, bone stock blog page that you can stye only `the old way`... But not in our case!

### Using the wrapper component

First, let's import our `Components` helper class. Make sure you use namespace from your `composer.json`.
```php
use InfinumLibsVendor\EightshiftLibs\Helpers\Components;
```

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
				'wrapperManualContent' => Components::render('card', Components::props('card', [], [
					'cardIntroContent' => sprintf(__('On %1$s by %2$s', 'eightshift'), get_the_date(), get_the_author_meta('display_name')),
					'cardHeadingContent' => get_the_title(),
					'cardParagraphContent' => apply_filters('the_content', get_the_excerpt()),
					'cardButtonContent' => __('View more', 'eightshift'),
					'cardButtonUrl' => get_permalink(),
				])),
			],
			Components::getProjectPaths('blocksDestinationWrapper'),
			true
		);
	}
}

get_footer();

```
