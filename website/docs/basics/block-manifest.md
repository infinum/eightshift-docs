---
id: block-manifest
title: Block Manifest
sidebar_label: Block Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)


This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block. Using `manifest.json`, we can provide a configuration in JavaScript and PHP part of the block in one file.

### Example

```json
{
  "namespace": "custom-namespace",
  "blockName": "heading",
  "title": "Heading",
  "description": "Heading block with custom settings.",
  "category": "common",
  "icon": {
    "background": "#900",
    "foreground": "#500",
    "src": "heading"
  },
  "keywords": [
    "Header",
    "Title"
  ],
  "example": {
    "attributes": {
      "content": "New content",
      "level": 2
    }
  },
  "attributes": {
    "content": {
      "type": "string"
    },
    "level": {
      "type": "number",
      "default": 2
    }
  }
}
```

Most of the keys are the same as the `registerBlockType` method, so if you can't find the description here, please check the [official documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/), but we also have some custom features here:

### namespace

*native feature*

The block's namespace is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need so.

### icon.background & icon.foreground

*native feature*

The icon background and foreground is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need so.

### example

*native feature*

This key provides you the ability to give an example mockup of your attributes. Then you try to add a block to the editor, you will have a preview image on the right. This is the place where this key is used. We also use it in the storybook to mock attributes. More on this in the [storybook chapter](blocks-storybook)

### attributes
Attributes key is an object of attributes that you define and set up default values for a block. These attributes are then provided for you in the editor as props, and the PHP view part in the `$attributes` variable.
We are using the same structure as described in [Block Editor documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/).

### hasInnerBlocks
`default: false`

*custom feature*

If the `hasInnerBlocks` key is set to true, blocks `save` method for inner blocks will be used. This method is used if the block has [`InnerBlocks`](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks). In PHP you now have `$inner_block_content` variable available. Here is an example of what happens in the back: 

```js
  save = () => createElement(InnerBlocks.Content);
```

### components

*custom feature*

This key gives you the ability to use component attributes in your block without mapping all the components attributes every time. Please check [this chapter](blocks-component-in-block) for more details.
