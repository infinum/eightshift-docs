---
id: blocks-attributes
title: Attributes
sidebar_label: Attributes
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

If you were to reference the native [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/) about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes.

The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the `setAttributes` method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes.

You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance.

Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously.
