---
id: blocks-component-in-block
title: Component In Block
sidebar_label: Component In Block
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Blocks and components work perfectly together because they are made that way. We simplified this as much as possible but there always a few things you need to do manually.

Try to think of your development process in this way:

- Each component must be standalone and ideally not depend on any other components (sometimes this is not possible but keep this to a minimum).
- Components must not be aware of the layout they are used in.
- No global styles. Instead all styles should be contained to the block. For more details check [this link](writing-styles).
- You should define all heading variations in a `heading` component. Then use this component everywhere you have a heading instead of writing a new implementation. In practice: don't do `<h2>$heading</h2>` but render the `heading` component instead using the helpers defined in the [helpers section](). (Heading is an example, but this implies to every component).
- You can have multiple heading components in one block.

### I want to use one heading component in my block.

If you have a heading component with these attributes:


`src/Components/heading/manifest.json`
```js
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

`src/Blocks/jumbotron/manifest.json`

```js
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

in your block attributes object, you will now have these keys:

```js

// Attributes from the component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "default",

// Attributes from the block.
"content": "test",
```

As you see in the example, you can merge components attributes in your block attributes. Keep in mind that with the provided example, the attributes from the component will be injected in the block attributes with the same name as it is defined in the components manifest.

### I want to use one heading and paragraph component in my block.

### I want two heading components in my block.

### I want to override a default attribute of a component in a block.

### I want to use a component that used more components (componentsCeption).

### I don't need all the component options in my block.

### I don't want my editor to be able to change components options in my block.
