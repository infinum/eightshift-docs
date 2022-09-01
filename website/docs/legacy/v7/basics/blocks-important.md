---
id: blocks-important
title: Important
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)

Before you start developing and changing anything on your block/components, you should keep in mind how we have managed to create this setup and some of the side effects of automatic file loading.

We require all our JS files using the `require.context` and all our SCSS files using the `webpack-import-glob-loader`.

All files are required during the project's `compile-time`. This means that we can't get any new files after the compile time is over. This approach gives you the ability to not worry whether you loaded the file or not. You can focus on your code and leave the messy stuff to the boilerplate.

Since all the files are required during the `compile-time`, every time you change the file structure, you must restart the Webpack watch.

You **must restart** Webpack watch when:

* adding a new block/component/variation;
* changing the names of any files in the block/component/variation folder (for example, you made a typo in a block's name);
* removing any file from the block/component/variation folder; and
* changing the block name in the block manifest.json.

You **don't need to restart** Webpack watch when you:

* add/remove styles;
* add/remove JS implementation in the files;
* add/remove PHP implementation in the files; and
* make changes on anything other than blockName in the manifest.json.

> Remember this note because, in 90 per cent of cases, your error occurs when you made changes to the files and didn't restart the Webpack watch.
