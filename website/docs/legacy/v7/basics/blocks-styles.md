---
id: blocks-styles
title: Styles
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)

We decided to remove all support for IE 11.  That decision opened up doors that lead to new, awesome features and all the cool stuff. One of those features is CSS variables with block manifest and global settings.

Let's dig into the implementation of CSS variables in your project.

## Setup

To be able to use CSS variables you need to implement two helpers in your blocks/components: `outputCssVariables` and `getUnique`. For more details on these helpers, you can read [here](helpers-javascript). 

There are a few differences between the JavaScript and PHP implementation due to a way React handles component re-rendering.

**JavaScript component:**

```js
import React, { useMemo } from 'react';
import { outputCssVariables, getUnique } from '@eightshift/frontend-libs/scripts';
import manifest from '../manifest.json';
import globalManifest from './../../../manifest.json';

export const TypographyEditor = (attributes) => {

	// We need to use memo in order to optimise component re-rendering.
	const unique = useMemo(() => getUnique(), []);

	return (
		<>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<div data-id={unique}>
				{/*Regular component implementation*/}
			</div>
		</>
	);
};
```

**PHP view:**

```php
use EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$unique = Components::getUnique();

?>

<div data-id="<?php echo esc_attr($unique); ?>">
	<?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	// Regular component implementation
</div>
```

Now that we have helpers in place, let's see how they work and what features they offer.

## Details

CSS variables helper consists of 2 helpers. `outputCssVariables` helper will output all CSS variables set in your blocks/component manifest and `getUnique` helper will make sure that variables are applied only to the exact block/component.

If you check your rendered website you can see that you have something like this:
```html
<div class="typography" data-id="210c9bbf733ef5c6aa74c49168ac29a7">
	<style>
		.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
			--typography-color: var(--global-colors-black);
			--typography-content-align: left;
		}
	</style>
	...
</div>
```

This is all that's required for the magic of CSS variables to work! Now let's see it in action and check out all additional features you can use.

## Global variables

Now that we know how CSS variables are generated, we have one more helper to describe.
The `outputCssVariablesGlobal(globalSettings);` helper is called in the `application-blocks-editor.js` file. It is used to output all CSS variables from the global manifest under the `globalVariables` key, into the `:root` selector.

> All of these variables are available to use inside any blocks/components.

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

## Variables

As we said in the beginning, all CSS variables are defined within the block/component manifest.

To output an attribute as a CSS variable, you need to set the `variables` key in the block/component `manifest` and define the variable markdown.

All css variables are prepared and ready to be used in the responsive manner.

## Default type

Variable `default` will output all variables from the list no matter what you have selected in the attribute. You can use unlimited variables.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographySize": {
			"type": "string",
			"default": "120-default"
		}
	},
	"variables": {
		"typographySize": [
			{
				"variable": {
					"typography-size": "120px",
					"typography-line-height": "calc(var(--typography-size) * 1.2)"
				}
			}
		]
	}
}
```

**Output:**
```css
--typography-size: 120px;
--typography-line-height: 144px;
```

## Value type

Variable `value` will output all variables depending on attributes value. Everything else is the same as in the default type.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographySize": {
			"type": "string",
			"default": "120-default"
		}
	},
	"variables": {
		"typographySize": {
			"120-default": [
				{
					"variable": {
						"typography-size": "120px",
						"typography-line-height": "calc(var(--typography-size) * 1.2)"
					}
				}
			]
		}
	}
}
```

**Output:**
```css
--typography-size: 120px;
--typography-line-height: 144px;
```

## Editor variables 

Editor variables behave just like regular `variables`, except they are output only inside the Block Editor.
They are mostly used for overriding specific behaviour, e.g. showing a hidden element as half-transparent instead of hiding it completely.

**Manifest:**
```json
{
	"componentName": "wrapper",
	"title": "Wrapper",
	"componentClass": "wrapper",
	"attributes": {
		"wrapperHide": {
			"type": "boolean",
			"default": false
		}
	},
	"variables": {
		"wrapperHide": {
			"true": [
				{
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
		}
	},
	"variablesEditor": {
		"wrapperHide": {
			"true": [
				{
					"variable": {
						"wrapper-display-opacity": "0.5",
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		}
	}
}
```

