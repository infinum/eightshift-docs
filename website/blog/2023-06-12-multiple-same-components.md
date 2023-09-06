---
title: Using multiple same components
description: Explains how to use multiple same components inside
slug: multiple-same-components
authors: obradovic

date: 2023-06-12
tags: [eightshift, boilerplate, components, blocks]
hide_table_of_contents: false
---

From time to time, you may need to create a block or a more complex component that uses more than one instance of the same component. In this blog post, we'll explain how this works in a bit more detail.
<!--truncate-->

An example of this use case is the Card component, which uses two heading components. You may get the general idea by just going through the code and trying to reverse-engineer it, but this example will give you a much better understanding of how it works and how to use it. First, let's cover some basics.

## Manifest and attributes
The way multiple same components work is by having a different key. Here is an example of the Card component:

```json
"components": {
	"image": "image",
	"intro": "heading",
	"heading": "heading",
	"paragraph": "paragraph",
	"button": "button"
},
```
As you can see, one heading component has the `intro` key, while the other one has the `heading` key. That way the **intro** heading component is being referred to as `intro` so there is no mixup with the attribute values between the two heading blocks. This can be seen when setting the default attributes:

```json
"cardIntroSize": {
	"type": "string",
	"default": "tiny"
},
"cardHeadingSize": {
	"type": "string",
	"default": "big"
}
```

## The "props" Helper
This method does all the heavy lifting for us. It replaces the default attribute names with the ones we provide. There is both the PHP and JS version of it.

```php
Components::render('heading', Components::props('intro', $attributes, [
	'selectorClass' => 'intro',
	'blockClass' => $componentClass
]))
```

```js

<HeadingEditor
	{...props('intro', attributes, {
		selectorClass: 'intro',
		blockClass: componentClass,
	})}
/>

```

If you `var_dump` the props helper, you’ll notice the `prefix` key, which is built from the names of the blocks and components used hierarchically. For example, when looking at a regular Heading component in the Card block, the prefix will be:

`cardCardHeading` - first is the Card block name, then the Card component name and finally Heading component name.

The Heading component that is called Intro then has the prefix `cardCardIntro`. This prefix is then added to the attribute name, which then finally results in `cardCardHeadingSize` and `cardCardIntroSize` attributes, for example.

While at first glance it seems strange to have this naming scheme, it actually allows us to figure out the hierarchy just by looking at the attribute name.

## A step-by-step example

The block we'll be creating as an example will be a block which we can use for some sort of comparison or listing pros and cons. To create it, we will need the following:
- two `Heading` components
- two `List` components

The easiest way to create a new block is by using the boilerplate command

`wp boilerplate blocks use-block --name=example`

Once the new block is added to your project, rename it. Also, don’t forget to update all file names and imports in JS.

We should start with `manifest.json`, where we define the components we'll use and set the default attributes. For now, just define the components and their keys:

```json
"components": {
	"heading": "heading",
	"lists": "lists",
	"secondaryHeading": "heading",
	"secondaryLists": "lists"
}
```

The first section has the default key names, while the "duplicates" have different key names.

After manifest, we can move to the JS part. As this is a fairly simple block without any advanced options or layouts, we need to add two `HeadingEditor` components and two `ListsEditor` components. To make styling easier, we can separate them in two `div` elements. When you’re finished, your code should look like this:

```jsx
import React from 'react';
import { __ } from '@wordpress/i18n';
import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { ListsEditor } from '../../../components/lists/components/lists-editor';

import { props, selector } from '@eightshift/frontend-libs/scripts';

export const ComparisonEditor = ({ attributes, setAttributes }) => {
	const {
		blockClass,
	} = attributes;

	const comparisonPrimaryClass = selector(blockClass, blockClass, 'primary');

	const comparisonSecondaryClass = selector(blockClass, blockClass, 'secondary');

	return (
		<div className={blockClass}>
			<div className={comparisonPrimaryClass}>
				<HeadingEditor
					{...props('heading', attributes, {
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>

				<ListsEditor
					{...props('lists', attributes, {
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>
			</div>
			<div className={comparisonSecondaryClass}>
				<HeadingEditor
					{...props('secondaryHeading', attributes, {
						selectorClass: 'secondary-heading',
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>

				<ListsEditor
					{...props('secondaryLists', attributes, {
						selectorClass: 'secondary-lists',
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>
			</div>
		</div>
	);
};
```

