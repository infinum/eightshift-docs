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

This approach works perfectly fine when you have a strict layout and don’t need larger content structure variations. Using inner blocks may introduce a bit more complexity - both for developers and content editors, but ultimately gives the editors much more freedom.

Another example where inner blocks are used is the Carousel block. Using inner blocks allows you to add as many slides as you'd like in your carousel. Let’s not forget about Columns and Group blocks. These also use inner blocks.

## Adding inner block support

The example used in this blog post is a two-column Card that was made for a project. First thing that needs to be updated is the ***manifest.json*** file. For the sake of simplicity and not having too much code, the parts that aren’t related to the inner blocks have been removed.

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

The `hasInnerBlocks` key defines that this block supports inner blocks. The `innerBlocksDependency` is generally used to output block dependencies when adding a block via CLI, but it can also be used to add inner blocks automatically. You can see an example of using it in the Columns block `editor.js` file.

In case we need to limit which blocks can be added inside inner blocks, we can do so with an attribute. Usually, the attribute is named `{blockName}AllowedBlocks`. Set the default value as an array of strings that represent block names you want to allow.

Please note that the block names must include the block namespace! (`eightshift-boilerplate` by default, check in Global manifest)

Now you need to pass the allowed blocks attribute into the `InnerBlocks` component In the `{block-name}-editor.js` file. Here’s an example of the code related only to the inner blocks:

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
				renderAppender={() => <BlockInserter clientId={clientId} />}
			/>
		</div>
	);
};
```

The `InnerBlocks` component comes from Gutenberg. In order to limit the allowed blocks, we need to pass the list of allowed inner blocks to the `allowedBlocks` attribute. If your inner blocks should be laid out horizontally in the editor, instead of vertically, you can pass `orientation='horizontal'`.

`renderAppender` prop allows passing a custom block insert button. Due to relatively frequent changes in Gutenberg, a custom `BlockInserter` element is available in Frontend libs as a replacement, and can be passed to `InnerBlocks`.

Finally, to render the inner blocks in PHP, you need to add the following:

```php
<?php
// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
echo $innerBlockContent;
?>
```

And that’s it! Your block now supports inner blocks.

:::note
A block can have only one set of inner blocks.
:::

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

### useBlockProps and useInnerBlocksProps

In case the default `InnerBlocks` limits your styling and/or layout options too much, you can opt into the newer block prop hooks to implement inner blocks as well!

Import the `useBlockProps` and `useInnerBlocksProps` hooks, configure them just like regular InnerBlocks, and spread the params into an element of your choice (`div` is recommended).

In code, it looks something like this:

```jsx
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export const DemoEditor = (props) => {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: demoAllowedBlocks,
		renderAppender: () => <BlockInserter clientId={clientId} />,
	});

	return (
		<div {...innerBlocksProps} /> // Do whatever you want with this.
	);
};
```

## Conclusion

The best way to understand how inner blocks work is to try to build your own block that supports inner blocks and try out various options and see what kind of results you’ll get. If you ever get stuck, you can refer to the official [Eightshift DevKit documentation](https://eightshift.com/docs/welcome) or check the blocks that already have inner blocks support. These blocks are:

- accordion
- accordion item
- columns
- column
- carousel
- group
