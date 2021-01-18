---
id: helpers-javascript
title: JavaScript
sidebar_label: JavaScript
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

## checkAttr

Checks if the attributes exist in the attributes list, and adds a default value if they don't.

* @param {string} $key Key to check.
* @param {array}  $attributes Array of attributes.
* @param {array}  $manifest Array of default attributes from manifest.json.
* @param {string} $componentName The real component name.

**Usage:**

```js
  import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';

  checkAttr('buttonUse', attributes, manifest, $componentName);
```

## cookies

Used to set and get cookie values.

**Usage:**

```js
  import { cookies } from '@eightshift/frontend-libs/scripts/helpers';

  cookies.setCookie('gdpr', '2', cookies.setOneDay(), '/');

  cookies.getCookie('gdpr');
```

## debounce

Debounces the provided function. For more information check [this blog post](https://davidwalsh.name/javascript-debounce-function).

* @param {function} func Provided function to apply debounce.
* @param {int} wait Wait time for debounce.

**Usage:**

```js
  import { debounce } from '@eightshift/frontend-libs/scripts/helpers';

  debounce(() => {
    // callback function.
  }, 250);
```

## devices

Check if your browser's navigator is a specific device.

**Usage:**

```js
  import { device } from '@eightshift/frontend-libs/scripts/helpers';

  device.iPhone();
```

## dynamicImport

To get (require) all the files using the `require.context` method. It will find all files recursively in the folder using a regex. The following example will require all assets/index.js files inside the custom folder, so there is no need to manually add the files to the build.

 * @param {object} paths All require.context patch to iterate.

**Usage:**

```js
  import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';

  dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
```

## escape-string

Takes provided string and removes special characters. Characters that will be removed: `([;&,.+*~':"!^#$%@[\]()=>|]`.

* @param {string} $key Key to check.

**Usage:**

```js
  import { escapeString } from '@eightshift/frontend-libs/scripts/helpers';

  escapeString.escapeString('Special string');
```

## responsiveSelectors

Create responsive selectors used for responsive attributes.

Useful if you want to show how the responsive behavior looks in the editor.

* @param {array}   items        Array of breakpoints.
* @param {string}  selector     Selector for this breakpoint.
* @param {string}  parent       Parent block selector.
* @param {boolean} use_modifier If false, you can use this selector for visibility.

**Usage:**

```js
  import { responsiveSelectors } from '@eightshift/frontend-libs/scripts/helpers';

  responsiveSelectors($attributes['width'], 'width', $blockClass);
```

**Output:**

```js
  .block-column__width-large--4
```

## selector

Returns BEM selector for HTML class and check if condition part is set.

* @param {boolean} condition Check condition.
* @param {string}  block BEM Block selector.
* @param {string}  element BEM Element selector.
* @param {string}  modifier BEM Modifier selector.
* @return {string}

**Usage:**

```js
  import { selector } from '@eightshift/frontend-libs/scripts/helpers';

  selector(!(buttonContent && buttonUrl), `${componentClass}-placeholder`);

  selector(test, componentClass, elementClass);

  selector(!newTest, componentClass, elementClass, modifierClass);
```

**Equivalent:**

```js
  !(buttonContent && buttonUrl) ? `${componentClass}-placeholder` : '';

  test ? `${componentClass}__${elementClass}` : '';

  !(newTest) ? `${componentClass}__${elementClass}--${modifierClass}` : '';
```

## getPaletteColors

Use this hook to read editor-color-palette colors directly from WP built-in store.

* Requires WP => 5.3

**Usage:**

```js
  import { getPaletteColors } from '@eightshift/frontend-libs/scripts/editor';

  getPaletteColors();
```

## overrideInnerBlockAttributes

It is used to set attributes on all innerBlocks. This value will be stored in the Block Editor store and set to a block.

**Usage:**

```js
  import { useSelect } from '@wordpress/data';
  import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts/editor';

  useSelect((select) => {
    overrideInnerBlockAttributes(
      select,
      props.clientId,
      {
        wrapperDisable: true,
      }
    );
  });
```

## overrideInnerBlockSimpleWrapperAttributes

It is used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the Block Editor store and set to a block.

**Usage:**

```js
  import { useSelect } from '@wordpress/data';
  import { overrideInnerBlockSimpleWrapperAttributes } from '@eightshift/frontend-libs/scripts/editor';

  useSelect((select) => {
    overrideInnerBlockSimpleWrapperAttributes(
      select,
      props.clientId,
    );
  });
```

## ucfirst

Converts the first letter of a string to uppercase.

**Usage:**

```js
  import { ucfirst } from '@eightshift/frontend-libs/scripts/editor';

  ucfirst('custom');
```

## camelize

Returns a camel-cased string.

**Usage:**

```js
  import { camelize } from '@eightshift/frontend-libs/scripts/editor';

  camelize('custom string');
  camelize('custom-string');
```

**Output:**

```js
customString
```
