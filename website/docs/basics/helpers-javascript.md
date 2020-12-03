---
id: helpers-javascript
title: JavaScript
sidebar_label: JavaScript
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

## check-attr

## cookies

## debounce

## devices

## dynamic-import

## escape-string

## navigator

## responsive-selectors

## selectorB

Return's BEM selector for HTML class and checks if block is set.

* @param string block BEM Block selector. *(required)*
* @param string element BEM Element selector.
* @param string modifier BEM Modifier selector.

**Usage:**

```js
  selectorB(blockClass);
  selectorB(blockClass, selectorClass);
  selectorB(blockClass, selectorClass, modifierClass);
```

**Equivalent:**

```js
  blockClass ? `${blockClass}` : '';
  blockClass ? `${blockClass}__${selectorClass}` : '';
  blockClass ? `${blockClass}__${selectorClass}--${modifierClass}` : '';
```


## selectorE

Return's BEM selector for HTML class and checks if the element is set.

* @param string block BEM Block selector. *(required)*
* @param string element BEM Element selector. *(required)*
* @param string modifier BEM Modifier selector.

**Usage:**

```js
  selectorE(blockClass, selectorClass);
  selectorE(blockClass, selectorClass, modifierClass);
```

**Equivalent:**

```js
  selectorClass ? `${blockClass}__${selectorClass}` : '';
  selectorClass ? `${blockClass}__${selectorClass}--${modifierClass}` : '';
```

## selectorM

Return's BEM selector for HTML class and checks if the modifier is set.

* @param string block BEM Block selector. *(required)*
* @param string element BEM Element selector. *(required)*
* @param string modifier BEM Modifier selector. *(required)*

**Usage:**

```js
  selectorM(blockClass, selectorClass, modifierClass);
```

**Equivalent:**

```js
  modifierClass ? `${blockClass}__${selectorClass}--${modifierClass}` : '';
```

## selector

Return's BEM selector for HTML class and checks all conditions from the checkAttr method.

* @param string block BEM Block selector.
* @param string element BEM Element selector.
* @param string key Key to check.
* @param array  attributes Array of attributes.
* @param array  manifest Array of default attributes from manifest.json.

**Usage:**

```js
  selector(componentClass, 'size', 'buttonSize', attributes, manifest),
```

**Equivalent:**

```js
  manifest['size'] ? `${componentClass}__size--${manifest['size']}` : '';
```

## selectorCustom

Return's BEM selector for HTML class and checks if the custom condition is set.

* @param bool   condition Check condition.
* @param string block BEM Block selector.
* @param string element BEM Element selector.
* @param string modifier BEM Modifier selector.

**Usage:**

```js
  selectorCustom(!(buttonContent && buttonUrl), `${componentClass}-placeholder`);

  selectorCustom(test, componentClass, elementClass);

  selectorCustom(!newTest, componentClass, elementClass, modifierClass);
```

**Equivalent:**

```js
  !(buttonContent && buttonUrl) ? `${componentClass}-placeholder` : '';

  test ? `${componentClass}__${elementClass}` : '';

  !(newTest) ? `${componentClass}__${elementClass}--${modifierClass}` : '';
```

## get-palette-colors

## override-inner-block-attributes

## ucfirst
