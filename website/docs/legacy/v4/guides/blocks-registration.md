---
id: blocks-registration
title: Registration
---

Block registration works using magic and being able to use them a specific folder structure and naming must be followed.
In general, we have created all block registration in the manifest.json file. We use that file in JavaScript part of the block and Php part of the block. You can read more details here in the Block Manifest Structure section.

`registerBlocks` function loops through all block manifest and registers all blocks in the Block Editor using the native `registerBlockType` method.

To be able to register all block, please check this [file](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/assets/scripts/application-blocks-editor.js).
