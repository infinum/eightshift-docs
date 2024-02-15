---
id: library
title: Library
sidebar_label: Library
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0)


For years, we have collected a list of useful SASS mixins, functions, and other stuff you can use in a project. At one point, we felt stupid for copy/pasting code across multiple projects, so we created Eightshift Frontend Libs. This library allows you to use whatever we offer without all that unnecessary clutter.

Check out our documentation and import what you need from Eightshift Frontend Libs.

**Visit [SassDocs](/docs/basics/library) for more details.**

## How to use it

Sass mixing, functions, and helpers are located in Eightshift Frontend Libs. Therefore, if you are using our Webpack build, you are all set. You can use it by importing it into your project like this:

```scss
@import '@eightshift/frontend-libs/styles/index.scss';
```

But if you are using our default `setup_theme` setup, you are all set. Eightshift Frontend Libs are in your project, injected in the `_shared.scss` file.

## We have some defaults

For Eightshift Boilerplate to look presentable and have some styling, we created some variables and colors for us to use. So if you find some variable in your project and you have no idea where it comes from, that is on us, and your best place to check is [here for global variables](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/styles/scss/_core.scss) and [here for colors](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/styles/scss/_colors.scss).
