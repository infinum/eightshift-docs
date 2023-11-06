---
id: helpers-javascript
title: JavaScript
sidebar_label: JavaScript
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

## camelize

Returns a camel-cased string.

* @param string string Add string to convert.

**Usage:**

```js
import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';

camelize('New super Test-title');
```

**Output:**

```js
newSuperTestTitle
```

## checkAttr

Checks whether the attributes exist in the attributes list. If the value is not set, it checks for the default value. If the default value is not set, it adds a fallback value depending on the type, or if `undefinedAllowed` is set to `true`, it sets it to `undefined`.

* @param string  key Key to check.
* @param array   attributes Array of attributes.
* @param array   manifest Array of default attributes from manifest.json.
* @param string  componentName The real component name.
* @param boolean undefinedAllowed Allowed detection of undefined values.

**Usage:**

```js
	import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';

	checkAttr('buttonUse', attributes, manifest, componentName, undefinedAllowed);
```

## checkAttrResponsive

Map and check attributes for responsive object from `responsiveAttributes` property from manifest.

* @param string  keyName Key name to find in responsiveAttributes object.
* @param array   attributes Array of attributes.
* @param array   manifest Array of default attributes from manifest.json.
* @param string  componentName The real component name.
* @param boolean undefinedAllowed Allowed detection of undefined values.
* @throws \Exception If missing responsiveAttributes or keyName in responsiveAttributes.
* @throws \Exception If missing keyName in responsiveAttributes.
* @return mixed

**Manifest:**

```json
{
	"attributes": {
		"headingContentSpacingLarge": {
			"type": "integer",
			"variable": "default",
			"default": 10,
		},
		"headingContentSpacingDesktop": {
			"type": "integer",
			"variable": "default",
			"default": 5,
		},
		"headingContentSpacingTablet": {
			"type": "integer",
			"variable": "default",
			"default": 3,
		},
		"headingContentSpacingMobile": {
			"type": "integer",
			"variable": "default",
			"default": 1,
		}
	},
	"responsiveAttributes": {
		"headingContentSpacing": {
			"large": "headingContentSpacingLarge",
			"desktop": "headingContentSpacingDesktop",
			"tablet": "headingContentSpacingTablet",
			"mobile": "headingContentSpacingMobile"
		}
	}
}
```

**Usage:**

```js
	import { checkAttrResponsive } from '@eightshift/frontend-libs/scripts/helpers';

	checkAttrResponsive('headingContentSpacing', attributes, manifest, componentName, undefinedAllowed);
```

**Output:**

```js
[
	large: 10,
	desktop: 5,
	tablet: 3,
	mobile: 1,
]
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

Debounces the provided function. For more information, check [this blog post](https://davidwalsh.name/javascript-debounce-function).

* @param func Provided function to apply debounce.
* @param int wait Wait time for debounce.

**Usage:**

```js
	import { debounce } from '@eightshift/frontend-libs/scripts/helpers';

	debounce(() => {
		// callback function.
	}, 250);
```

## devices

Checks if your browser's navigator is a specific device.

**Usage:**

```js
	import { device } from '@eightshift/frontend-libs/scripts/helpers';

	device.iPhone();
```

## dynamicImport

Used to get (require) all the files using the `require.context` method. It will find all files recursively in the folder using a regex. The following example will require all assets/index.js files inside the custom folder, so there is no need to manually add the files to the build.

 * @param object paths All require.context patch to iterate.

**Usage:**

```js
	import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';

	dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
```

## elementChildrenHeight

Returns the height of the element measured by the height of its children.

* @param object element DOM element

**Usage:**

```js
import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';

