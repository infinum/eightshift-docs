---
id: blocks-global-manifest
title: Global Manifest
sidebar_label: Global Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

Global manifest is used to provide all the global configuration to the blocks and components, and much more.

Currently, our default global manifest looks like this:

```json
{
  "namespace": "eightshift-boilerplate",
  "background": "#900000",
  "foreground": "#FFFFFF",
  "globalVariables": {
    "customBlocksName": "eightshift-block",
    "maxCols": 12,
    "containers": {
      "default": "1330px"
    },
    "gutters": {
      "none": "0",
      "default": "25px",
      "big": "50px"
    },
    "sectionSpacing": {
      "min":  0,
      "max":  300,
      "step": 10
    },
    "colors": [
      {
        "name": "Primary",
        "slug": "primary",
        "color": "#C3151B"
      },
      {
        "name": "Black",
        "slug": "black",
        "color": "#000000"
      },
      {
        "name": "White",
        "slug": "white",
        "color": "#FFFFFF"
      }
    ]
  }
}
```

As you can see, we have some global configuration for blocks and some SCSS variables. Along with these default keys, here you can define anything you need for the project.

### Namespace

All blocks must have a valid block name to be registered. A valid block consists of namespace and block name, like this: `eightshift-boilerplate/heading`.

To remove the need to write namespace multiple times across multiple blocks, we have defined the namespace in the global manifest, and we use it in the block registration process.

If you want to define multiple namespaces for your blocks in a single folder, please refer to the [block-structure](block-structure) chapter for more details.

### Background and foreground

Just like a namespace, we use the same logic for icons background and foreground when selecting a block from the list. Here you define global background and foreground for all your custom blocks.

Please refer to the [block-structure](block-structure) chapter for more details on how to override global background and foreground your blocks icon.

### Global variables

These are all the global settings you can use in JavaScript, SCSS, and PHP files. We have covered this topic in more detail in the [front-end global setting](global-settings) chapter.

### Attributes

We don't have this key in the example, but you can set the default attributes in this file, and they will be applied to all the blocks.

Please refer to the [blocks attributes](blocks-attributes) chapter for more details.
