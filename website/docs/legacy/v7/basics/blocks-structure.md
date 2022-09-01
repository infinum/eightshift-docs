---
id: blocks-structure
title: Structure
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)


For the library to work and register blocks dynamically, a specific folder structure and naming must be followed.

Your folder structure should be like this:

* src
  * Blocks
    * assets
    * components
    * custom
    * variations
    * wrapper
    * Blocks.php
    * manifest.json

Don't be confused with the upper and lower case folder names, those are like that on purpose. Everything under the `Block` folder is considered a view so they are written in lower caps, and the Blocks.php file is still a part of the PHP PSR-4 standard so it must be written like every other **service class**.

### Blocks folder
This folder contains all the blocks defined in your project. Every block is located in the `custom` folder, and every component is located in the `components` folder. Blocks can be created from multiple block editor components or your project components.

### Assets
This folder contains all the additional files for the blocks you only need to use on the front end. Everything that is not a block or a component goes here, such as defining global style, global JavaScript helpers, project images, fonts, etc. Also, we register all blocks, styles, and scripts in the assets folder so that nothing works without this folder.

### Components
This folder contains all the components that are shared across blocks and project template files. Components are not registered as blocks because they are small chunks of code you can reuse everywhere. For instance, you can create a menu component to be used in the footer but also reused in a separate menu block. Please refer to the [component structure](blocks-component-structure) chapter for more details.

### Custom
This folder contains all the custom blocks defined and used in your project. Please refer to the [block structure](block-structure) chapter for more details.

### Variations
This folder contains all the variations blocks defined and used in your project. Please refer to the [variations](blocks-variations) chapter for more details.

### Wrapper
This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a layout section. Please refer to the [wrapper](blocks-wrapper) chapter for more details.

### manifest.json
This file contains global settings for your project. It must contain `namespace` and `background` keys. Everything else is optional. Here you can store data you intend to share across toolbars, components, and blocks. Please refer to the [block manifest](block-manifest) chapter for more details.

### Blocks.php

This is the main service class responsible for registering all the PHP parts of the blocks like:

* dynamic blocks view
* custom category for your blocks
* default color palette
* what blocks you are going to use
* all the custom functionality that you will write for the project
