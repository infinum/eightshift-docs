---
id: docs-sass
title: Sass
---

For years we have collected a list of useful SASS mixins, functions, and all other stuff that you can use in a project. You don't need to have all this in your project; check out our documentation and import it from Eightshift Frontend Libs.

**Visit [SassDocs](/docs/basics/library) for more details.**

## Default usage
Sass mixing, functions, helpers are located in `node_modules/@eighshift/frontent-libs/styles/scss/eightshift-frontend-libs.scss` file. If you are using our webpack build then you are all set, and you can use it by importing it to your project like this:

```scss
@import 'EighshiftFrontendLibs';
```

## Not using Webpack Build

To be able to use `EighshiftFrontendLibs` as a shorthand, we have provided and `alias` in our webpack build under the `resolve` object key.

If you don't use our full build for some reason and want only to use Eightshift Frontend Libs you can provide this in your webpack build:

```js
resolve: {
  alias: {
    EighshiftFrontendLibs: path.resolve('node_modules', '@eightshift', 'frontend-libs', 'styles', 'scss', 'eightshift-frontend-libs.scss'),
  }
}
```

and then importing it like this:

```scss
@import 'EighshiftFrontendLibs';
```

or you can import it directly like this, but be careful where your node_modules folder is located:

```scss
@import 'node_modules/@eightshift/frontend-libs/styles/scss/eightshift-frontend-libs.scss';
```