Note how we defined the different names with the `props` helper. Additionally, we set the selector class for easier targeting of components when styling.

Next, we can add the options. Again, the `props` helper does all the heavy lifting for us. This is how the code should look after adding all component options:

```jsx
import React from 'react';
import { __ } from '@wordpress/i18n';
import { props, getOptions } from '@eightshift/frontend-libs/scripts';
import { HeadingOptions } from '../../../components/heading/components/heading-options';
import { ListsOptions } from '../../../components/lists/components/lists-options';
import { PanelBody } from '@wordpress/components';
import manifest from '../manifest.json';

export const ComparisonOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('Comparison', 'eightshift')}>
			<HeadingOptions
				{...props('heading', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest)
				})}
				reducedBottomSpacing
			/>

			<ListsOptions
				{...props('lists', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest)
				})}
				reducedBottomSpacing
			/>

			<HeadingOptions
				{...props('secondaryHeading', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest)
				})}
				label={__('Secondary Heading', 'eightshift')}
				reducedBottomSpacing
			/>

			<ListsOptions
				{...props('secondaryLists', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest)
				})}
				label={__('Secondary Lists', 'eightshift')}
				reducedBottomSpacing
			/>
		</PanelBody>
	);
};
```

Adding the PHP part should be simple, but here is the code for reference:

```php
<?php

/**
 * Template for the Comparison Block view.
 *
 * @package Eightshift
 */

use EightshiftVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';

$comparisonPrimaryClass = Components::selector($blockClass, $blockClass, 'primary');

$comparisonSecondaryClass = Components::selector($blockClass, $blockClass, 'secondary');

$unique = Components::getUnique();

?>

<div class="<?php echo esc_attr($blockClass); ?>">
	<?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); ?>
	<div class="<?php echo esc_attr($comparisonPrimaryClass); ?>">
		<?php
			echo Components::render('heading', Components::props('heading', $attributes)),
			Components::render('lists', Components::props('lists', $attributes));
		?>
	</div>
	<div class="<?php echo esc_attr($comparisonSecondaryClass); ?>">
		<?php
			echo Components::render('heading', Components::props('secondaryHeading', $attributes)),
			Components::render('lists', Components::props('secondaryLists', $attributes));
		?>
	</div>
</div>
```

The block should work properly now, but the two lists look the same. To make a difference between the two, we can change the default list colors in the manifest. If we don’t have the colors we want already available in the project, first we need to add them to the global manifest.

For a detailed explanation on how to add new colors to your project, you can read a previous blog post about [modifying blocks](/blog/modifying-blocks-color-theme#adding-new-colors-to-your-project).

Now we have to add these new colors to the Lists component `manifest.json`. In `options` key, find the `listsColor` and add your new colors.

When the new colors are added to the Lists component, we can set these new colors as defaults by adding the following attributes in `manifest.json` of our Comparison block:

```json
"comparisonListsColor": {
	"type": "string",
	"default": "green-haze"
},
"comparisonSecondaryListsColor": {
	"type": "string",
	"default": "milano-red"
}
```

The first list will now have green bullet points, and the second one will have red bullet points.

![Comparison block](/img/blog/comparison-block.webp)

Notice again how the attribute name is structured - current block name (**comparison**), component name (**Lists** or **SecondaryLists**), attribute (**Color**).

If you’re ever in doubt of what is the exact attribute name, you can always `var_dump` the `props` helper for that component and you will see the full attribute names as the keys.

```
Array
(
    [prefix] => comparisonSecondaryLists
    // ...
    [comparisonSecondaryListsOrdered] => ul
    [comparisonSecondaryListsSize] => body:regular
    [comparisonSecondaryListsColor] => milano-red
    [comparisonSecondaryListsColorOnlyMarker] =>
    [comparisonSecondaryListsUse] => 1
    // ...
)
```

### Conclusion

Although this was a simple example, we covered the most important things to have in mind when using multiple same components in a block. For additional practice, you can add some more attributes or go through some of our pre-made blocks which use multiple same components. Some components/blocks you can look into are `Card` and `Quote`.
