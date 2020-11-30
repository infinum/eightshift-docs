---
id: blocks-component-manifest
title: Component Manifest
sidebar_label: Component Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Component manifest is a bit different than a block manifest. The main difference is that components manifest is a fully custom feature, and it is only here to provide a way to store configuration data and share it with multiple files in your project.

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
      "type": "int",
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

This key is not generally used anywhere. We wanted some consistency with the block manifest.

### title

This key is used to provide the label for all your components options and provide the storybook's automatic story title.

### componentClass

These keys are used to provide a single point of reference for a component name. You use this key to provide a prefix for all css selectors in your component.

### example

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.

### attributes

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.

### options

These keys are used to provide a single point of reference for component options used in the options part. If you have a `SelectControl` component or a `ColorSelector`, you can set all your options here and use those options in the options section and story for mocking components.

### components

The same as in the blocks manifest. Please check [this chapter](block-manifest) for more details.
