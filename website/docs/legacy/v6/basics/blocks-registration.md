---
id: blocks-registration
title: Registration
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/)

Our setup works if you follow our naming convention and strict folder structure for all blocks, components, variations, patterns, and wrapper.

By following our structure, we can find all files using the `require.context` regular expression inside the `Blocks` folder. Alongside some JavaScript magic, we have been able to leave out all those unnecessary steps when creating new blocks like:

* providing style files;
* writing register method;
* setting PHP method for registering dynamic blocks; and
* including files when adding new components.

You can check out how this works inside the `src/Blocks/assets/scripts/application-blocks-editor.js` file.

Please follow our [blocks structure folder](blocks-structure) to see the naming standard and how blocks are set.
