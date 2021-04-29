---
id: blocks-styles
title: Styles
sidebar_label: Styles
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

We decided to remove all support for IE 11.  That decision opened up doors that lead to new, awesome features and all the cool stuff. One of those features is CSS variables with block manifest and global settings.

Let's dig into the implementation of CSS variables in your project.

## Setup

To be able to use CSS variables you need to implement two helpers in your blocks/components: `outputCssVariables` and `getUnique`. For more details on these helpers, you can read [here](helpers-javascript#outputcssvariables). 

There are a few differences between the JavaScript and PHP implementation due to a way React handles component re-rendering.

**typography-editor.js**
```js
import React, { useMemo } from 'react';
import { outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts/editor';
import manifest from '../manifest.json';

export const TypographyEditor = (attributes) => {

	// We need to use memo in order to optimise component re-rendering.
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
Now that we have helpers in place, let's see how they work and what features they offer.

## Details

CSS variables helper consists of 2 helpers. `outputCssVariables` helper will output all CSS variables set in your blocks/component manifest and `getUnique` helper will make sure that variables are applied only to the exact block/component.

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

This is all that's required for the magic of CSS variables to work! Now let's see it in action and check out all additional features you can use.

## Global variables

Now that we know how CSS variables are generated, we have one more helper to describe.
The `outputCssVariablesGlobal(globalSettings);` helper is called in the `application-blocks-editor.js` file. It is used to output all CSS variables from the global manifest under the `globalVariables` key, into the `:root` selector.

> All of these variables are available to use inside your blocks/components.

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
		--global-colors-black: #111111;
		--global-colors-white: #FFFFFF;
	}
</style>
```

You can use a global variable like any other CSS variable:
```css
color: var(--global-colors-white);
```

## Variable Defaults

As we said in the beginning, all CSS variables are defined within the block/component manifest. To avoid outputting all of the variables (because you might not need them all), the attributes that will be output as variables need to be defined.

To output an attribute as a CSS variable, you need to set the `variable` key to `default`. This way you will get the output of the default value or value set in the database.

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

## Color variables

If you have an attribute that represent colors from global variables, you can output the CSS variable for color directly.

**Manifest:**
```json
{
	"attributes": {
		"typographyColor": {
			"type": "string",
			"default": "white",
			"variable": "color"
		}
	},
	"options": {
		"typographyColor": [
			{
				"name": "White",
				"slug": "white",
				"color": "#ffffff"
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
--typography-color: var(--global-colors-white);
```

## Complex attribute variables

If you have attributes stored as objects (for example used in the `SelectControl` component), by default CSS variable generator will output the `value` stored in the attribute.
Setting the `variable` key to `select`, the CSS variable generator will look for the `variable` key in the manifest `options` field.

If the `variable` key is not set in options, the `value` key will be used as fallback.

> You can write any CSS declaration or variable in the custom variable key.

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
				"variable": "180px"
			},
			{
				"label": "120 Display",
				"value": "120-default",
				"variable": "0.12em"
			},
			{
				"label": "80 Display",
				"value": "80-default",
				"variable": "80%"
			}
		]
	}
}
```

**Output:**
```css
--typography-size: 0.12em;
```

### Complex attribute variables inside the Block editor

If you want to show different variables on the frontend and in the editor you can use the `variableEditor` key to output a different variable inside the block editor.

If `variableEditor` is not present on all the options, the fallback behaviour is as follows:

**Block editor fallback tree:**
* `variableEditor`
* `variable`
* `value`

**Frontend fallback tree:**
* `variable`
* `value`

## Boolean variables

By default, the CSS variable generator will output values stored in attributes. That means that boolean variables will get output as variables with `true` and `false` values, which might be something you don't want.
If you set the `variable` key to `boolean`, the CSS variable generator will look for the `index` array in the manifest options. The first value reprents the value if attribute is `false`, and the second when it's `true`.

If the `variable` key is not set in options, the fallback is to output the value inside the CSS variable.

> You can write any CSS declaration or variable in the custom variable key.

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
			"none",
			"block"
		]
	}
}
```

**Output:**
```css
--typography-use: block;
```

### Boolean variables inside the Block editor

If you want to show different variables on the frontend and inside the Block editor you can use add values to the `index` key in options. The third value represents the value if false and the fourth editor value if true. Fallback tree is same as in Complex variables.

## Custom variables

If you need to set up many variables based on a single attribute value you can use the `custom` key. This key will search through the `options` for the attribute key and output the CSS variables based on values. Each custom variable key must be an `object`. You will also get the original key in the output.

**Manifest:**
```json
{
	"attributes": {
		"imageAlign": {
			"type": "string",
			"default": "center center",
			"variable": "custom"
		}
	},
	"options": {
		"imageAlign": {
			"variable": {
				"top left": {
					"horizontal": "flex-start",
					"vertical": "flex-start"
				},
				"top center": {
					"horizontal": "center",
					"vertical": "flex-start"
				},
				"top right": {
					"horizontal": "flex-end",
					"vertical": "flex-start"
				},
				"center left": {
					"horizontal": "flex-start",
					"vertical": "center"
				},
				"center center": {
					"horizontal": "center",
					"vertical": "center"
				},
				"center right": {
					"horizontal": "flex-end",
					"vertical": "center"
				},
				"bottom left": {
					"horizontal": "flex-start",
					"vertical": "flex-end"
				},
				"bottom center": {
					"horizontal": "center",
					"vertical": "flex-end"
				},
				"bottom right": {
					"horizontal": "flex-end",
					"vertical": "flex-end"
				}
			}
		}
	},
}
```

**Output:**
```css
--image-align: center center; 
--image-align-horizontal: center;
--image-align-vertical: center;
```

### Custom variables inside the Block editor

If you want to show different variables on the frontend and in the editor you can use the `variableEditor` key to output a different variable inside the block editor.

> If you provide override for the Block Editor you must set all inner variables.

If `variableEditor` is not present on all the options, the fallback behaviour is as follows:

**Block editor fallback tree:**
* `variableEditor`
* `variable`

**Frontend fallback tree:**
* `variable`

## Manual variables

There is an option to add custom CSS variables that get output independently from all the attributes. Just add a top-level `variables` key inside the manifest and add each variable as an array item.
Manual variables will be added at the end of the output.

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
 
## Manual variables inside the Block editor

If you want to add manual variables that only apply inside the Block editor you can use the `variablesEditor` key. Everything works the same as described in the _Manual variables_ section.
If you define both `variablesEditor` and `variables`, both will be output in the editor, but only `variables` will be output on the frontend.

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
