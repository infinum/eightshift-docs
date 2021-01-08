---
id: blocks-special-use-cases
title: Special Use Cases
sidebar_label: Special Use Cases
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

By special use cases, we mean just that **special**.
For example, in our clients projects, we noticed that sometimes you need to provide something special to your blocks, like changing the block editor block DOM structure or change attributes added inside the inner blocks.

These are some of the examples that we found that we would like to share with you. We will list all of them and gradually add more.

## Change innerBlock attributes

**Usage:**

- Change attributes in the block editor and on the frontend.
- Set attributes in the database.

**Use Case:**

Let's say you have a carousel block, and you have a generic image block that you can use as a standalone block. You create a carousel block and set in its manifest limitation to show only the image block to be inserted as an inner block. This is easy to do: you just add your image block to an `allowedBlocks` array inside the carousel block, and everything will work. 

But now you have some default attributes set in that image block that you don't want to be set if the block is added using the innerBlock in the carousel. You can change that using our [overrideInnerBlockAttributes](helpers-javascript#overrideinnerblockattributes) helper. Just add this helper to your block entry point, add the attributes you want to change, and you are all set. 

Keep in mind that this will be applied to all innerBlocks inside your carousel block. If you want to limit this to only a specific block, you will need to fiddle around with that block's conditions (you can get that specific block name from the props).

Next time you add your image to the carousel, it will automatically change those attributes.

> Important note: If for some reason, you copy the inner block from the carousel to the top-level editor, this helper will not fire and not change back to original attributes. You have to manually remove those attributes from the Code editor in the admin.

**Implementation**

Here you can see our example of this helper used in the [carousel block](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/carousel/carousel-block.js).

## Provide simple wrapper to all innerBlock

**Usage:**
- Change attributes in the block editor and on the frontend.
- Set attributes in the database.

**Use Case:**

All of our blocks come with the wrapper implemented, and this is awesome. But sometimes you just don't want to use the wrapper, and you want only to use the simple version of the wrapper. You can provide the attribute overrides in your block, and you are good to go.

But if you need to change attributes in the block added as an innerBlock, you'll have a little problem. You can use the same helper as we used in the previous chapter, or you can use our abstraction of that helper called [overrideInnerBlockSimpleWrapperAttributes](helpers-javascript#overrideinnerblocksimplewrapperattributes).

This helper will set wrapper to simple variant in all your innerBlocks.

**Implementation**

Here you can see our example of this helper used in the [column block](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-block.js).

## Override innerBlock attributes only on the frontend

**Usage:**

- Change attributes on the frontend only.
- Don't set attributes in the database.

**Use Case:**

If you have a block containing inner blocks and only want to change attributes on the front end of the implementation and not in the block editor. The standard way is really hard because all inner blocks are rendered on the frontend as an HTML string, and you don't have access to any of the attributes before it is rendered.

Luckily WordPress core has provided us with the filter that can change any block before it is rendered. This filter will provide you an array of block and inner block along with the innerBlock and all attributes if you use it correctly.

The filter is called: `render_block_data`, and you can put your implementation in the `class-blocks.php` file.

**Implementation**

*Implementation coming soon.*

## Add CSS selectors on the parent component inside the block editor

**Usage:**

- Change attributes on the frontend only.
- Don't set attributes in the database.

**Use Case:**

If you tried to create any grid in your block on the front end, you know it is easy, but it is not so with the block editor. The problem is that in the block editor DOM, there are additional divs added over your block that breaks your HTML structure, and all your styles from flex or grid will not work correctly. If your block depends on some special selector placed in a specific place, you can run into some problems in the block editor.

With WordPress Block Editor hooks, we can fix this by not adding the selector to its original location as we do on the front end but adding them to the Block Editor's parent component.

**Implementation**

Here you can see our example of this hook used in the [column block](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-hooks.js).
