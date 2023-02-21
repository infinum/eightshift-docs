---
id: blocks-variations
title: Variations
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/)

Block variations allow developers to define instances of existing blocks by changing their default values.

An example that you’ll see below is a button block. Perhaps your site has three variations of how to display a button on your site. You must create a `default` button block and you can create additional variations that changes the default values for the other two buttons. This sounds awfully familiar to block styles, but the concept of variations goes a bit further than that, as you’ll see.

Here is the best article on how to better understand [block variations](https://css-tricks.com/how-to-use-block-variations-in-wordpress/).

What we did with variations is just like blocks. Provide the structured data from the `manifest.json` and use that to register your variation.

### Structure

The structure is the same as a normal block but with some limitations on what you can use. You can check the [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#variations-optional) for more on this subject.

### Limitations

As we saw from our testing, you are not limited to only changing the block's default attributes, but adding additional data like inner blocks and such. With this setup, you can use variations the same way as you would block patterns, only in the variation you provide the data using `manifest.json`.

### Changes from native WordPress block variations API

`parentName` key is the only addition to the original documentation. We implemented this key to be able to connect the original block with its variation. This key must be the same as it is defined in the original blocks `blockName` key.
