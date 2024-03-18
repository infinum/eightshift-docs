---
id: blocks-structure-block-item
title: Block Structure Item
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/custom/example)

For the library to work and register blocks dynamically, a specific folder structure and naming must be followed. Individual blocks are placed in the `custom` folder.

Your custom block structure should look like this:

```shell
|____block-name
| |____components
| | |____block-name-editor.js
| | |____block-name-options.js
| | |____block-name-toolbar.js
| |____block-name-block.js
| |____block-name.php
| |____block-name-editor.scss
| |____block-name-style.scss
| |____manifest.json
```

### components
Components folder holds three files `block-name-options.js`, `block-name-editor.js` and `block-name-toolbars.js`. Each of these files represents a part of the Block Editor block that is used in the editor. We have separated options, editor and toolbar in separate components for the sake of readability and reusing components in different projects.

### block-name-block.js
This file represents the `edit` callback method used in WordPress `registerBlockType` method.
We are not using the `save` callback component because this library is used to create dynamic blocks. The `edit` method describes how your block will be rendered in the editor once the block is used.

### block-name.php
This file will pass the properties you've set in the `block-name.js` and use the `render_block_view()` method from the [eightshift libs](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php#L295). It is used to provide front-end layout for your block.

### block-name-editor.scss
Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any columns layout like a grid, flex, etc., you may need to add some corrections.

Corrections in the columns layout are necessary because Block Editor editor adds its additional HTML and you can't change it.
_This file is optional_.

### block-name-style.scss
Holds all the front-end and editor styling for the component. Like the above file, in most cases, it can be avoided.
_This file is optional_.

### manifest.json
This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block.

It looks like this:

```json
{
  "blockName": "button",
  "title": "Button",
  "description" : "Button block with custom settings.",
  "category": "eightshift",
  "icon": {
    "src": "editor-removeformatting"
  },
  "keywords": [
    "button",
    "btn",
    "link"
  ],
  "attributes": {
    "title": {
      "type": "string"
    }
  }
}
```

For manifest.json details please check this [link](blocks-structure-manifest.md).
