---
id: blocks-variations
title: Variations
sidebar_label: Variations
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Block Variations allow developers to define instances of existing blocks. An example that you’ll see below is a button block. Perhaps your site has three variations of how to display a block on your site. A Block Variation can be created for each one so that they are all styled differently. This sounds awfully familiar with how Block Styles, but the concept of variations goes a bit further than that, as we’ll see.

Here is the best article how to better understand [Block Variations](https://css-tricks.com/how-to-use-block-variations-in-wordpress/).

What we did with variations is just like blocks, provide the structured data from the manifest.json and use that to register your variation.

### Structure

The structure is the same as a normal block but with some limitations of what you can use. Here you can check [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#variations-optional) on this subject.

### Limitations

As we saw from our testing, you are not limited to only changing the block's default attributes but adding additional data like inner blocks and such. With this setup, you can use variations the same way as you would block patterns only in the variation you provide the data using manifest.json.

### parentName

This is the only key that is different from the original documentation. We implemented this key to be able to connect the original block with its variation. This key must be the same as it is defined in the original blocks `blockName` key.
