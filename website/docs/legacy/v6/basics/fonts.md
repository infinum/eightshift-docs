---
id: fonts
title: Fonts
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0)

Fonts can be added to your project in multiple ways, depending on your project's needs. In general, if you can use fonts from an external source like Google Fonts, use that approach because the fonts are loaded smartly. On the other hand, if you have fonts that are added to your project, below are the steps to follow to make them available in the project.

* Put your font files in this folder: `assets/fonts`.
* Import each file in the `assets/fonts/index.js` so that Webpack knows how to process these files in its build process.
* In your project, load the font family using font-face [method](/docs/basics/library). We recommend that you create a new file `assets/styles/parts/utils/_defaults.scss` and put everything in that file.