**Output:**
```css
--wrapper-display: none;
--wrapper-display-opacity: 0.5;
--wrapper-display: var(--wrapper-display-type, grid);
```

## Manual variables

Custom CSS variables can be generated and output independently from all the attributes through the `variablesCustom` key. Add it inside the manifest (top level) and add each variable as an array item.
Manual variables will be added at the end of the output.

**Manifest:**
```json
{
	"attributes": {
		// ...
	},
	"variablesCustom": [
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

If you want to add manual variables that only apply inside the Block editor you can use the `variablesCustomEditor` key. Everything works the same as described in the **Manual variables** section.
If you define both `variablesCustomEditor` and `variables`, both will be output in the editor, but only `variables` will be output on the frontend.

**Manifest:**
```json
{
	"attributes": {
		// ...
	},
	"variablesCustomEditor": [
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


## Additional options and examples
### Color

Here is an example how to output global variable as a css variable.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographyColor": {
			"type": "string",
			"default": "white"
		}
	},
	"variables": {
		"typographyColor": [
			{
				"variable": {
					"typography-color": "var(--global-colors-white)"
				}
			}
		]
	}
}
```

**Output:**
```css
--typography-color: var(--global-colors-white);
```

### Responsive

All variables are prepared to be responsive. If you set multiple keys in the manifest list that variable will be outputted in the correct media query. Breakpoints are taken from the global manifest and the order of the output breakpoints.

> Global breakpoints must follow the convention from the smallest size to the largest.

If you don't specify breakpoint key, that item will not be wrapped in the media query.

If you write breakpoint that isn't defined in the global manifest, that condition will be ignored.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographySize": {
			"type": "string",
			"default": "120-default"
		}
	},
	"variables": {
		"typographySize": [
			{
				"variable": {
					"typography-size": "30px"
				}
			},
			{
				"breakpoint": "tablet",
				"variable": {
					"typography-size": "80px"
				}
			}
			{
				"breakpoint": "large",
				"variable": {
					"typography-size": "120px"
				}
			}
		]
	}
}
```

**Output:**
```css
.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
	--typography-size: 30px;
}

@media(min-width: 1279px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 80px;
	}
}

@media(min-width: 1920px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 120px;
	}
}
```

### Responsive Inverse

By default, we use mobile first approach but if you need desktop first you can use `inverse: true` key.

> If you have multiple mobile/desktop first breakpoints, output will sort them mobile first and then desktop first after that.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographySize": {
			"type": "string",
			"default": "120-default"
		}
	},
	"variables": {
		"typographySize": [
			{
				"variable": {
					"typography-size": "120px"
				}
			},
			{
				"breakpoint": "tablet",
				"inverse": true,
				"variable": {
					"typography-size": "80px"
				}
			}
			{
				"breakpoint": "mobile",
				"inverse": true,
				"variable": {
					"typography-size": "320px"
				}
			}
		]
	}
}
```

**Output:**
```css
.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
	--typography-size: 120px;
}

@media(max-width: 1279px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 80px;
	}
}

@media(max-width: 479px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 30px;
	}
}
```

### Attribute value replacement

Attribute value replacement variable is used to return the attribute value where you want it in the css variables. To use it just put `%value%` in you css variables.

**Manifest:**
```json
{
	"componentClass": "typography",
	"attributes": {
		"typographySize": {
			"type": "string",
			"default": "120"
		}
	},
	"variables": {
		"typographySize": [
			{
				"variable": {
					"typography-size": "30px"
				}
			},
			{
				"breakpoint": "tablet",
				"variable": {
					"typography-size": "80px"
				}
			}
			{
				"breakpoint": "large",
				"variable": {
					"typography-size": "%value%px"
				}
			}
		]
	}
}
```

**Output:**
```css
.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
	--typography-size: 30px;
}

@media(min-width: 1279px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 80px;
	}
}

