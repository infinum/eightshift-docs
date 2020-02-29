---
id: blocks-structure-manifest
title: Manifest Structure
---

This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block. Using `manifest.json` we can provide a configuration in JavaScript and PHP part of the block in one file.

### Example

```json
{
  "blockName": "heading",
  "title": "Heading",
  "description" : "Heading block with custom settings.",
  "category": "common",
  "icon": {
    "src": "heading"
  },
  "keywords": [
    "Header",
    "Title"
  ],
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

Most of the keys are the same as `registerBlockType` method, but we also have some custom attributes here:

### attributes
Attributes key is an object of attributes that you define and where you set up default values for a block. These attributes are then provided for you in the editor as props, and the PHP view part in the `$attributes` variable.
We are using the same structure as described in [Block Editor documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/).

### hasInnerBlocks
`default: false`

If the `hasInnerBlocks` key is set to true, blocks `save` method for inner blocks will be used. This method is used if the block has [`InnerBlocks`](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks). In PHP you now have `$inner_block_content` variable available. Here is an example of what happens in the back: 

```js
  save = () => createElement(InnerBlocks.Content);
```

### hasWrapper
`default: true`

If the `hasWrapper` key is set to false, blocks PHP render method will not be passed to the wrapper component.
