---
id: block-structure
title: Block Structure
sidebar_label: Block Structure
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Your custom blocks are placed in the `src/Blocks/custom` folder.

For example, let's take the heading block (just replace `heading` with your block name).

We suggest you always use the full name and never abbreviate for the block name. If your block has multiple words, you should separate them by a dash, for example, `featured-post-block.js`.

**Block structure should look like this:**

* heading
  * assets
    * index.js
  * components
    * heading-editor.js
    * heading-options.js
    * heading-toolbar.js
  * heading-block.js
  * heading.php
  * heading-editor.scss
  * heading-style.scss
  * heading-hooks.js
  * heading-transforms.js
  * manifest.json

### assets

In this folder, you define all the custom JavaScript functionality for your block that will only be used on the front end of the application. You must provide the `index.js` file in this folder, and the rest is up to you. We recommend using [JavaScript dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) for all your frontend scripts. This ensures that the JavaScript is only loaded in the application when it is used and not before. By using dynamic import, you optimize your application and make it load faster.

### components
Components folder holds three files `heading-options.js`, `heading-editor.js`, and `heading-toolbars.js`. Each of these files represents a part of the Block Editor block that is used in the editor. We have separated options, editor, and toolbar into separate components for readability and reusing components in different projects.

### heading-block.js
This file represents the `edit` callback method used in WordPress `registerBlockType` method.
We are not using the `save` callback method because it is used to create dynamic blocks. The `edit` method describes how your block will be rendered in the editor once the block is used. In this file, you can define more advanced stuff like hooks and all block top-level features.

You load blocks components here in a specific layout:

- `heading-options.js` - must be wrapped with the `InspectorControls` component from the core. This will ensure that options are shown in the proper place in the Block Editor (sidebar).
- `heading-toolbar.js` - must be wrapped with the `BlockControls` component from the core. This will ensure that toolbar is shown in the proper place in the Block Editor (floating or fixed toolbar).
- `heading-editor.js` - must **not** be wrapped with any top-level component. This will ensure that the editor component is showed in the proper place in the Block Editor (editor).


### heading.php
This file is and frontend representation of a block. In this file, you will have all attributes that you defined in the `manifest.json` file.

In the blocks PHP part, you always have two props available:

- `$attributes` - This prop contains all the attributes you defined in the `manifest.json` and all the attributes saved in the database.
- `$innerBlockContent` - This prop contains all the inner block details when you set your block to contain inner blocks.

### heading-editor.scss
Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any column layout like a grid, flex, etc., you may need to add some corrections.

Corrections in the grid layout are necessary because the Block Editor adds its additional HTML and can't change it.

Please reference in [writing styles](writing-styles) chapter for more details.

_This file is optional_.

### heading-style.scss
Holds all the frontend and editor styling for the component.

Please reference in [writing styles](writing-styles) chapter for more details.

_This file is optional_.

### manifest.json
This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block.

For more details, check the [block manifest](block-manifest) chapter
