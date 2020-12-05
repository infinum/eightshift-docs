---
id: blocks-intro
title: Intro
sidebar_label: Intro
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Before we dive into blocks and see how everything is set, we should describe this setup's mindset.
If you managed to set up your project by this point with [WP-CLI](wp-cli) command `setup_theme`, you might have a few questions. We will try to answer all those questions here.

### Why do all my blocks look the same and have the same name structure?

This is because we defined the name structure for all our blocks and components to be able to load everything automatically. For more info about this please check the [block structure](block-structure) and [component structure](blocks-component-structure) chapters.

### What is the difference between components and blocks?

The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the `registerBlockType` method, and components are just here for you to bundle some functionality in one place and reuse it where ever you need.

For more info about blocks, you can read the [block structure](block-structure) chapter and about components, you can read in the [component structure](blocks-component-structure) chapter.

### Do I need to have storybook stories in my block?

No, you don't. But we provided you with the ability to use the storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us 🙂.

### Do you support block variations, and how can I use them?

Yes, we do. All block variations are located in the `src/Blocks/variations` folder. For more info about this, please check the [variations](blocks-variations) chapters.

### Do you support patterns, and how can I use them?

### What is a wrapper?

All the details about wrapper can be found in [this chapter](blocks-wrapper).

### Do you support inner blocks?

Yes, we support everything that core natively supports.  You can find more information about how to use them in [this chapter](block-manifest).

### Why do you use manifest.json in all blocks and components?

So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS). You can read all about it in [this chapter](block-manifest).

### Why do you use global manifest.json

Basically the same answer as the previous one. In the global `manifest.json` we have options that are shared across all blocks and components. Read more about it in [this chapter](blocks-global-manifest).

### If I want to create a new block/component, what do I do?

### How can I use your pre-made blocks?

You can check all available blocks/components using our `wp boilerplate use_block --help` or `wp boilerplate use_component --help` command.

### Can I use block/component from Eightshift-frontend-libs directly?

### I want to change attributes on inner blocks; how do I do it?

### Do I need to write JS and PHP implementation for all my blocks?

### How do I use components in blocks?

Yes, we do. Please check [this chapter](blocks-component-in-block) out for more information.

### How do I use multiple heading components in my block?

You can follow the instructions given in [this chapter](blocks-component-in-block).

### Where can I define my global styles?

### Where can I define global typography for all my blocks/components?

You can follow the instructions given in [this chapter](writing-styles).

### Can I make a component with WP_Query logic in it?

### Do I need to make components for all my blocks?

### Will, this setup work with full site editing?

### Can I use core blocks with your setup?

### How can I limit my blocks list?

### How to allow only one pattern category?

### Can I have blocks in multiple categories?

### How can I add a new blocks category?

### What if you don't yet support something from the native setup? What can I do?

As we described in [this chapter](blocks), if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the [WordPress documentation](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/). Also, if you think we are missing something, please open a [pull request](https://github.com/infinum/eightshift-frontend-libs/pulls) or an [issue](https://github.com/infinum/eightshift-frontend-libs/issues) on our GitHub repository.

### Why is this my blocks folder called `custom` and not `blocks` for example?

### In global manifest you have key called `“customBlocksName”: “eightshift-block”,`, can I change this to `my-project-name-block`?
