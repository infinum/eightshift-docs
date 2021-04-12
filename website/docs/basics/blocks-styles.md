---
id: blocks-styles
title: Styles
sidebar_label: Styles
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

We decided to remove all support for IE 11 and at that point, a bunch of doors opened up for new features and cool stuff. One of those features is CSS variables with block manifest and global settings.

Let's dig into the implementation of CSS variables in your project.

## Setup

To be able to use CSS variable you need to implement two helpers `outputCssVariables` and `getUnique` in your block/component. For more details on these helpers, you can read [here](helpers-javascript#outputcssvariables). 

There are a few small differences between implementation in JavaScript and PHP due to how React handles components re-rendering.

**typography-editor.js**
```js
import React, { useMemo } from 'react';
import { outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts/editor';
import manifest from '../manifest.json';

export const TypographyEditor = (attributes) => {

  // We need to use memo in order to optimise components re-render.
  const unique = useMemo(() => getUnique(), []);

  return (
    <>
      {outputCssVariables(attributes, manifest, unique)}

      <div data-id={unique}>
        {/*Regular component implementation*/}
      </div>
    </>
  );
};
```

**typography.php**
```php
/**
 * Template for the Typography Component.
 *
 * @package Eightshift_Boilerplate
 */

use EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$unique = Components::getUnique();
echo Components::outputCssVariables($attributes, $manifest, $unique); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

?>

<div data-id="<?php echo esc_attr($unique); ?>">
  // Regular component implementation
</div>
```
Now that we have helpers in place let's see how they are working and what features they have to offer.

## Details

CSS variables helper work in a combination of 2 helpers. `outputCssVariables` helper will output all CSS variables set in your blocks/component manifest and `getUnique` helper will make sure that variables are only applied to the correct block/component.

If you check your rendered website you can see that you have something like this:
```html
<style>
  .typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
    --typography-color: var(--global-colors-black);
    --typography-content-align: left;
  }
</style>

<div class="typography" data-id="210c9bbf733ef5c6aa74c49168ac29a7">...</div>
```

This is it for all the magic of CSS variables. Now let us see it in action and all those additional features you can utilize.

## Global variables

Now that we know how CSS variables are outputted we have one additional helper to describe. This helper is loaded in `application-blocks-editor.js` file and it is called `outputCssVariablesGlobal(globalSettings);`.
It is used to output all CSS variables from the global manifest under the `globalVariables` key to `:root` selector.

> Those variables are available in all your blocks/components.

**Global Manifest:**
```json
{
  "namespace": "eightshift-boilerplate",
  "background": "#D8262C",
  "foreground": "#FFFFFF",
  "globalVariables": {
    "customBlocksName": "eightshift-block",
    "maxCols": 12,
    "breakpoints": {
      "mobile": 479,
      "tablet": 1279,
      "desktop": 1919,
      "large": 1920
    },
    "containers": {
      "default": "1330px"
    },
    "gutters": {
      "none": "0",
      "default": "25px",
      "big": "50px"
    },
    "sectionSpacing": {
      "min":  -300,
      "max":  300,
      "step": 10
    },
    "sectionInSpacing": {
      "min":  0,
      "max":  300,
      "step": 10
    },
    "colors": [
      {
        "name": "Infinum",
        "slug": "infinum",
        "color": "#D8262C"
      },
      {
        "name": "Black",
        "slug": "black",
        "color": "#111111"
      },
      {
        "name": "White",
        "slug": "white",
        "color": "#FFFFFF"
      }
    ]
  }
}
```

**Output:**
```html
<style>
  :root {
    --global-custom-blocks-name: eightshift-block;
    --global-max-cols: 12;
    --global-breakpoints-mobile: 479;
    --global-breakpoints-tablet: 1279;
    --global-breakpoints-desktop: 1919;
    --global-breakpoints-large: 1920;
    --global-containers-default: 1330px;
    --global-gutters-none: 0;
    --global-gutters-default: 25px;
    --global-gutters-big: 50px;
    --global-section-spacing-min: -300;
    --global-section-spacing-max: 300;
    --global-section-spacing-step: 10;
    --global-section-in-spacing-min: 0;
    --global-section-in-spacing-max: 300;
    --global-section-in-spacing-step: 10;
    --global-colors-infinum: #D8262C;
    --global-colors-black: #111111;
    --global-colors-white: #FFFFFF;
  }
</style>
```

To use global variable just call:
```css
var(--global-colors-infinum);
```

## Variable Default

As we said in the beginning, all CSS variables are controlled with the block/component manifest but we didn't want to output all attributes as CSS variables (because you don't need them all), so you need to set what attributes you are going to output.

