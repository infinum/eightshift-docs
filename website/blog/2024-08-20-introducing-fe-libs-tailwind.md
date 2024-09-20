---
title: Introducing - Frontend Libs Tailwind
description: Explaining the idea behind switching to Tailwind, our first impressions and some examples.
slug: introducing-fe-libs-tailwind
authors: obradovic
date: 2024-08-20
tags: [eightshift, tailwind]
hide_table_of_contents: false
---

There have been quite a lot of changes to Eightshift DevKit over the last couple of months, but switching to Tailwind for our Frontend Libs is by far the most significant one.
<!--truncate-->

## Why Tailwind?

The main ideas driving the change were ease and speed of development, better maintainability, and easier onboarding. Speed and how _heavy_ the output was were also important things. The setup we used was pretty powerful and flexible, but reached its limits above a certain threshold.

We decided to give Tailwind a try! After a quick proof of concept, a more elaborate setup was created. Legacy parts like SCSS were taken out, and a couple of new functions and helpers were added. After the setup was mostly done, a whole new set of blocks was created to be used as the default.

It was time to test everything on a real project, to collect some insights and feedback in order to polish and improve the setup even more. What were the benefits that we found and our initial impressions? Read on!

## Benefits of the new setup

Here are the stats after testing the setup:

- sites are **~5x** faster on the frontend and **~3x** faster on the backend.
- load time is absolutely **minimal**
- there are **~50%** fewer DOM elements in the default set of blocks
- build time is more than **10x** faster.
- final bundle sizes for JS and CSS are **~3x** smaller.

Also, since Tailwind is so popular, there are many sites with ready-made components that developers and designers can use as a base.

## Initial impressions from the team

_“The project I’m working on is the first one where we started using FE Libs Tailwind. To be honest, I was quite worried about working on a new project with this setup, as the estimate was a bit lower than what we usually estimate._

_After a few initial hiccups with the setup, I found it was much easier to work with and it offered a lot of possibilities. I was really surprised how easy it was to set up the default values like font sizes and colors._

_Using Tailwind classes speeded up development process quite significantly and I managed to implement all blocks from the initial design phase one week before the deadline.”_

## Requirements and how to install it

The setup requires at least **PHP 8.3**. To install it, run the following command in your project folder:

```json
npx eightshift-create theme
```

The project setup script was also upgraded, and it now offers a choice between standard and the Tailwind setup. If you choose the *simple* setup, it installs FE Libs Tailwind.

## Project structure

The project structure is quite similar to the standard Eightshift setup, but there are a few things to take note of.

`tailwind.config.mjs` is the main config file for Tailwind. There you define things like (project-specific) colors, font sizes, spacings, and any other Tailwind configuration options, or custom utilities you might need in your project. Breakpoints are still defined in the global manifest.

When looking at the component or block structure, you may notice that most of them no longer have stylesheets assigned. As Tailwind is utility class-based, in most cases you won’t need a CSS file for your component or a block.
Note that you can also provide one-time arbitrary values in Tailwind (check the docs for details) if needed. In case you need it, simply add `styles.css`, `styles-editor.css`, or `styles-frontend.css`. Notice how it’s no longer required to prefix the block/component name before the name of the CSS file.

Tailwind classes can be shared between the frontend and the backend if added in the `manifest.json` file of your block or component, but more on that in the next section. You can always just write classes in the markup if needed.

