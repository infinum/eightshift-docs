---
id: helpers-javascript
title: JavaScript
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/)

All JavaScript helpers can be imported from the `@eightshift/frontend-libs/scripts` folder, so you don't need to think about the internal folder structure of Eightshift Frontend Libs. If you want multiple functions imported just concatenate them in the import like this:

```js
import {
	camelize,
	checkAttr,
	props,
	...
} from '@eightshift/frontend-libs/scripts';
```

# [Editor helpers](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/scripts/editor)

All of these helpers are generally only used in the Block Editor.

### icons

All UI icons.

### illustrations

Illustrations for helper modals.

### blockIcons

Block icons, primarily used in block manifests.

### getActions

Create attributes actions from blocks manifest.json.
This helper is deprecated and should not be used anymore.

### getOption

Provides ability to override component options from the parent block/component.

### getOptionColors

Use this hook to filter the global colors out of the component or block manifest.
This function is deprecated and getOption should be used.

### getOptions

Combines two objects of options, one from current component and the other from the parent component.

### getPaletteColors

Use this hook to read editor-color-palette colors directly from WP built in store.

### inserter

Development inserter made to insert one or multiple blocks in the dom using console.

### outputCssVariablesGlobal

Get Global manifest.json and return global variables as CSS variables.

### outputCssVariables

Get component/block options and process them in CSS variables.

### getUnique

Returns a unique ID generally used for css variables.

### overrideInnerBlockAttributes

Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block.

### overrideInnerBlockSimpleWrapperAttributes

Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block.

### pasteInto

Paste event handler.

### props

Output only attributes that are used in the component and remove everything else.

### getAttributes

Get Block attributes combined in one: "shared, global, wrapper, components, block".

### getExample

Get Block example attributes combined in one: "components and block".

### registerBlocks

Register all Block Editor blocks using WP `registerBlockType` method.

### registerVariations

Register all Variations Editor blocks using WP `registerBlockVariation` method.

### ucfirst

Convert the first letter of a string to uppercase.

# [General helpers](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/scripts/helpers)

These are all helpers generally used anywhere.

### camelize

Returns a camelCase-formatted string.

### checkAttr

Check if attribute exist in attributes list and add default value if not.

### checkAttrResponsive

Map and check attributes for responsive object.

### cookies

Helper to set and unset cookies.

### debounce

Debounces the provided function.

### devices

Detect a certain device, so specific functionality can be implemented for it.

### dynamicImport

Loop all paths required using require.context method.

### elementChildrenHeight

Returns height of the element measured by height of its children.

### escape-string

Takes the provided string and removes special characters

### navigator

The `Navigator.vibrate()` method pulses the vibration hardware on the device, if such hardware exists.

### responsiveSelectors

Create responsive selectors used for responsive attributes.

### selector

Returns BEM selector for HTML class and checks if the condition part is set.

### truncateMiddle

Slices the string and inputs the provided separator after the specified characters.

# [Plugins helpers](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/scripts/plugins)

These are all helpers generally only in specific plugins.

### yoastSeo

This helper will search all blocks and components manifests and find attributes that have "seo": "true" key.
This key will be added in to the content and proceed by the YoastSeo Analysis plugin.

# [Storybook helpers](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/scripts/storybook)

These are all helpers generally only in Storybook.

### blockDetails

Combine block details in one object.

### Gutenberg

Load actual Block Editor and all the magic.

### storybookDefaultMocksCategories

Manually populate categories for blocks. This is generated in the PHP part of the real project.

### storybookDefaultMocksColorPalette

Manually populate blocks color palette. This is generated in the PHP part of the real project.

### storybookWindowObjects,

Loading WP build files.

### storybookWpStyles

Loading styles for block editor.
