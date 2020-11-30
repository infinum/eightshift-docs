---
id: blocks-component-in-block
title: Component In Block
sidebar_label: Component In Block
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Blocks and components go perfectly together because they are made this way. We simplified this as much as possible but there always a few things you need to do manually.

Try to think of your development process in this way:

- Each component must be standalone and not depend on and different components (sometimes this is not possible but keep this to a minimum).
- All components must not be aware of the layout it is used in.
- You don't add global styles as you did in Bootstrap before.
- You should define all headings in a heading component, and everywhere you have a heading, use this component and not a new implementation of it. (this is an example, but this implies to every component).
- You can have multiple heading components in one block.


### I want to use one heading component in my block.

If you have heading component with this attributes:

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

in your blocks attributes object, you will now have these keys:

```js

// Attributes from component.
"headingContent": "",
"headingLevel": 2,
"headingSize": "default",

// Attributes from a block.
"content": "test",
```

As you see in the example, you can merge components attributes in your block attributes. Keep in mind that with the provided example, the attributes from the component will be injected in the block attributes with the same name as it is defined in the components manifest.

### I want to use one heading and paragraph component in my block.

### I want two heading components in my block.

### I want to override a default attribute of a component in a block.

### I want to use a component that used more components (componentsCeption).

### I don't need all the component options in my block.

### I don't want my editor to be able to change components options in my block.