elementChildrenHeight('.js-item');
```

**Output:**

```js
<div class="js-item" style="height: 100px"></div>
<div class="js-item" style="height: 100px"></div>
<div class="js-item" style="height: 100px"></div>
```

## escape-string

Takes the provided string and removes special characters. Characters that will be removed: `([;&,.+*~':"!^#$%@[\]()=>|]`.

* @param string $key Key to check.

**Usage:**

```js
	import { escapeString } from '@eightshift/frontend-libs/scripts/helpers';

	escapeString.escapeString('Special string');
```

## responsiveSelectors

Create responsive selectors used for responsive attributes.

Useful if you want to show how the responsive behavior looks in the editor.

* @param array   items        Array of breakpoints.
* @param string  selector     Selector for this breakpoint.
* @param string  parent       Parent block selector.
* @param boolean use_modifier If false, you can use this selector for visibility.

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

Returns BEM selector for HTML class and checks if the condition part is set.

* @param boolean condition Check condition.
* @param string  block BEM Block selector.
* @param string  element BEM Element selector.
* @param string  modifier BEM Modifier selector.
* @return string

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

## getOptionsColor

Use this hook to filter the global colors out of the component or block manifest

* @param array colors Array of colors to filter.

**Usage:**

```js
import { getOptions } from '@eightshift/frontend-libs/scripts/editor';

<ColorPaletteCustom
		label={
			<>
				<Icon icon={icons.color} />
				{__('Color', 'eightshift-frontend-libs')}
			</>
		}
		colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}
		value={headingColor}
		onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}
/>
```

## getOptions

Provides the ability to override component options from the parent block/component.
The components must have the same option names as attribute standard with `componentName` prefix.

* @param object manifest Original manifest from the component.
* @param string componentName Current componentName. This is changed depending on the passed componentName.
* @param string attribute Attribute name to check without componentName prefix. Value is auto camelCased.
* @param object options Options provided by the parent block/component.

**Usage:**

```js
import { getOptions } from '@eightshift/frontend-libs/scripts/editor';

<SelectControl
	label={
		<>
			<Icon icon={icons.size} />
			{__('Type', 'eightshift-frontend-libs')}
		</>
	}
	value={buttonType}
	options={getOptions(manifest, componentName, 'type', options)}
	onChange={(value) => setAttributes({ [`${componentName}Type`]: value })}
/>
```

## getPaletteColors

Use this hook to read editor-color-palette colors directly from WP built-in store.

* Requires WP => 5.3

**Usage:**

```js
	import { getPaletteColors } from '@eightshift/frontend-libs/scripts/editor';

	getPaletteColors();
```

## outputCssVariablesGlobal

Get global manifest.json and return `globalVariables` as CSS variables.

* @param array globalManifest Array of global variables data.

**Data:**
```js
const manifestGlobal = {
	"globalVariables": {
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
			}
		]
	}
};
```

**Usage:**

```js
import { getUnique } from '@eightshift/frontend-libs/scripts/editor';
import globalSettings from './../../manifest.json';

outputCssVariablesGlobal(globalSettings);
```

**Output:**

```js
<style>
	:root {
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

## outputCssVariables

Get component/block options and process them in CSS variables.

For detailed usage check [block styles](blocks-styles);

* @param array  $attributes Built attributes.
* @param array  $manifest Component/block manifest data.
* @param string $unique Unique key.
* @param array  $globalManifest Global manifest array.

## getUnique

Return unique ID for block processing.

**Usage:**
```js
import { getUnique } from '@eightshift/frontend-libs/scripts/editor';

getUnique();
```

**Output:**

```js
891273981374b98127419287
```

## overrideInnerBlockAttributes

Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block.

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

Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block.

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

## props

Output only attributes that are used in the component and remove everything else.

* @param object  attributes Object of attributes from block/component.
* @param string  realName Old key to use, generally this is the name of the block/component.
* @param string  newName New key to use to rename attributes.
* @param boolean isBlock Check if helper is used on block or component.
* @param string  globalManifestData If global manifest is not provided use the default path.

**Data:**
```js
const attributes = {
	buttonColor: 'red',
	buttonSize: 'big',
	buttonIcon: 'blue',
	blockName: 'button',
	wrapperSize: 'big',
	wrapperType: 'normal',
};

const blockName = 'button';
const componentName = 'button';
```

**Usage:**

```js
import { props } from '@eightshift/frontend-libs/scripts/editor';

{...props(attributes, blockName, '', true)}

{...props(attributes, componentName)}

{...props(attributes, 'typography', componentName)}
```

**Output:**

```js
{
	buttonColor: 'red',
	buttonSize: 'big',
	buttonIcon: 'blue',
	blockName: 'button',
};

{
	buttonColor: 'red',
	buttonSize: 'big',
	buttonIcon: 'blue',
	blockName: 'button',
};

{
	typographyColor: 'red',
	typographySize: 'big',
	typographyIcon: 'blue',
};
```

## ucfirst

Converts the first letter of a string to uppercase.

**Usage:**

```js
	import { ucfirst } from '@eightshift/frontend-libs/scripts/editor';

	ucfirst('custom');
```