To output attribute as CSS variable, you need to set the `variable` key to `default`. This way you will get the output of the default value or value set in the database.

**Manifest:**
```json
{
  "attributes": {
    "typographySize": {
      "type": "string",
      "default": "120-default",
      "variable": "default"
    }
  },
  "options": {
    "typographySize": [
      {
        "label": "180 Display",
        "value": "180-default"
      },
      {
        "label": "120 Display",
        "value": "120-default"
      },
      {
        "label": "80 Display",
        "value": "80-default"
      }
    ]
  }
}
```

**Output:**
```css
--typography-size: 120-default
```

## Variable Color

If you have attributes that represent color used from the global variable you can output the CSS variable for color directly.

**Manifest:**
```json
{
  "attributes": {
    "typographyColor": {
      "type": "string",
      "default": "infinum",
      "variable": "color"
    }
  },
  "options": {
    "typographyColor": [
      {
        "name": "Infinum",
        "slug": "infinum",
        "color": "#D8262C"
      },
      {
        "name": "Black",
        "slug": "black",
        "color": "#111111"
      },
    ]
  }
}
```

**Output:**
```css
--typography-color: var(--global-colors-infinum);
```

## Variable Select

If you have attributes that are used in the `SelectControl` component by default CSS variable will output the `value` stored in the attribute.
If you set the variable to `select`, the CSS variable will look for the `variable` key in the manifest options.

If the `variable` key is not set in options, the fallback will be the `value` key.

> You can write any CSS selector, variable in the custom variable key.

**Manifest:**
```json
{
  "attributes": {
    "typographySize": {
      "type": "string",
      "default": "120-default",
      "variable": "select"
    }
  },
  "options": {
    "typographySize": [
      {
        "label": "180 Display",
        "value": "180-default",
        "variable": "something"
      },
      {
        "label": "120 Display",
        "value": "120-default",
        "variable": "somethingNew"
      },
      {
        "label": "80 Display",
        "value": "80-default",
        "variable": "somethingNew2"
      }
    ]
  }
}
```

**Output:**
```css
--typography-size: somethingNew
```

### Variable Select - Editor only

If you want to show different variables on the frontend and editor you can use the additional key `variableEditor` to output variable only for the editor.
This way fronted will get the `variable` key and editor `variableEditor` key.

We have made fallbacks if you don't put `variableEditor` on all the options.

**Fallback tree - editor:**
* variableEditor
* variable
* value

**Fallback tree:**
* variable
* value

## Variable Boolean

If you have attributes that are used in the `ToggleControl` component by default CSS variable will output the `value` stored in the attribute.
If you set the variable to `boolean`, the CSS variable will look for the `index` key in the manifest options. The first key is the `false` value, and the second is the `true` value.

If the `variable` key is not set in options fallback does default.

> You can write any CSS selector, variable in the custom variable key.

**Manifest:**
```json
{
  "attributes": {
    "typographyUse": {
      "type": "boolean",
      "default": true,
      "variable": "boolean"
    }
  },
  "options": {
    "typographyUse": [
      "somethingFalse",
      "somethingTrue"
    ]
  }
}
```

**Output:**
```css
--typography-size: somethingTrue
```

### Variable Boolean - Editor only

If you want to show different variables on the frontend and editor you can use additional index places. The third key is the `editor false` value and the fourth key is the` editor true` value. Fallback is also in a place like in select.

## Manual Variables

We made the option to add custom CSS variables in the output no matter the attributes. To use it, just add top-level key `variables` in the manifest and add each variable as an array item.
Manual variables will just be added at the bottom of the output.

**Manifest:**
```json
{
  "attributes": {
    // ...
  },
  "variables": [
    "--variable1: test1",
    "--variable2: test2",
    "--variable3: test3"
  ]
}
```

**Output:**
```css
--variable1: test1;
--variable2: test2;
--variable3: test3;
```
 
## Manual Variables - Editor only

If you want to add manual attributes only to the editor you can use the `variablesEditor` key. Everything else applies from the `Manual Variables`.
If you combine `variablesEditor` and `variables` in one manifest, both of them will be outputted in the editor but only `variables` will be outputted on the frontend.

**Manifest:**
```json
{
  "attributes": {
    // ...
  },
  "variablesEditor": [
    "--variable1: test1",
    "--variable2: test2",
    "--variable3: test3"
  ]
}
```

**Output:**
```css
--variable1: test1;
--variable2: test2;
--variable3: test3;
```
