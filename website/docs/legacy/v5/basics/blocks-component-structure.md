---
id: blocks-component-structure
title: Component Structure
sidebar_label: Component Structure
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

Your custom components are placed in the `src/Blocks/components` folder.

For example, let's take the heading component (just replace the heading with your component name).

We suggest you always use the full name and never abbreviate for the component name. If your component has multiple words, you should separate them by a dash; for example, featured-post-block.js.

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
  * heading.php
  * heading-editor.scss
  * heading-style.scss
  * manifest.json

For example, you can check the [storybook](/storybook).

> All files in components are optional.

### assets

This folder behaves the same as the blocks assets folder. Please check the [block structure](block-structure#assets) chapter for more details.

### components
Components folder holds three files: `heading-options.js`, `heading-editor.js`, and `heading-toolbars.js`. They are used the same way as in blocks to provide functionality based on the location used. The main difference in components is that these files are used inside other blocks to implement functionality from the component.

### docs
Docs folder contains everything a component needs to be run inside the Storybook. This part is optional but it will speed up your development time and provide you with the much-needed documentation.

- `story.js` - Storybook entry point for your component. Since components are not blocks, you must provide the mocked data for your component in this file.
- `readme.mdx` - README that describes your component and provides the documentation.

### heading.php
This file contains the front-end part (the view) of the component used in your project when the page renders. This file shouldn't contain any business logic, just present the passed attributes. The main difference from block view is that you only have attributes that you passed from a block or a top-level component in this file.

### heading-editor.scss
This file behaves the same as in blocks. Please check the [block structure](block-structure#heading-editorscss) chapter for more details.

### heading-style.scss
This file behaves the same as in blocks. Please check the [block structure](block-structure#heading-stylescss) chapter for more details.

### manifest.json
This file contains all the configuration for a component. It is not fully necessary, but we encourage you to use it because it provides many possibilities.

For more details, check the [component manifest](blocks-component-manifest) chapter.
