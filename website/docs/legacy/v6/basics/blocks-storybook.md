---
id: blocks-storybook
title: Storybook
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/)

We have created a full storybook that hosts all our blocks/components/variations with a fully functional block editor, where you can try out how blocks work and behave.

> To speed up project build time, Eightshift Boilerplate doesn't come with the storybook out of the box; you need to install it. To install Storybook to your project, just type this command in you terminal and follow the instructions:

```bash
wp boilerplate create_blocks_storybook
```

## Create my custom story

You don't need to have stories in your block/component, but we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us.

If you used our way to set up your project, you already have Storybook ready to use. To start the Storybook, run this command:

```bash
npm run storybook
```

In your project, you also have the `.storybook` folder, where all the configuration for Storybook is defined.

For your blocks/components/variation to be seen in the Storybook, you must have the `docs` folder and the `story.js` file in it.

### Block story

For all blocks, you don't need to write anything because all blocks stories look the same here is an example of the [heading block story](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/heading/docs/story.js).

We pull all the data from the manifest.json file and all the attribute values from the `example` key.

### Variation story

The same as the block's story.

### Component story

Components are not smart and can't be automatically built into the story. This is why you must create a story of all your components and mock the data.
You should set all the mock data in the component `manifest.json` and just provide the story's implementation. We have provided you with the helper that uses example data from you manifests and respects the component's dependency tree. Here you can see and example of [card component story](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/components/card/docs/story.js).