@media(min-width: 1920px) {
	.typography[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--typography-size: 120px;
	}
}
```

## Responsive variables

Responsive variables are used for eliminating unnecessary code duplication. For example, if you have 4 separate attributes used for setting a responsive variable where all the attributes have the same output (e.g. `%value%`), the variables can get cluttered rather quickly.

In a top-level manifest key `responsiveAttributes`, you can place a new key (e.g. `wrapperHide`) that represents a common key for your responsive variables. Inside of it, you can list your responsive variables (e.g. `wrapperHideLarge`, `wrapperHideDesktop`, `wrapperHideTablet`, `wrapperHideMobile`) as a key-value pair. The key represents a breakpoint name, and the value represents responsive variable(`breakpoint`: `responsiveVariableName`). Afterwards, you can add that common key inside the `variables` (and/or `variablesEditor`) key and configure the output template.

Best practice is to have the attributes named consistently with your breakpoints - in the **`variableName``breakpointName`** format (see example below).

> If you need an extra variable, or are overriding some of the auto-generated variables (from the helper), the variables will be output after the responsive variables. (see **Example 2**)

> Order of responsive attributes is important since generating variables relies on that order. Make sure to use the `inverse` option properly.

**Example 1**
```json
{
	"componentName": "wrapper",
	"title": "Wrapper",
	"componentClass": "wrapper",
	"attributes": {
		"wrapperHideLarge": {
			"type": "boolean",
			"default": false
		},
		"wrapperHideDesktop": {
			"type": "boolean"
		},
		"wrapperHideTablet": {
			"type": "boolean"
		}
	},
	"responsiveAttributes": {
		"wrapperHide": {
			"large": "wrapperHideLarge",
			"desktop": "wrapperHideDesktop",
			"tablet": "wrapperHideTablet"
		}
	},
	"variables": {
		"wrapperHide": {
			"true": [
				{
					"inverse": true,
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
			"false": [
				{
					"inverse": true,
					"variable": {
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		}
	}
}
```

**Transformed:**
```json
{
	"componentName": "wrapper",
	"title": "Wrapper",
	"componentClass": "wrapper",
	"attributes": {
		"wrapperHide": {
			"type": "boolean",
			"default": false
		}
	},
	"responsiveAttributes": {
		"wrapperHideLarge": {
			"type": "boolean",
			"default": false
		},
		"wrapperHideDesktop": {
			"type": "boolean"
		},
		"wrapperHideTablet": {
			"type": "boolean"
		}
	},
	"variables": {
		"wrapperHideLarge": {
			"true": [
				{
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
			"false": [
				{
					"variable": {
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		},
		"wrapperHideDesktop": {
			"true": [
				{
					"inverse": true,
					"breakpoint": "desktop",
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
			"false": [
				{
					"inverse": true,
					"breakpoint": "desktop",
					"variable": {
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		},
		"wrapperHideTablet": {
			"true": [
				{
					"inverse": true,
					"breakpoint": "desktop",
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
			"false": [
				{
					"inverse": true,
					"breakpoint": "desktop",
					"variable": {
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		}
	}
}
```

**Output**
```css
.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
	--wrapper-display: var(--wrapper-display-type, grid);
}
@media(max-width: 1920px) {
	.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--wrapper-display: none;
	}
}
@media(max-width: 1279px) {
	.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
		--wrapper-display: var(--wrapper-display-type, grid);
	}
}

```

**Example 2**
```json
{
	"componentName": "wrapper",
	"title": "Wrapper",
	"componentClass": "wrapper",
	"attributes": {
		"wrapperHideLarge": {
			"type": "boolean",
			"default": false
		},
		"wrapperHideDesktop": {
			"type": "boolean"
		},
		"wrapperHideTablet": {
			"type": "boolean"
		}
	},
	"responsiveAttributes": {
		"wrapperHide": {
			"large": "wrapperHideLarge",
			"desktop": "wrapperHideDesktop",
			"tablet": "wrapperHideTablet"
		}
	},
	"variables": {
		"wrapperHide": {
			"true": [
				{
					"inverse": true,
					"variable": {
						"wrapper-display": "none"
					}
				}
			],
			"false": [
				{
					"inverse": true,
					"variable": {
						"wrapper-display": "var(--wrapper-display-type, grid)"
					}
				}
			]
		},
		"wrapperHideLarge": {
			"true": [
				{
					"inverse": true,
					"variable": {
						"wrapper-display": "block",
						"wrapper-opacity": 0
					}
				}
			],
		}
	}
}
```

**Output**
```css
.wrapper[data-id='210c9bbf733ef5c6aa74c49168ac29a7'] {
	--wrapper-display: none;
	--wrapper-display: block;
	--wrapper-opacity: 0;
}

```
