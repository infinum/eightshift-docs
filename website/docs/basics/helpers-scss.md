---
id: helpers-scss
title: Scss
sidebar_label: Scss
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)


For years, we have collected a list of useful SASS mixins, placeholders, and functions you can use in a project. You don't need to have all this in your project. Check out our documentation and see what we have in store for you.

**Visit [SassDocs](/eightshift-docs/sass) for more details.**

## Default usage

Eightshift Frontend Libs styles library is already implemented in your WordPress project, so you don't need to worry about implementation.

All our sass mixing, functions, and helpers are located in `node_modules/@eighshift/frontent-libs/styles/scss/eightshift-frontend-libs.scss` file.

We imported this library in this file `/assets/styles/parts/_shared.scss`.

## Usage outside of Eightshift boilerplate

If you want to use it outside of the Eightshift boilerplate, you can. It is only a matter of installing the package and importing it to your project style file.

In your terminal, install Eightshift Frontend Libs package:

```js
npm install @eightshift/frontend-libs
```

and in your project add this import:

```js
@import '@eightshift/frontend-libs/styles/index.scss';
```
