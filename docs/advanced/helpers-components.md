---
id: helpers-components-helpers
title: Components Helpers
---

Components helper is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Helpers\Components` namespace.

We have created this simple helper that you can use in any PHP class as a static helpers. To see all the components helpers go [here](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-components.php) and help your selves.


## ensure_string

Makes sure the output is string. Useful for converting an array of components into a string.

* @param  array|string $variable Variable we need to convert into a string.
* @return string

## classnames

Converts an array of classes into a string which can be echoed.

* @param  array $classes Array of classes.
* @return string

## render

Renders a components and (optionally) passes some attributes to it.

**Note about "parentClass" attribute**:
If provided, the component will be wrapped with a parent BEM selector. For example, if `$attributes['parentClass'] === 'header'` and `$component === 'logo'` are set, the component will be wrapped with a `<div class="header__logo"></div>`

* @param  string $component  Component's name or full path (ending with .php).
* @param  array  $attributes Array of attributes that's implicitly passed to component.
* @return string
