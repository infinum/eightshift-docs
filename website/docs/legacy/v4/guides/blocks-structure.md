---
id: blocks-structure
title: Blocks Structure
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/)


In order for the library to work and register blocks dynamically, a specific folder structure and naming must be followed.

Your folder structure should like this:

```shell
theme-name
|____ src
| |____blocks
| | |____assets
| | |____components
| | |____custom
| | |____layout
| | |____wrapper
| | |____manifest.json
```

In the case you need to override the default way styles and scripts are enqueued, you'd extend the `class-enqueue.php`, and in the case you need to override or extend the default way blocks are behaving, you'd extend the `class-blocks.php` inside your theme/plugin.

### Blocks folder
This folder contains all the Block Editor blocks defined in your project. Each block is located in the `custom` folder, and every component is located in the `components` folder. Block Editor blocks are comprised of one or more smaller components.

### assets
This folder contains all the additional javascript, images, fonts and style functionality for the blocks that you only need to use on the front-end and in the editor (admin).

### components
This folder contains all the components that are shared across blocks. Components are not registered as blocks.

### custom
This folder contains all the custom Block Editor blocks defined and used in your project.

### layout
This folder contains all other layout elements such as header or footer. Each layout part goes in its own folder, and they contain PHP, JS and SCSS files.

### wrapper
This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a section.

### manifest.json
This file contains global settings for the project. It must contain `namespace` and `background` keys. Everything else is optional. You can store data here that you intend to share across toolbars, components and blocks.

Example:

```json
{
  "namespace": "eightshift-boilerplate", // Required.
  "background": "#900000", // Required.
  "maxCols": 12, // Optional.
  "colors": { // Optional.
    "primary": {
      "name": "primary",
      "color": "#C3151B"
    },
    "black": {
      "name": "black",
      "color": "#000000"
    },
    "white": {
      "name": "white",
      "color": "#FFFFFF"
    }
  }
}
```
