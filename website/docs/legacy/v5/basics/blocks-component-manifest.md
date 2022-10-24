---
id: blocks-component-manifest
title: Component Manifest
sidebar_label: Component Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

A component manifest is a bit different than the block manifest. The main difference is that the component manifest is a fully custom feature, and it is only here to provide a way to store configuration data and share it with multiple files in your project.

### Example

```json
{
  "componentName": "heading",
  "title": "Heading",
  "componentClass": "heading",
  "example": {
    "attributes": {
      "headingContent": "This is heading",
      "headingLevel": 2,
      "headingSize": "default",
      "headingUse": true
    }
  },
  "attributes": {
    "headingContent": {
      "type": "string"
    },
    "headingLevel": {
      "type": "integer",
      "default": 2
    },
    "headingSize": {
      "type": "string",
      "default": "default"
    },
    "headingUse": {
      "type": "boolean",
      "default": true
    }
  },
  "options": {
    "sizes": [
      {
        "label": "Default (30px)",
        "value": "default"
      },
      {
        "label": "Big (50px)",
        "value": "big"
      }
    ],
    "aligns": [
      "left",
      "center",
      "right"
    ],
    "colors": [
      "primary",
      "black"
    ]
  },
  "components": {}
}
```

### componentName

This key is the most important one. We use this key to specify the component attributes prefix. When it's used correctly, we are able to change the attributes prefix depending on the component name passed from the parent component or block.

### title

This key is used to provide the label for all your component options and provide the storybook's automatic story title.

### componentClass

These keys are used to provide a single point of reference for a component name. You'll use this key to provide a prefix for all the CSS selectors in your component.

### example

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.

### attributes

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.
All attributes in the component must begin with the exact same prefix as it is defined in the `componentName`.

For example:

```json
{
  "componentName": "heading",
  "attributes": {
		"headingContent": {
			"type": "string"
		},
		"headingLevel": {
			"type": "integer",
			"default": 2
		}
	}
}

or

  "componentName": "intro",
  "attributes": {
		"introContent": {
			"type": "string"
		},
		"introLevel": {
			"type": "integer",
			"default": 2
		}
	}
}
```

### options

These keys are used to provide a single point of reference for component options used in the options part. If you have a `SelectControl` component or a `ColorSelector`, you can set all your options here and use those options in the options section and story for mocking components.

### components

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.
