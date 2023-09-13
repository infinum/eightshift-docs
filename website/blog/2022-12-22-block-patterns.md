---
title: Block Patterns
description: Intro to block patterns and examples how to use them
slug: block-patterns
authors: obradovic
date: 2023-03-01
tags: [eightshift, boilerplate, block, patterns]
hide_table_of_contents: false
---

Although Block Patterns may be similar to Block Variations, there are some differences between the two. This blog post will cover what Block Patterns are and how to use them.
<!--truncate-->

## What are Block Patterns and why use them?
Block Patterns are predefined block layouts which allow you to add content faster and make it look more consistent. The basic idea is to have a ready-made template which consists of multiple blocks, that have options predefined, and all you have to do is add content to these blocks.

They can be used in multiple ways. You can create sections composed of few blocks which you can then easily insert anywhere on the site. You can also create complex page layouts which could be used for writing blog posts, for example.

## Technical differences
As explained in the [Eightshift Development kit documentation](https://eightshift.com/docs/basics/blocks-patterns), the main difference between variations and patterns are:
- variations provide data using `manifest.json`, while patterns are registered using PHP
- variations appear in the editor in the same tab as blocks, while patterns appear in their own tab


## Registering Block Patterns
To make registering new block patterns easier, there is a WP-CLI command which will help you create a new block pattern. For this example, the block pattern we're making is called **Intro**. To get started, run this WP-CLI command:
```shell
wp boilerplate blocks create-block-pattern --title=intro
```

After generating the block pattern class, there are a few more adjustments you should make to it. For starters, you should update these methods:
- `getName()` - change the return value to `eightshift-boilerplate/intro-pattern`
- `getDescription()` - add any description you like

Once these values are updated, you can make the layout you'll use as a Block Pattern. The easiest way to do it is to build your layout in the editor, switch to `Code Editor`, copy the code and paste in inside your `getContent()` method. Your pattern should now be available to use. For this example, we can create a simple pattern which consists of a Heading block and a Paragraph block.

![Option to switch to Code Editor](/img/blog/code-editor.webp)

```php
protected function getContent(): string
{
	return '<!-- wp:eightshift-boilerplate/heading {"headingHeadingContent":"Post title goes here","headingHeadingSize":"big"} /-->
	<!-- wp:eightshift-boilerplate/paragraph {"paragraphParagraphContent":"\u003cem\u003ePost intro goes here\u003c/em\u003e"} /-->';
}
```

### Managing Pattern Categories

To make managing block patterns easier, we can group them into categories. To start, we need a service class. This class will be used to register our custom categories and remove core categories. The fastest way to add it to our project is by using the following WP-CLI command:
```shell
wp boilerplate create service-example --folder=BlockPatterns --file_name=ManagePatternCategories
```

Now that we have our service class, we'll add methods for removing core patterns and pattern categories. First, the method for removing core categories.
```php
/**
 * Unregisters core block pattern categories.
 *
 * @return void
 */
public function removeCoreCategories()
{
	\unregister_block_pattern_category('buttons');
	\unregister_block_pattern_category('columns');
	\unregister_block_pattern_category('gallery');
	\unregister_block_pattern_category('header');
	\unregister_block_pattern_category('text');
}
```
The second method will remove all core patterns

```php
/**
 * Removes support for core block patterns.
 *
 * @return void
 */
public function removeBlockPatternsCore()
{
	\remove_theme_support('core-block-patterns');
}
```

For these methods to work, we need to add them to the `register()` method of our service class. Add the following actions:
```php
\add_action('init', [$this, 'removeCoreCategories'], 40);
\add_action('after_setup_theme', [$this, 'removeBlockPatternsCore'], 20);
```

If you try searching for patterns in your editor, you'll notice they are no longer available. Now we can move on to adding our block pattern categories. The best approach is to define the pattern category names as constants inside your class. In this example, we will add two categories: **Templates** and **Sections**. We can add the following code inside our class:
```php
class ManagePatternCategories implements ServiceInterface
{
	public const TEMPLATES_CATEGORY = 'templates-category';
	public const SECTIONS_CATEGORY = 'sections-category';

	// Removed parts of code for better readability.

	/**
	 * Registers new pattern categories.
	 *
	 * @return void
	 */
	public function addCategories()
	{
		\register_block_pattern_category(self::TEMPLATES_CATEGORY, [
			'label' =>  \esc_html__('Templates', 'es-blog'),
		]);

		\register_block_pattern_category(self::SECTIONS_CATEGORY, [
			'label' => \esc_html__('Sections', 'es-blog'),
		]);
	}
}
```

Finally, return to your Intro Pattern class and update the `getCategories()` method:
```php
protected function getCategories(): array
{
	return [
		ManagePatternCategories::SECTIONS_CATEGORY
	];
}
```

In editor, in the Pattern tab, you should now see your new pattern category and the Intro Pattern.

![New pattern category and block pattern](/img/blog/block-pattern-example.webp)

## Things to keep in mind
Block patterns add layout and content which you can then modify at will per instance. These instances are not synchronised with the codebase so it becomes an issue if you've already used a pattern on multiple places on the site and then notice you've missed something in the pattern configuration phase. Fixing the pattern in the codebase will apply the changes on all newly added instances, but you will have to fix the misconfigured instances manually.
