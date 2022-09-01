---
id: blocks-attributes
title: Attributes
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/)

If you were to reference the native [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/) about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes.

The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the `setAttributes` method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes.

You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance.

Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously.

### Structure 

All attributes in the block/component must begin with the exact same prefix as it is defined in the `blockName` or `componentName`. The reason behind this naming standard is that our helpers can automatically resolve and know what prefix to use when renaming the component name in the dependency tree. For more details about this feature please check [this chapter](blocks-component-in-block).

Block example:
```json
{
  "blockName": "heading",
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
```

or

```json
{
  "blockName": "intro",
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

Component example:
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
```

or

```json
{
  "componentName": "description",
  "attributes": {
    "descriptionContent": {
      "type": "string"
    },
    "descriptionLevel": {
      "type": "integer",
      "default": 2
    }
  }
}
```

If you have a block/component that contains multiple words you should name it with a dash just like the block/component folder name, but the attributes must follow the `camelCase` naming standard like this:

```json
{
  "componentName": "intro-heading",
  "attributes": {
    "introHeadingContent": {
      "type": "string"
    },
    "introHeadingLevel": {
      "type": "integer",
      "default": 2
    }
  }
}
```
