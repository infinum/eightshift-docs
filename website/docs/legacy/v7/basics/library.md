---
id: library
title: SCSS Library
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0)

Eightshift Frontend Libs contains a collection of useful SCSS mixins, functions and helpers you can use in projects.

For years, we have collected a list of them. At one point, we felt it was ineffective to copy-paste code across multiple projects, so we created Eightshift Frontend Libs. This allows you to use whatever we offer without all that unnecessary clutter.

Check out our documentation and import what you need from Eightshift Frontend Libs.

**Visit [SassDocs](/docs/basics/library) for more details.**

## How to use it

SCSS mixins, functions, and helpers are located in Eightshift Frontend Libs. Therefore, if you are using our Webpack build, you are all set. You can use it by importing it into your project like this:

```scss
@import '@eightshift/frontend-libs/styles/index.scss';
```

However, if you used our `wp boilerplate setup_theme` command, you are all set. Eightshift Frontend Libs are injected in the `_shared.scss` file in your project.
