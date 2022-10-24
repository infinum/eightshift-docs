---
id: blocks-structure-component
title: Component Structure
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/components/button)

Component naming and folder structure are not as strict as in the case of the block, but for the sake of consistency, it would be better to follow the same principles.

Basic component structure should like something this:

```shell
|____component-name
| |____components
| | |____component-name-editor.js
| | |____component-name-options.js
| | |____component-name-toolbar.js
| |____component-name.php
| |____component-name-editor.scss
| |____component-name-style.scss
```

For example, you can check [storybook](/storybook).

### components
This folder contains all the javascript components that are used in the component. The folder can include `editor`, `options` or `toolbar` component.

### component-name-editor.js
JavaScript component for handling component editor. The component editor is what will be shown in the main editor screen.

### component-name-options.js
JavaScript component for handling component options. Component options are displayed on the right side of the Block Editor editor. You can set various things here - component color, element sizes (usually font sizes), and other features.

### component-name-toolbars.js
JavaScript component for handling component toolbars. Toolbars are displayed at the top of every component - things like font-weight, alignment, etc.

### component-name.php
This file contains the front-end part (the view) of the component, used in your project when the page renders. This file shouldn't contain any business logic, just presenting the passed attributes.

### component-name-editor.scss
This file only contains the editor styles for the component. Editor styles are only applied to the editor screen in the admin.

### component-name-style.scss
This file contains the editor and the front-end styles for the component. These styles will be applied to both the editor screen and your front end. This is just the way the core editor is set up. Each component has the `blockClass` attribute that returns a block name with a block prefix, for example: `.block-intro`. You can/must use this naming convention when stying your block. Just like with any other SCSS components, the Block Editor block must also be standalone and easy to copy to different projects (reusable).

#### Note on the component styles

Component styles should only style the inner component layout and styles such as font sizes, alignment, etc. Any layout placement should be handled either by the wrapper, or a layout.
