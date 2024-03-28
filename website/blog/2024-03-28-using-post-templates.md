---
title: Using post templates
description: Explaining post templates and how to use them.
slug: using-post-templates
authors: obradovic
date: 2024-03-28
tags: [eightshift, boilerplate, templates]
hide_table_of_contents: false
---

Sometimes you need your posts to follow a specific structure, or you simply want to provide a good starting point for the editors. This blog post will cover what post templates are, how to set them up, and what options they offer.
<!--truncate-->

A simple use case of post templates can be a review or a testimonial. For example, if you want each review to be a separate post and to use a single Quote block.

If you don’t have the new post type registered, you can refer to one of the previous blog posts which explains how to [register Custom Post Types](/blog/using-cpts-and-taxonomies). Once the new post type is registered, you can set the `template_lock` argument.

## Template locking options

The best way to lock the template is by adding the `template_lock` argument into a `return` statement from the `getPostTypeArguments` method in your post type class.

```php
return [
	// ...
	'template_lock' => 'all',
];
```

There are a few ways of locking the template:

- `all` - blocks can’t be inserted, removed, or moved around. Content can be edited for existing blocks
- `insert` - you can’t insert or remove blocks, but you can move them around

:::note
It’s not mandatory to use `template_lock` if you’re using post templates. You can leave it out and have it fully unlocked to give the editors the freedom to modify the proposed template.
:::

Additionally, you can lock each block separately by adding the following attributes:
```json
"lock": {
	"remove": true,
	"move": true,
}
```

## Adding a template

A recommended approach for adding a post template is to add a service class. For this example, the post type is **Review**, so the WP-CLI command for creating a new service class looks like this:

```bash
wp boilerplate create service-example --folder=Templates --file_name=ReviewTemplate
```

If you’re adding a template for another post type, create a separate class, but include it in the same namespace (folder). That way you’ll have a much better overview of the templates in the project.

Here’s an example of how to add a single Quote block as a template:

```php
/**
 * Register Review Template.
 *
 * @return void
 */
public function registerReviewTemplate(): void
{
	$reviewPostType = \get_post_type_object(ReviewPostType::POST_TYPE_SLUG);

	$reviewPostType->template = [
		[
			'eightshift-boilerplate/quote',
			[
				'wrapperSimple' => true,
				'quoteQuoteParagraphContent' => 'Content placeholder',
				'quoteQuoteAuthorContent' => 'Author name placeholder',
			]
		],
	];
}
```

To assign a post template, you need to get the post type object and then update the `template` property. Alternatively, you can also lock the post template in this method with the `template_lock` property, but it’s much cleaner to do it during custom post type registration.

Don’t forget to register your method with `add_action`:

```php
\add_action('init', [$this, 'registerReviewTemplate'], 20);
```

## Building complex layouts

As you can see from the previous example, you can set any attribute you want, including wrapper-related options. The easiest way to add a complex post template is by building it in the Gutenberg editor first, then switching to Code Editor and copying the content. This will have to be rewritten in PHP to make it work, and here’s how to do it. Let’s say the code for the blocks looks like this:

```
<!-- wp:eightshift-boilerplate/paragraph {"paragraphParagraphContent":"Placeholder text"} /-->

<!-- wp:eightshift-boilerplate/cta-modal {"ctaModalButtonContent":"Apply now!","ctaModalEndDateHide":true} -->
<!-- wp:eightshift-boilerplate/heading {"wrapperUseShowControl":false,"wrapperSimpleShowControl":false,"wrapperSimple":true,"wrapperAnchorId":"apply-now","headingHeadingContent":"Application form","headingHeadingSize":"h4:bold","headingAlign":"center"} /-->

<!-- wp:eightshift-forms/forms /-->
<!-- /wp:eightshift-boilerplate/cta-modal -->
```

This is how it looks when you rewrite it in PHP.

```php
$eventPostType->template = [ // array that holds all blocks.
	[ // array that holds a Paragraph block.
		'eightshift-boilerplate/paragraph', // full block name.
		[ // array that holds block attributes.
			'paragraphParagraphContent' => 'Placeholder text',
		]
	],
	[ // array that holds a CTA Modal block.
		'eightshift-boilerplate/cta-modal',
		[ // array that holds block attributes.
			'ctaModalEndDateHide' => true,
			'ctaModalButtonContent' => 'Apply now!',
			'ctaModalButtonAlign' => 'center',
		],
		[ // array of inner blocks for a CTA Modal block.
			[
				'eightshift-boilerplate/heading',
				[
					'wrapperAnchorId' => 'apply-now',
					'headingHeadingContent' => 'Application form',
					'headingHeadingSize' => 'h4:bold',
					'headingAlign' => 'center'
				]
			],
			[
				'eightshift-forms/forms',
				[] // not passing any attributes, so we just include an empty array.
			]
		]
	]
];
```

The comments were added above for an easier understanding of the structure. So, to summarize:

- the `template` property is an array that holds all blocks
- each block is a separate array that accepts three values in the following order: block name (string), block attributes (array), and inner blocks (array)
- the process of adding inner blocks is the same as for adding blocks to the main content

## Editor options for unlocking the templates

Even though the templates can be locked, some blocks can still be unlocked. This can be done by selecting a block and clicking on a lock icon. When locking or unlocking a block in this way, you can toggle two options, the ones already mentioned at the end of the [Template locking options](#template-locking-options) section:

- **Disable movement** - disable moving the block around
- **Prevent removal** - prevents the block from being deleted

That way, even if you lock the template, some modifications can still be made to the template. Please note, that once you remove a block from the locked template, you can’t add it again because the button for adding blocks is disabled.

## Suggestions for using post templates

Post templates offer a great way to streamline the process of adding content for specific post types and making the look and feel of the same post types more uniform. There are lots of ways to use them, so here are some suggestions to give you ideas:

**Posts/news articles** - a news article needs a title, an image, author information, and some content.

**Events** - you can put the important information at the top with a few accordions, then follow up with some content and add a CTA button at the bottom that opens a modal with an application form.

**Reviews** - use a single quote block for displaying user reviews. To make it work with the Featured Content block, you can modify the Featured Content block to render the Reviews CPT content directly, instead of rendering cards.
