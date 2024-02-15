---
id: helpers-scss
title: Scss
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)


For years, we have collected a list of useful SASS mixins, placeholders, and functions you can use in a project. You don't need to have all of this in your project. Check out our documentation and see what we have in store for you.

**Visit [SassDocs](/docs/basics/library) for more details.**

## Default usage

Eightshift Frontend Libs styles library is already implemented in your WordPress project, so you don't need to worry about implementation.

All our sass mixing, functions and helpers are located in `node_modules/@eighshift/frontent-libs/styles/scss/eightshift-frontend-libs.scss` file.

We imported that library into this file: `/assets/styles/parts/_shared.scss`.

## Usage outside of Eightshift Boilerplate

If you want to use it outside of the Eightshift Boilerplate, you can. It is only a matter of installing the package and importing it into your project's style file.

In your terminal, install Eightshift Frontend Libs package:

```bash
npm install @eightshift/frontend-libs
```

and add this import in your project:

```scss
@import '@eightshift/frontend-libs/styles/index.scss';
```
