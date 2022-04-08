---
title: Adding fonts
description: An intro to adding fonts to your project.
slug: adding-fonts
authors: iobrado
date: 2022-04-12
tags: [eightshift, boilerplate, fonts]
hide_table_of_contents: false
---

Each project is different in its way. Logo, various fonts, etc. are what define the visual identity of your website. In this post, we'll cover adding fonts to a project.
<!--truncate-->

### Importing fonts into your project
[Our documentation](/docs/basics/fonts) covers the required steps to add a font to your project, but here we'll cover the process in a bit more detail. To even start, we need a font (or two). For this example, I'll use **_SourceSansPro_** and **_NotoSerif_** downloaded from [Google Fonts](https://fonts.google.com/). These are in `.ttf` format, so convert them to `.woff` and `.woff2` however you can. We recommend the following tools:
- https://convertio.co/ttf-woff/
- https://cloudconvert.com/ttf-to-woff
- https://everythingfonts.com/ttf-to-woff

Fonts should go inside the **_/assets/fonts_** folder inside your theme. Paste the fonts you want to use there. You will also notice that this folder contains an **_index.js_** file. This file is used to import fonts into your project. Here's an example of how I imported my fonts:
```js
// SourceSansPro WOFF
import './SourceSansPro-Bold.woff';
import './SourceSansPro-BoldItalic.woff';
import './SourceSansPro-Italic.woff';
import './SourceSansPro-Regular.woff';
import './SourceSansPro-Light.woff';
import './SourceSansPro-LightItalic.woff';

// SourceSansPro WOFF2
import './SourceSansPro-Bold.woff2';
import './SourceSansPro-BoldItalic.woff2';
import './SourceSansPro-Italic.woff2';
import './SourceSansPro-Regular.woff2';
import './SourceSansPro-Light.woff2';
import './SourceSansPro-LightItalic.woff2';

// NotoSerif WOFF
import './NotoSerif-Bold.woff';
import './NotoSerif-BoldItalic.woff';
import './NotoSerif-Italic.woff';
import './NotoSerif-Regular.woff';

// NotoSerif WOFF2
import './NotoSerif-Bold.woff2';
import './NotoSerif-BoldItalic.woff2';
import './NotoSerif-Italic.woff2';
import './NotoSerif-Regular.woff2';
```

To add these fonts as your base font and secondary font, go to the global manifest located in **_/src/Blocks_** and add the following inside `globalVariables`:
```json
"globalVariables": {
	//...
	"baseFont": "SourceSansPro",
	"secondaryFont": "NotoSerif",
	//...
}
```

Next, you can create a new file called **__typography.scss_** inside your **_/assets/styles/parts/utils/_** folder and add the following:

```scss
@include font-face(global-settings(baseFont), 'SourceSansPro-Light', 300);
@include font-face(global-settings(baseFont), 'SourceSansPro-LightItalic', 300, italic);
@include font-face(global-settings(baseFont), 'SourceSansPro-Regular', 400);
@include font-face(global-settings(baseFont), 'SourceSansPro-Italic', 400, italic);
@include font-face(global-settings(baseFont), 'SourceSansPro-Bold', 700);
@include font-face(global-settings(baseFont), 'SourceSansPro-BoldItalic', 700, italic);

@include font-face(global-settings(secondaryFont), 'NotoSerif-Bold', 700);
@include font-face(global-settings(secondaryFont), 'NotoSerif-BoldItalic', 700, italic);
@include font-face(global-settings(secondaryFont), 'NotoSerif-Italic', 400, italic);
@include font-face(global-settings(secondaryFont), 'NotoSerif-Regular', 400);
```

Because this is a new file, we have to include it. You can do that inside **_/assets/styles/parts/_shared.scss_** file:
```scss
// Project specific.
@import 'utils/shared-variables';
@import 'utils/typography';
```

Run `npm start` to rebuild your **_public_** folder and assets. If you did everything correctly, your build should pass and you will see your fonts inside the **_public_** folder.

### Using only one font in a block

There are multiple ways of using fonts in a block. The simplest example is if you have only one font you want to use for that specific block. In this case, we want Heading Block to only use NotoSerif.

To make our secondary font available for use, first we need to define it as a variable. We can do that in **_/assets/styles/parts/utils/_shared-variables.scss_**. Here we can see that the base font is already defined, so all we need to do is add our secondary font below.

To make things a bit more complicated, we may also want to rename `--global-font-family` CSS variable to `--base-font-family`. Just don't forget to search/replace this new variable name across your project! Once we're done, it should look like this:
```scss
	--base-font-family: var(--global-base-font), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
		Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

	--secondary-font-family: var(--global-secondary-font), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
		Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
```
After defining `--secondary-font-family` CSS variable, we can go to **_/src/Blocks/components/heading/heading-style.scss_** and add the following line inside `.heading` class:
```scss
	font-family: var(--secondary-font-family);
```

And that's it! The Heading Block will now use the NotoSerif font.

### Adding an option for selecting fonts

In some cases, you may want to give users the option to choose between fonts that they want to use in their block. For this example, we'll use the `paragraph` block where we want users to have both SourceSansPro and NotoSerif font available.

First step is to add a new attribute, options and CSS variable values in **_/src/Blocks/components/paragraph/manifest.json_**:
```json
//...
	"attributes": {
		//...
		"paragraphFontFamily": {
			"type": "string",
			"default": "base"
		}
	},
	"options": {
		//...
		"paragraphFontFamily": [
			{
				"label": "SourceSansPro",
				"value": "base"
			},
			{
				"label": "NotoSerif",
				"value": "secondary"
			}
		],
		//...
	}
```

After defining a new attribute and options, we now have to add a variable to **_manifest.json_**. We can add it inside `variables`. This approach is slightly different from the one explained in [Modifying blocks](/blog/modifying-blocks) blog post. Here we can use `%value%` wildcard to dynamically add the selected value to our CSS variable.
```json
"paragraphFontFamily": [
	{
		"variable": {
			"paragraph-font-family": "var(--%value%-font-family)"
		}
	}
]
```

The next step is to go to **_/src/Blocks/components/paragraph/components/paragraph-options.js_** and add the new option for selecting fonts. The first thing we can add is a new attribute that will allow us to toggle showing the paragraph font family option on other blocks which are using the paragraph. There may be a case where we want only one font family, so this option may come in handy on some other blocks.
```js
const {
		setAttributes,
		//...
		showParagraphFontFamily = true,
	} = attributes;
```

After that, we need to fetch either the saved attribute value or get the default one from the manifest. We can do that with `checkAttr` helper and add it just below `paragraphColor` and `paragraphSize`.
```js
	const paragraphFontFamily = checkAttr('paragraphFontFamily', attributes, manifest);
```

Now we have to add an actual option to the return statement which will allow us to choose between fonts.
```js
	return (
		//...
		{showParagraphFontFamily &&
			<CustomSelect
				label={<IconLabel icon={icons.fontFamily} label={__('Font Family', 'eightshift-theme')} />}
				value={paragraphFontFamily}
				options={getOption('paragraphFontFamily', attributes, manifest)}
				onChange={(value) => setAttributes({ [getAttrKey('paragraphFontFamily', attributes, manifest)]: value })}
				isClearable={false}
				isSearchable={false}
				simpleValue
			/>
		}
		//...
	);
```

The option for selecting a font should now be available under Paragraph options. Saving the option now works, but the font stays the same both in the editor and on the frontend. The final step we need to make this work is to add a CSS variable to **_/src/Blocks/components/paragraph/paragraph-style.scss_**:
```scss
.paragraph {
	//...
	font-family: var(--paragraph-font-family, var(--base-font-family));
	//...
}
```

After adding this single line of CSS code, your new option for selecting fonts will now be fully functional.

### Closing thoughts
Adding fonts to a project is something you will usually do only when setting up a new project and then forget about it. As you could see in this blog post, this isn't a complicated process, but it has a specific set of steps that have to be taken to make custom fonts work in your project.

Of course, there are other ways to include fonts in your project, but the described process is the recommended one and is used by our team. This is the (Eightshift) Way.
