---
id: blocks-component-in-block
title: Component in a Block
sidebar_label: Component in a Block
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Blocks and components work perfectly together because they are made that way. We simplified this as much as possible but there always a few things you need to do manually.

Try to think of your development process in this way:

- Each component must be standalone and ideally not depend on any other components (sometimes this is not possible but keep this to a minimum).
- Components must not be aware of the layout they are used in.
- No global styles. Instead, all styles should be contained to the block/component. For more details, check [this link](writing-styles).
- You should define all heading variations in a `heading` component. You can then use this component everywhere you have a heading instead of writing a new implementation. In practice: don't do `<h2>$heading</h2>` but render the `heading` component instead using the helpers defined in the [helpers section](). The heading is just an example, but this applies to every component.
- You can have multiple heading components in one block.

### I want to use one heading component in my block.

If you have a heading component with these attributes:

`src/Blocks/components/heading/manifest.json`
```json
"attributes": {
	"headingContent": {
		"type": "string"
	},
	"headingLevel": {
		"type": "int",
		"default": 2
	},
	"headingSize": {
		"type": "string",
		"default": "default"
	},
}
```

and you want to use the heading component in the Jumbotron block, you can use it by adding a component's key in the Jumbotron block manifest like this:

`src/Blocks/custom/jumbotron/manifest.json`

```json
"attributes": {
	"content": {
		"type": "string"
		"default": "test",
	}
},
"components": {
	"heading": "heading"
}
```

In your block attributes object, you will now have these keys:

```json

// Attributes from the component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "default",

// Attributes from the block.
"content": "test",
```

As you can see in the example, you can merge component attributes in your block attributes. Keep in mind that, in the provided example, the components' attributes will be injected in the block attributes with the same name as defined in the components manifest.

### I want to use one heading and paragraph component in my block.

You can do this by following the same principle as before. Here is an example:

`src/Blocks/custom/jumbotron/manifest.json`

```json
"attributes": {
	"content": {
		"type": "string"
		"default": "test",
	}
},
"components": {
	"heading": "heading"
	"paragraph": "paragraph"
}
```

### I want two heading components in my block.

As you already saw in the previous examples, the heading key and value are the same in the components object. The key represents the `components attributes prefix`, and the value represents the `actual component name`.

If you want to use the heading component in your block, follow this example:

`src/Blocks/custom/jumbotron/manifest.json`

```json
"attributes": {
	"content": {
		"type": "string"
		"default": "test",
	}
},
"components": {
	"heading": "heading"
	"intro": "heading"
}
```

In your block attributes object, you will now have these keys:

```json

// Attributes from the first component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "default",

// Attributes from the second component.
"introContent": "",
"introLevel": 2,
"introSize": "default",

// Attributes from the block.
"content": "test",
```

### I want to override a default attribute of a component in a block.

We build all our attributes by merging attributes objects in this order:

* global attributes (global settings);
* wrapper attributes;
* component attributes; and
* block attributes.

By following the basic principle of merging objects, if you have two keys with the same name, the last one will always override the previous. Now that you know how attributes are built, you can follow this example for your answer.

If you have a heading component with these attributes:

`src/Blocks/components/heading/manifest.json`
```json
"attributes": {
	"headingContent": {
		"type": "string"
	},
	"headingLevel": {
		"type": "int",
		"default": 2
	},
	"headingSize": {
		"type": "string",
		"default": "default"
	},
}
```

and you want to override one or multiple default attributes from the heading component.

`src/Blocks/custom/jumbotron/manifest.json`

```json
"attributes": {
	"content": {
		"type": "string"
		"default": "test",
	},
	"headingSize": {
		"type": "string",
		"default": "small"
	}
},
"components": {
	"heading": "heading"
}
```

In your block attributes object, you will now have these keys:

```json

// Attributes from the component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "small", // changed in the block attributes.

// Attributes from the block.
"content": "test",
```

> Keep in mind that we handle the attributes data necessary to have multiple components in one block but you must provide the correct props inside your files to mock the custom attribute names. The best way to see how this is done is to check the [card block](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/custom/card).

### I want to use a component that uses more components (componentCeption).

For example, if you have a block called cards grid that uses a card component, that card component uses a heading component.

If you have a heading component with these attributes:

`src/Blocks/components/heading/manifest.json`
```json
"attributes": {
	"headingContent": {
		"type": "string"
	},
	"headingLevel": {
		"type": "int",
		"default": 2
	},
	"headingSize": {
		"type": "string",
		"default": "default"
	},
}
```

and you have a card component:

`src/Blocks/components/card/manifest.json`
```json
"attributes": {
	"superCard": {
		"type": "boolean"
		"default": true,
	},
},
"components": {
	"heading": "heading"
}
```

and you have a cards grid block:

`src/Blocks/custom/cards-grid/manifest.json`
```json
"attributes": {
	"content": {
		"type": "string"
		"default": "test",
	},
},
"components": {
	"card": "card"
}
```

in your block attributes object, you will now have these keys:

```json

// Attributes from the heading component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "default",

// Attributes from the card component.
"superCard": true,

// Attributes from the block.
"content": "test",
```

As you can see in the example, you have all the attributes from the card and heading component inside your card's grid block.

### I don't need all the component options in my block.

All our components come with a few common attributes that we recommend you also implement in your components. One of those attributes is `buttonUse`.

```json
"buttonUse": true,
```

