---
id: block-structure
title: Block Structure
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)

Your custom blocks are placed in the `src/Blocks/custom` folder.

For example, let's take the heading block (just replace `heading` with your block name).

We suggest you always use the full name and never abbreviate the block name. If your block has multiple words, you should separate them by a dash, for example, `featured-post-block.js`.

**Block structure should look like this:**

* heading
  * assets
    * index.js
  * components
    * heading-editor.js
    * heading-options.js
    * heading-toolbar.js
  * docs
    * story.js
    * readme.mdx
  * heading-block.js
  * heading.php
  * heading-editor.scss
  * heading-style.scss
  * heading-hooks.js
  * heading-transforms.js
  * manifest.json

For example, you can check the [storybook](/storybook).

### assets

In this folder, you'll define all the custom JavaScript functionality for your block that will only be used on the front end of the application. You must provide the `index.js` file in this folder, as a starting point, and the rest is up to you. We recommend using [JavaScript dynamic imports](dynamic-import) for all your front-end scripts. This ensures that the JavaScript is only loaded in the application when it is used and not before. By using dynamic import, you optimize your application and make it load faster.

### components
Components folder holds three files: `heading-options.js`, `heading-editor.js`, and `heading-toolbars.js`. Each of these files represents a part of the block editor block that is used in the editor. We have separated options, editor, and toolbar into separate components for readability and reusing components in different projects.

### docs
Contains everything a block needs to be run inside the Storybook. This part is optional. However, it will speed up your development time and provide you with much-needed documentation.

- `story.js` - Storybook entry point for your block. All blocks have the exact same story.
- `readme.mdx` - README document that describes your block and provides the documentation.

### heading-block.js
This file represents the `edit` callback method used in WordPress `registerBlockType` method.
We are not using the `save` callback method because we are creating dynamic blocks. The `edit` method describes how your block will be rendered in the editor once the block is used. In this file, you can use more advanced stuff like hooks and all the top-level block features.


- `heading-options.js` - must be wrapped with the `InspectorControls` component from the core. This will ensure that options are shown in the proper place in the block editor (sidebar).
- `heading-toolbar.js` - must be wrapped with the `BlockControls` component from the core. This will ensure that the toolbar is shown in the proper place in the block editor (floating or fixed toolbar).
- `heading-editor.js` - must **not** be wrapped with any top-level component. This will ensure that the editor component is shown in the proper place in the block editor (editor).

### heading.php
This file is the front-end representation of a block. In this file, you will have all the attributes you defined in the `manifest.json` file.

In the blocks PHP part, you always have these two properties (props) available:

- `$attributes` - This prop contains all the attributes you defined in the `manifest.json` and all the attributes saved in the database.
- `$innerBlockContent` - This prop contains all the inner block details when you set your block to contain inner blocks.

### heading-editor.scss
Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any column layout like a grid, flex, etc., you may need to add some corrections.

Corrections in the grid layout are necessary because the block editor adds additional HTML and we can't change it.

Please read the [block styles](blocks-styles) chapter for more details.

_This file is optional_.

### heading-style.scss
Holds all the front-end and editor styling for the component.

Please read the [block styles](blocks-styles) chapter for more details.

_This file is optional_.

### heading-hooks.js

Here you can provide any custom block editor hook you need. For documentation, please refer to [this link](https://developer.wordpress.org/block-editor/developers/filters/block-filters/). This file is going to be merged in the `registerBlockType` method.

### heading-transforms.js

Here you can provide any custom block transformation you need. For documentation, please refer to [this link](https://developer.wordpress.org/block-editor/developers/block-api/block-transforms/). This file is going to be merged in the `registerBlockType` method.

### manifest.json
This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block.

For more details, check the [block manifest](block-manifest) chapter.
