---
id: aliases
title: Helpful aliases
---

## EightshiftBlocksWhatwgFetch

Alias providing [Whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch).

```js
import 'EighshiftBlocksWhatwgFetch';
```

## EightshiftBlocksSwiper

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```js
import 'EighshiftBlocksSwiper';
```

## EightshiftBlocksBabelPolyfill

Alias providing [Babel Polyfill](https://babeljs.io/docs/en/babel-polyfill).

```js
import 'EighshiftBlocksBabelPolyfill';
```

## EightshiftBlocksAutoprefixer

Alias providing [Autoprefixer](https://github.com/postcss/autoprefixer).

```js
import 'EightshiftBlocksAutoprefixer';
```

## EightshiftBlocksNormalize

Alias providing [Normalize](https://www.npmjs.com/package/normalize-scss). Check documentation for more details.

```scss
@import 'EighshiftBlocksNormalize';
@include normalize(); // stylelint-disable-line at-rule-empty-line-before
```

## EightshiftBlocksMediaBlender

Alias providing [Media Blender](https://github.com/infinum/media-blender). Check documentation for more details.

```scss
@import 'EighshiftBlocksMediaBlender';
```

## EightshiftBlocksSwiperStyle

Alias providing [Swiper](https://www.npmjs.com/package/swiper).

```scss
@import 'EighshiftBlocksSwiperStyle';
```

## EightshiftBlocksDynamicImport

To get (require) all the files using `require.context`  method, we created a helper located [here](https://github.com/infinum/eightshift-frontend-libs/blob/develop/scripts/dynamic-import.js).

It finds all files recursively in the folder using regex. This example will require all `assets/index.js` files inside the `custom` folder, so there is no need to add the files to the build manually.
```js
import { dynamicImport } from 'EighshiftBlocksDynamicImport';

dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
```

## EightshiftBlocksRegisterBlocks

Alias providing blocks registration. For more details check [here](/eightshift-docs/docs/guides/blocks-registration).

## EightshiftBlocksUcfirst

Converts the first letter of the string to uppercase.
```js
import { ucfirst } from 'EighshiftBlocksUcfirst';

ucfirst('custom string');
```

## EightshiftBlocksGetActions

Alias providing blocks actions helper. For more details check [here](/eightshift-docs/docs/guides/blocks-get-actions-helper).

## EightshiftBlocksUtilityHelpersPath

We have also created a bunch of JavaScript helpers located in [helpers folder](https://github.com/infinum/eightshift-frontend-libs/tree/develop/scripts/helpers).

This alias provides only path to helpers folder.

```js
import { media } from 'EighshiftBlocksUtilityHelpersPath/media';
```

## EightshiftFrontendLibs

Alias providing [Eighshift Frontend Libs](https://infinum.github.io/eightshift-frontend-libs/sassdocs/). 

```scss
@import 'EighshiftFrontendLibs';
```

## EightshiftEditorStyleOverride

It provides the Block Editor overrides on some styles to give better UX for our block.

```scss
@import 'EighshiftEditorStyleOverride';
```


## EightshiftComponentColorPalette

## EightshiftComponentHeadingLevel
