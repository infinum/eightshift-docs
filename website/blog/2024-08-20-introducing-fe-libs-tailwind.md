---
title: Introducing - Frontend Libs Tailwind
description: Explaining the idea behind switching to Tailwind, our first impressions and some examples.
slug: introducing-fe-libs-tailwind
authors: obradovic
date: 2024-08-20
tags: [eightshift, tailwind]
hide_table_of_contents: false
---

It’s been quite a lot of changes with Eightshift DevKit over the last few months, but switching to Tailwind for our Frontend Libs is by far the most significant one.
<!--truncate-->

## Why Tailwind?

We wanted to speed up the development time and make the projects easier to maintain. Another reason is to make the projects lighter and faster. Our previous setup was quite powerful, but there were a few projects where we almost reached the limit of the system.

We decided to create a version of Frontend Libs that uses Tailwind instead of SCSS and to try it out on a few of our new projects and then decide whether to continue using it or to go back to standard Frontend Libs for our default setup. What were the benefits and our initial impressions?

## Benefits of the new setup

Here are the stats after testing the setup:

- sites are **5x** times faster on the frontend and **3x** times faster on the backend.
- load time is absolutely **minimal**
- **50%** fewer DOM elements
- build time is **10x+** times faster.
- final bundle sizes for JS and CSS are **3x** smaller.

Additional benefit is that there are a lot of Tailwind community sites with ready-made components, which allow you to copy the component and modify it.

## Initial impressions from the team

_“The project I’m working on is the first one where we started using FE Libs Tailwind. To be honest, I was quite worried about working on a new project with this setup, as the estimate was a bit lower than what we usually estimate._

_After a few initial hiccups with the setup, I found it was much easier to work with and it offered a lot of possibilities. I was really surprised how easy it was to set up the default values like font sizes and colors._

_Using Tailwind classes speeded up development process quite significantly and I managed to implement all blocks from the initial design phase one week before the deadline.”_

## Requirements and how to install it

FE Libs Tailwind requires at least **PHP 8.3**. To install it, run the following command in your project folder:

```json
npx eightshift-create theme
```

The project setup script is now also upgraded and it offers a choice between standard FE Libs and FE Libs Tailwind. If you choose *simple setup*, it installs FE Libs Tailwind.

## Project structure

The project structure is quite similar to the standard Eightshift setup, but there are a few things to take note of.

`tailwind.config.mjs` is the main config file for Tailwind where you define the colors, breakpoints, font sizes and all custom CSS classes you need to use in your project.

When looking at the component or block structure, you may notice that most of them no longer have CSS files. As Tailwind offers lots of utility classes, in most cases you won’t need a CSS file for your component or a block. In case you need it, simply add `styles.css` or `styles-editor.css`. Notice how it’s no longer required to prefix the block/component name before the name of the CSS file.

Tailwind classes are added in the `manifest.json` file of your block, but more on that in the next section.

You will also notice that this setup uses **Eightshift UI Components** for rendering the options in the editor. We decided to decouple Eightshift UI Components from our setup to make maintenance easier. If you would like to know more, please check the [Eightshift UI Components documentation](https://eightshift.com/components/es-ui-components/getting-started).

## How to use Tailwind classes

In `manifest.json` file, you’ll notice there’s a new key called `“Tailwind”`.  This supports the following keys:

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

## What happens to standard Frontend Libs?

Good question, I’ll let Goc answer that one 😂
