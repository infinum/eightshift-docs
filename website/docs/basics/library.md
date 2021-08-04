---
id: library
title: Library
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)


For years, we have collected a list of useful SASS mixins, functions, and other stuff you can use in a project. At one point, we felt stupid for copy/pasting code across multiple projects, so we created Eightshift Frontend Libs. This library allows you to use whatever we offer without all that unnecessary clutter.

Check out our documentation and import what you need from Eightshift Frontend Libs.

**Visit [SassDocs](/eightshift-docs/sass) for more details.**

## How to use it

Sass mixing, functions, and helpers are located in Eightshift Frontend Libs. Therefore, if you are using our Webpack build, you are all set. You can use it by importing it into your project like this:

```scss
@import '@eightshift/frontend-libs/styles/index.scss';
```

But if you used our `wp boilerplate setup_theme` command, you are all set. Eightshift Frontend Libs are injected in the `_shared.scss` file in your project.