You will also notice that this setup uses **Eightshift UI components** for rendering the options in the editor. We decided to decouple UI components from the setup to make maintenance easier. If you would like to know more, please check the [Eightshift UI components documentation](https://eightshift.com/components/es-ui-components/getting-started).

## How to use Tailwind classes

In `manifest.json` file, you’ll notice there’s a new `“Tailwind”` configuration object.  This supports the following entries:

- **base** - the base list of classes added to the primary part of the block, e.g. the one that is the most affected by the options
- **options** - defines additional classes to be added to the **base** (or **parts**) classes if a condition is met
- **parts** - classes for parts of the block that may or may not be affected by the options
- **combinations** - the most complex cases where combinations of multiple attributes are taken into consideration, e.g. *secondary* button variant and *red* color. These are added to the **base** class only.

Here is an example of the Tailwind classes defined for a paragraph:

```json
"tailwind": {
		"base": {
			"twClasses": "font-sans [&>a]:underline font-synthesis-none"
		},
		"options": {
			"paragraphSize": {
				"twClasses": {
					"xs": "text-xs lg:text-sm leading-tight",
					"sm": "text-tiny lg:text-md leading-tight",
					"base": "text-base leading-normal",
					"md": "text-xl md:text-2xl leading-normal",
					"lg": "text-3xl md:text-4xl lg:text-5xl leading-normal"
				}
			}
		}
	}
```

Depending on the selected paragraph size, the classes from the **options** are added to the **base** class. If the *sm* size is selected, the output of the classes will be `font-sans [&>a]:underline font-synthesis-none text-tiny lg:text-md leading-tight`

Here’s how the combinations are defined:

```json
"combinations": [
	{
		"attributes": {
			"buttonVariant": [
				"primary",
				"secondary"
			]
		},
		"twClasses": "border [&>svg]:size-5 gap-2 py-2 rounded-full"
	},
	{
		"attributes": {
			"buttonColor": "red-700",
			"buttonVariant": "primary"
		},
		"twClasses": "text-white bg-red-700 border-red-700 hover:bg-red-800 hover:border-red-800 disabled:bg-gray-300 disabled:border-gray-300 focus-visible:ring-red-500/30"
	},
]
```

The example above shows two cases. If a button variant is *primary* or *secondary*, the classes will be added to the **base** class. The second group of classes will be added only to a *primary* button variant that has a *red-700* color defined.

Lastly, to apply the options to a specific part, instead of base classes, you can define it like this:

```json
"options": {
	"singleBannerSpacing": {
		"twClasses": {
			"sm": "mt-7 md:mt-9 lg:mt-10",
			"md": "mt-10 md:mt-14 lg:mt-20"
		},
		"part": "content"
	}
}
```

Notice the additional “part” key after the classes that defines to which Tailwind **parts** classes this applies to.

If you want to define classes specific to editor, you can also add `“twClassesEditor”` key. Please note that these completely override the `“twClasses”` in the editor.

To output these classes, you can use the following helper methods:

- `getTwClasses` - adds all classes from **base**, **options** and **combinations** (if the conditions for **options** and **combinations** are matched)
- `getTwPart` - gets classes from the **parts** group
- `getTwDynamicPart` - gets classes from the **parts** group and also checks if any of the options is defined to be used for a specific part.

These methods are supported in both PHP and JS.

Each of these methods also support additional classes after the `$manifest` parameter, meaning you can add more classes along the ones passed from the manifest. This can be useful if you need a class that is specific to the frontend view or the editor view.

Here are a few examples of using these methods in PHP:

```php
Helpers::getTwClasses($attributes, $manifest, $additionalClass);

Helpers::getTwPart('button', $manifest);

Helpers::getTwDynamicPart('icon', $attributes, $manifest);
```

These are fairly simple examples, but if you would like to know how it works in more detail, please check the [FE Libs Tailwind documentation](https://eightshift.com/docs/tailwind/intro).

## Making classes more readable in the manifest

When looking at these examples, you may think that a list of Tailwind classes can get really long and hard to read. And you're right. That's why we've added an option to also define classes as an array of strings. Here's an example:

```json
"base": {
	"twClasses": [
		"flex items-center justify-between md:justify-start gap-8",
		"max-w-screen-lg h-full",
		"mx-auto px-4 md:px-8 lg:px-12",
		"relative",
	],
},
```
This approach not only makes the classes more readable, but also allows you to group them. In the example above, the first group of classes is related to the layout, the second group is related to the width and height, the third group is related to margins and padding, and the last group is related to the positioning.

## New Theme Options page and post meta
Previous versions of Eightshift DevKit relied on ACF for adding a Theme Options page. The new FE Libs Tailwind comes with a custom Theme Options page, that is built using the Eightshift UI Components.

By default, the Theme Options allow you to set header, footer and a 404 page. These are all built as patterns and then assigned via the Theme Options. If you would like to see how it works in more detail, check the `src/ThemeOptions` folder and the `src/Blocks/components/admin-theme-options` folder.

With this new approach, it's also possible to add custom fields on various post types, but that will be covered in a separate blog post.

## What happens to standard Frontend Libs?

It won't be actively developed anymore, but it will stay supported for all the projects using it.
