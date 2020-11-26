---
id: blocks-structure
title: Structure
sidebar_label: Structure
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)


In order for the library to work and register blocks dynamically, a specific folder structure and naming must be followed.

Your folder structure should like this:


* src
	* Blocks
		* assets
		* components
		* custom
		* variations
		* wrapper
		* Blocks.php
		* manifest.json

### Blocks folder
This folder contains all the blocks defined in your project. Each block is located in the `custom` folder, and every component is located in the `components` folder. Blocks can be standalone created from multiple block editors components or you project components.

### Assets
This folder contains all the additional files for the blocks that you only need to use on the frontend. Basicity everything that is not a block or a component goes here like defining global style, global JavaScript helpers, project images, fonts, etc. Also in assets folder we register all block, styles and scripts, so without this folder nothing will work.

### Components
This folder contains all the components that are shared across blocks and project template files. Components are not registered as blocks because they are small chunks of code that you can reuse everywhere. Please refer to [component structure](blocks-component-structure) chapter for more details.

### Custom
This folder contains all the custom blocks defined and used in your project. Please refer to [block structure](block-structure) chapter for more details.

### Variations
This folder contains all the variations blocks defined and used in your project. Please refer to [variations](blocks-variations) chapter for more details.

### Wrapper
This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a section. Please refer to [wrapper](blocks-wrapper) chapter for more details.

### Manifest.json
This file contains global settings for the project. It must contain `namespace` and `background` keys. Everything else is optional. You can store data here that you intend to share across toolbars, components and blocks. Please refer to [block manifest](block-manifest) chapter for more details.

### Blocks.php

This is the main service class responsible for registering all the php parts of the blocks like:

* Dynamic blocks view.
* Custom category for your blocks.
* Default color pallete.
* What blocks you are going to use.
* All the custom functionality that you will write for the project.
