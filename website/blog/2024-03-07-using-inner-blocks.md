---
title: Using inner blocks
description: Various tips and useful features for your project included in Eightshift DevKit.
slug: using-inner-blocks
authors: obradovic
date: 2024-03-07
tags: [eightshift, boilerplate, inner blocks]
hide_table_of_contents: false
---

InnerBlocks in WordPress enable the creation of nested block structures within the Gutenberg editor, allowing for the development of more complex and customizable content layouts.
<!--truncate-->

## Why use inner blocks?

Use of inner blocks allows for more flexibility when building content. Let’s say you’re building a simple two-column layout with image on one side and content on the other side. You can define the components that will be used (e.g. header, paragraph, list, button) and then just toggle the ones you don’t need.

This approach works perfectly fine when you have a strict layout and don’t want larger content structure variations. Using inner blocks may introduce a bit more complexity - both for developers and content editors, but ultimately gives the editors much more freedom.

Another example where inner blocks are used is the Carousel block. Using inner blocks allows you to add as many slides as you like in your carousel. Let’s not forget about Columns and Group blocks. These also use inner blocks.

## Adding inner block support

The example used in this blog post is a two-column Card that was made for one project. First thing that needs to be updated is the ***manifest.json*** file. For the sake of simplicity and not having too much code, the parts that aren’t related to the inner blocks have been removed.

```json
{
	"hasInnerBlocks": true,
	"innerBlocksDependency": [
		"heading",
		"paragraph"
	],
	"attributes": {
		"cardTwoColumnAllowedBlocks": {
			"type": "array",
			"items": {
				"type": "string"
			},
			"default": [
				"eightshift-boilerplate/paragraph",
				"eightshift-boilerplate/heading",
				"eightshift-boilerplate/button",
				"eightshift-boilerplate/lists"
			]
		}
	}
}
```

The `hasInnerBlocks` key defines that this block supports inner blocks. The `innerBlocksDependency` is not mandatory, but it can be used to add inner blocks automatically. You can see an example of using it in the Columns block `editor.js` file.

In case we need to limit the use of inner blocks, we can do so by defining the allowed blocks inside attributes. The attribute name should be in the format `{blockName}AllowedBlocks`. To define the allowed blocks, simply add the full block names in the `default` key array, as shown in the example.

The next step is to add inner block support to the `{block-name}-editor.js` file. Here’s an example of the code related only to the inner blocks:

```jsx
import { InnerBlocks } from '@wordpress/block-editor';
import { BlockInserter } from '@eightshift/frontend-libs/scripts';

export const CardTwoColumnEditor = ({ attributes, setAttributes, clientId }) => {

	const {
		cardTwoColumnAllowedBlocks,
	} = attributes;

	return (

		<div className={contentClass}>
			<InnerBlocks
				allowedBlocks={(typeof cardTwoColumnAllowedBlocks === 'undefined') || cardTwoColumnAllowedBlocks}
				orientation='vertical'
				renderAppender={() => <BlockInserter clientId={clientId} hasLabel additionalClasses='es-mb-6' />}
			/>
		</div>

	);
};
```

The `InnerBlocks` element is the default one from the Gutenberg editor. In order to limit the allowed blocks, we need to pass the attribute that contains the list of allowed inner blocks. The `orientation` prop determines if the inner blocks will be displayed horizontally or vertically in the editor.

For the `renderAppender` prop, a custom `BlockInserter` element is used. This is a replacement for the default Gutenberg inserter, whose styling can vary between WP versions.

Finally, to render the inner blocks in PHP, you need to add the following:

```php
<?php
// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
echo $innerBlockContent;
?>
```

And that’s it! Your block now supports inner blocks.

## Overriding inner block attributes

Inner blocks behave like regular blocks, which means they also have a wrapper by default. This may not always be desired and manually removing wrapper or adding custom wrapper settings on each inner block can be tedious. That’s why Eightshift DevKit offers few helpers that allow you to override inner block attributes.

Both of these helpers go to your `{block-name}-block.js` file.

### overrideInnerBlockAttributes

This helper allows you to set the attributes on all inner blocks by passing them as a third parameter. The example below shows how to disable the wrapper and hide wrapper controls.

```jsx
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts';

export const Accordion = (props) => {
	// Set these attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			props.clientId,
			{
				wrapperUse: false,
				wrapperNoControls: true,
			},
		);
	});

	return (
		// ...
	);
};
```

Keep in mind this helper allows you to set any attribute that the inner block supports, so you can even set a larger paragraph size and a different color, for example.

### overrideInnerBlockSimpleWrapperAttributes

The `overrideInnerBlockSimpleWrapperAttributes` sets up a simple wrapper to all inner blocks. This is similar to the helper method above, but already has predefined attributes for simple wrapper, so if you only want to set up simple wrapper, you don’t have to add the attributes manually.

```jsx

import { useSelect } from '@wordpress/data';
import { overrideInnerBlockSimpleWrapperAttributes } from '@eightshift/frontend-libs/scripts';

export const CardTwoColumn = (props) => {
	const {
		clientId,
	} = props;

	// Set these attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockSimpleWrapperAttributes(select, clientId);
	});

	return (
		// ...
	);
};
```

## Conclusion

The best way to understand how inner blocks work is to try to build your own block that supports inner blocks and try out various options and see what kind of results you’ll get. If you ever get stuck, you can refer to official Eightshift DevKit documentation or check the blocks that already have inner blocks support. These blocks are:

- accordion and accordion item
- columns and column
- carousel
- group
