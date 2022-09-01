---
id: block-manifest
title: Block Manifest
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)


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
  },
  "hasInnerBlocks": false,
  "components": {},
  "responsiveAttributes": {},
  "variables": {},
  "options": {}
}
```

Most of the keys are the same as the `registerBlockType` method. If you can't find the description here, please check the [official documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/), but we also have some custom features here:

### namespace

*native feature*

The block's namespace is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to.

### icon.background & icon.foreground

*native feature*

The icon background and foreground is set globally in the global manifest for all your custom blocks, but you can override them on each block if you need to.

### example

*native feature*

This key provides you the ability to give an example mockup of your attributes. When you try to add a block to the editor using the button in the main toolbar, you will have a preview image on the right. The image generated here will actually be a rendered block with the attributes from the example key. We also use it in the storybook to mock attributes. More on this in the [storybook chapter](blocks-storybook).

### attributes
Attributes key is an object of attributes where you define and set up default values for a block. These attributes are then passed in the editor as props, and the PHP view part in the `$attributes` variable.
We are using the same structure as described in the [block editor documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/). For more details please check [this chapter](blocks-attributes).

### hasInnerBlocks
`default: false`

*custom feature*

If the `hasInnerBlocks` key is set to true, the block's `save` method for inner blocks will be used. This method is used when the block has [`InnerBlocks`](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks). In the PHP view file, you will have the `$innerBlockContent` variable available. Here is an example of what happens in the back:

```js
  save = () => createElement(InnerBlocks.Content);
```

### components

*custom feature*

This key gives you the ability to use component attributes in your block without mapping all the component's attributes every time. Please check [this chapter](blocks-component-in-block) for more details.

### responsiveAttributes

*custom feature*

This key is used to combine multiple attributes with the similar name for the responsive breakpoints. Please check [this chapter](blocks-styles) for more details.

### variables

*custom feature*

This key is used to provide output for CSS variables. Please check [this chapter](blocks-styles) for more details.

### options

*custom feature*

This key is used to provide options used in the Block Editor options for components like SelectControl or RangeControl. With this key, you can pass options and change them depending on the component used. Please check [this chapter](blocks-component-in-block) for more details.


## The power of manifest.json

As described before we use `manifest.json` to share stuff across PHP / JS / SCSS so you can easily see its power.

For example, you can use `manifest.json` to store SVG files that you will use on the front-end (PHP) and in the editor / backend (JS) files. Or you can store block options so it is easier to find and add items.

Let's see how you would share SVG icon across multiple languages:

**manifest.json**

> Note: because this is a `JSON` file you must convert all double quotes to single because otherwise, you will get a fatal error.

```json
{
  ...
  "icon": "<svg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 320 512'><path fill='currentColor' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path></svg>",
  ...
}
```

**block-name.php**
```php
$manifest = Components::getManifest(__DIR__);

echo wp_kses_post($manifest['icon']);
```

**block-name-editor.js**
```jsx
import manifest from 'manifest.json';

<span dangerouslySetInnerHTML={{ __html: manifest.icon }}></span>
```

As you can see, you can share anything this way. Here are some additional examples:
* [Social Links](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/components/social-links/manifest.json)
* [Button](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/Blocks/components/button/manifest.json)
