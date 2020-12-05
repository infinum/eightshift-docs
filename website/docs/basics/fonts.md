---
id: fonts
title: Fonts
sidebar_label: Fonts
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

Fonts can be added to your project in multiple ways, which depends on your project need. In general, if you can use fonts from an external source like Google Fonts, use that approach because the fonts are loaded in a smart way. On the other hand, if you have fonts that are added to your project, here are the steps to follow in order to make them available in the project:

* put your font files in this folder: `assets/fonts`.
* import each file in the `assets/fonts/index.js` so that the Webpack knows how to process these files in its build process.
* in your project, load the font family using font-face [method](/eightshift-docs/sass). We recommend that you create a new file `assets/styles/parts/utils/_defaults.scss` and put everything in that file.
