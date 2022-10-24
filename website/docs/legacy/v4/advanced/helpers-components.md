---
id: helpers-components-helpers
title: Components
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/helpers/class-components.php)

Components helper is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Helpers\Components` class.

We have created this simple helper that you can use in any PHP class as a static helper. To see all of the components helpers go [here](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/helpers/class-components.php).

## ensure_string

Makes sure the output is a string. Useful for converting an array of components into a string.

* @param  array|string $variable Variable we need to convert into a string.
* @return string

## classnames

Converts an array of classes into a string which can be echoed.

* @param  array $classes Array of classes.
* @return string

## render

Renders components and (optionally) passes some attributes to it.

**Note about "parentClass" attribute**:
If provided, the component will be wrapped with a parent BEM selector. For example, if `$attributes['parentClass'] === 'header'` and `$component === 'logo'` are set, the component will be wrapped with a `<div class="header__logo"></div>`

* @param  string $component  Component's name or full path (ending with .php).
* @param  array  $attributes Array of attributes that are implicitly passed to the component.
* @return string
