---
title: Block Variations
description: Intro to block variations and examples of how to use them
slug: block-variations
authors: obradovic
date: 2022-09-07
tags: [eightshift, boilerplate, block, variations]
hide_table_of_contents: false
---

Let's picture the following scenario: You just created a block with many options and now you want multiple versions of that block available with pre-set options. That's where variations come in handy!
<!--truncate-->

## What are variations?

Block variations allow us to override default block attributes. We can select a variation from the block list with all preset options instead of manually setting them.

:::note
You cannot add new attributes in variations. Only attributes that exist in the parent block can be used.
:::

For example, we have a `Card` block. If we want to use it for something like downloading PDF files, we may not need image or paragraph components. A simple text that describes type of the file, title of the file and a download button are all we need in this case.

Our new card should consist of the following components:
- intro
- heading
- button

## How to register a block variation?

The process of registering block variations is fairly simple. In order to register a block variation, go to **src/Blocks/variations**, add a new folder, and let's call it `card-resource`. Inside that folder, all you need to do is add a `manifest.json` file. It is also recommended to add a `docs` folder in which you can add a readme file and storybook file.

Inside your `manifest.json` file, add the attributes to define the new default attributes for this variation. Here is an example:

```json
{
	"$schema": "https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/schemas/variation.json",
	"parentName": "card",
	"name": "card-resource",
	"title": "Card Resource",
	"description" : "Card variation without image and paragraph",
	"icon": {
		"src": "es-card"
	},
	"attributes": {
		"cardCardImageUse": false,
		"cardCardParagraphUse": false,
		"cardCardHeadingSize": "regular",
		"cardCardButtonColor": "blue"
	},
	"scope": [
		"inserter"
	]
}
```

After adding this code, your new block variation should now be visible in the block list. It's that easy!

![Variation of the Card block](/img/blog/card-resource.webp)

## Providing inner block data
Other than overriding default attributes with variations, you can do much more with Eightshift Development kit. If you have a block that uses inner blocks, you can even provide inner block data.

The following example is very basic, but it will give you an idea of how to provide inner block data. It can easily be reproduced with our `Carousel` block if you want to try it yourself.

:::note
If you don't have Carousel block in your project yet, you can add it with the following WP-CLI command: `wp boilerplate blocks use-block --name="carousel"`
:::

Once you have the `Carousel` block up and running, create a variation called `Carousel Loop`. For this variation, we want the following:
- loop
- pagination
- two images per slide

We will also add some placeholder images so you can immediately test the Carousel block variation. Here is the code you can add to the `manifest.json` file for that variation.
```json
{
	"$schema": "https://raw.githubusercontent.com/infinum/eightshift-frontend-libs/develop/schemas/variation.json",
	"parentName": "carousel",
	"name": "carousel-loop",
	"title": "Carousel Loop",
	"description" : "Carousel block variation with loop and pagination enabled, along with multiple image blocks with placeholders. Displays two images per slide.",
	"icon": {
		"src": "es-card"
	},
	"attributes": {
		"carouselIsLoop": true,
		"carouselShowPagination": true,
		"carouselShowItems": 2
	},
	"innerBlocks": [
		{
			"name": "eightshift-boilerplate/image",
			"attributes": {
				"imageImageFull":true,
				"imageImageUrl": "https://loremflickr.com/400/400"
			}
		},
		{
			"name": "eightshift-boilerplate/image",
			"attributes": {
				"imageImageFull":true,
				"imageImageUrl": "https://loremflickr.com/400/400"
			}
		},
		{
			"name": "eightshift-boilerplate/image",
			"attributes": {
				"imageImageFull":true,
				"imageImageUrl": "https://loremflickr.com/400/400"
			}
		},
		{
			"name": "eightshift-boilerplate/image",
			"attributes": {
				"imageImageFull":true,
				"imageImageUrl": "https://loremflickr.com/400/400"
			}
		}
	],
	"scope": [
		"inserter"
	]
}
```

After adding this code, you should see the `Carousel Loop` variation in your block list. After adding it in the editor, the `Carousel` attributes will be already set to the ones you provided, as well as two images that are added as inner blocks.

![Block list with variations](/img/blog/block-list-variations.webp)
