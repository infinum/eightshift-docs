---
id: helpers-aliases-helpers
title: Aliases
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts)

We have created a lot of helpful aliases that you can use in your project.

## EightshiftBlocksWhatwgFetch

Alias providing [Whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch).

```js
import 'EightshiftBlocksWhatwgFetch';
```

## EightshiftBlocksSwiper

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```js
import 'EightshiftBlocksSwiper';
```

## EightshiftBlocksSwiperIE

Alias providing [Swiper](https://www.npmjs.com/package/swiper) but for IE11 version.

```js
import 'EightshiftBlocksSwiperIE';
```

## EightshiftBlocksBabelPolyfill

Alias providing [Babel Polyfill](https://babeljs.io/docs/en/babel-polyfill).

```js
import 'EightshiftBlocksBabelPolyfill';
```

## EightshiftBlocksAutoprefixer

Alias providing [Autoprefixer](https://github.com/postcss/autoprefixer).

```js
import 'EightshiftBlocksAutoprefixer';
```

## EightshiftBlocksNormalize

Alias providing [Normalize](https://www.npmjs.com/package/normalize-scss). Check documentation for more details.

```scss
@import 'EightshiftBlocksNormalize';
@include normalize(); // stylelint-disable-line at-rule-empty-line-before
```

## EightshiftBlocksMediaBlender

Alias providing [Media Blender](https://github.com/infinum/media-blender). Check documentation for more details.

```scss
@import 'EightshiftBlocksMediaBlender';
```

## EightshiftBlocksSwiperStyle

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```scss
@import 'EightshiftBlocksSwiperStyle';
```

## EightshiftBlocksDynamicImport

To get (require) all the files using the `require.context` method, we created a helper located [here](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/helpers/dynamic-import.js).

It will find all files recursively in the folder using a regex. The following example will require all `assets/index.js` files inside the `custom` folder, so there is no need to add the files to the build manually.

```js
import { dynamicImport } from 'EightshiftBlocksDynamicImport';

dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
```

## EightshiftBlocksRegisterBlocks

Alias providing blocks registration. For more details check [here](/docs/legacy/v4/guides/blocks-registration).

## EightshiftBlocksUcfirst

Converts the first letter of a string to uppercase.

```js
import { ucfirst } from 'EightshiftBlocksUcfirst';

ucfirst('custom string');
```

## EightshiftBlocksGetActions

Alias providing blocks actions helper. For more details check [here](/docs/legacy/v4/guides/blocks-get-actions-helper).

## EightshiftBlocksUtilityHelpersPath

We have also created a bunch of JavaScript helpers located in the [helpers folder](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/helpers).

This alias provides only path to the helpers folder.

```js
import { media } from 'EightshiftBlocksUtilityHelpersPath/media';
```

## EightshiftFrontendLibs

Alias providing [Eightshift Frontend Libs](https://infinum.github.io/eightshift-frontend-libs/sassdocs/).

```scss
@import 'EightshiftFrontendLibs';
```

## EightshiftEditorStyleOverride

It provides the Block Editor overrides on some styles to give better UX for our block.

```scss
@import 'EightshiftEditorStyleOverride';
```


## EightshiftComponentColorPalette

Alias providing custom React component. For more details check [here](components-color-palette.md).

## EightshiftComponentHeadingLevel

Alias providing custom React component. For more details check [here](components-heading-level.md).