This attribute is available in all three components (editor, toolbar, options). If set to **false**, it will remove this component from the DOM. This is useful if you want to hide all markup from the DOM.

For example, you have a Jumbotron block and a heading that you want to populate if necessary. If you add content to the heading, everything looks good. But if you don't add it, you'll still see a placeholder for that heading in the block editor. That affects how you perceive it, and a user may think this block will look like that on the front end (with the placeholder text). So if you have a component that you will not populate on some block, switch the toggle to false, and you will hide it from the DOM. This is useful for content editors.

### I don't want my editor to be able to change component options in my block.

Another attribute that you can use is `buttonShowControls`.

```json
"buttonShowControls": true,
```

This attribute is available in the options component only. You can't set it up via block editor, only from code. You would use it if you wanted to use a heading component and set all the defaults, without your content editor changing how the heading looks. It can add the heading content from the editor section without changing any of the options. You can set this option in the manifest or pass it manually via props.

### How do my example attributes behave when I use components in blocks?

Exactly the same way as attributes.

### I have a component name that has multiple strings in a name, will this work?

By multiple strings in a name we mean that component name has multiple words, for example, `jumbotron-cta`. The problem here is that we define components with dash and attributes with camelcase. That's why you have to fix this. We have provided you with a helper. The helper makes camelcase on all your component-name strings.

**Example:**

You have a component named `jumbotron-cta` and you want to use it in your block. As described on this page, you will create a `components` key in your `manifest.json` and use `jumbotron-cta`.

```json
{
	"components": {
		"jumbotron-cta": "jumbotron-cta"
	}
}
```

But in all places in your component where you use `setAttributes` you must use [camelize helper](https://github.com/infinum/eightshift-frontend-libs/blob/develop/scripts/helpers/camelize.js)

```js

import { camelize } from '@eightshift/frontend-libs/scripts/helpers';

<ToggleControl
	 label={'Custom Label'}
	 onChange={(value) => setAttributes({ [`${camelize(componentName)}Use`]: value })}
/>
```

### I have a component that I want to use manually

We created this cool way of importing attributes and loading components in your blocks or other components. However, that doesn't mean that you can't have instances where you have to load components manually. In that case, you have to provide all the attributes that you want to use manually. The attributes that you didn't provide will not be magically set from the manifest, but you can make your life easier and map it like this.

For example, you have a `card` component that you will use in the `featured-posts` block.

**featured-posts.php**
```php
// Fetch and parse manifest using custom helper.
$cardManifest = Components::getManifest(dirname(__DIR__, 2) . '/components/card');

echo wp_kses_post(
	Components::render(
		'card',
		[
			'headingColor' => $cardManifest['attributes']['headingColor']['default'],
			'headingSize' => $cardManifest['attributes']['headingSize']['default'],
			'headingWeight' => $cardManifest['attributes']['headingWeight']['default'],
			'headingContent' => __('Custom content for heading', 'textdomain'),

			'paragraphContent' => __('Custom content for paragraph', 'textdomain'),
			'paragraphSize' => $cardManifest['attributes']['paragraphSize']['default'],
		]
	)
);
```

### I want to limit which options are shown for components inside a block/component

Let's say you have a block that has a `Heading` component inside it.

The `Heading` has 10 text sizes and 5 colors, but for that block, only 2 colors and 3 text sizes are allowed.
To achieve this you must prepare your component to be able to use this feature:

1. Your component options must be named the same name as their attribute value. In the example, you can see that the options key for `typographySize` is the same name as in attributes.

```json
{
  "attributes": {
    "typographySize": {
      "type": "string",
      "default": "16-text-roman"
    },
    "typographyColor": {
      "type": "string",
      "default": "black",
      "variable": true,
      "color": true
    },
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
      },
      {
        "label": "52 Display",
        "value": "52-default"
      },
      {
        "label": "36 Text",
        "value": "36-text"
      }
    ],
    "typographyColor": [
      "black",
      "white",
      "grey100",
      "grey200"
    ]
  }
}
```

2. Each option in your component must have `getOptions` helper used in the prop that is used to provide options.

**SelectControl Example:**
```js
<SelectControl
  label={
    <>
      <Icon icon={icons.textSize} />
      {__('Text size', 'eightshift-boilerplate')}
    </>
  }
  value={typographySize}
  options={getOptions(manifest, componentName, 'size', options)}
  onChange={(value) => setAttributes({ [`${componentName}Size`]: value })}
/>
```

**ColorPaletteCustom Example:**
```js
<ColorPaletteCustom
  label={
    <>
      <Icon icon={icons.color} />
      {__('Color', 'eightshift-boilerplate')}
    </>
  }
  colors={getOptionColors(getOptions(manifest, componentName, 'color', options))}
  value={typographyColor}
  onChange={(value) => setAttributes({ [`${componentName}Color`]: value })}
/>
```

3. In the component/blocks that you are going to override options, you must provide an options prop that is going to override the default one.

**heading-options.js**
```js
<HeadingOptions
  options={options}
  // ...
/>
```

4. In the component/blocks that you are going to override options, you must provide the override in the `manifest.json` by following the same naming as in the component.

```json
{
  "options": {
    "headingSize": [
      "80-default",
      "52-default"
    ],
    "headingColor": [
      "black",
      "white"
    ]
  }
}
```

An this is it you are now able to override options from the parent block/component.

> Keep in mind that you can only override SelectControl, ColorPaletteCustom, and AlignmentToolbar.
