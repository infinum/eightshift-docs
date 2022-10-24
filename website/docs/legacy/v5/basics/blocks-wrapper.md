---
id: blocks-wrapper
title: Wrapper
sidebar_label: Wrapper
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

The wrapper is our best and most powerful feature. In a nutshell, the wrapper is nothing more than a high order component (parent component).

When setting up block registration, we made it so that every block view (PHP part) passes through the wrapper component before it is registered. This gives us the ability to set multiple shared attributes in one component.

The wrapper is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an ability to add your custom attributes and fine-tune the wrapper to your project's needs. Here are some of the features:

> Some attributes are made responsive using the `Responsive` component, and you can control all attributes depending on the media breakpoints.

### wrapperUse

This attribute controls the usage of the wrapper component. It behaves the same way as described in [this chapter](blocks-component-in-block#i-dont-need-all-the-component-options-in-my-block).

### wrapperUseShowControl

This attribute controls whether you will see the options for block use in the block editor. It behaves the same way as described in [this chapter](blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block).

### wrapperUseSimple

We wrapped some of the options in a specific condition and we call it `wrapperUseSimple`. In general, this attribute is set to `true` when you only want the simplified options on your block. Natively, it is used inside all of the inner blocks in the column block because we don't need wrappers inside wrappers inside wrappers (and so on). It's a good rule of thumb to use a simple wrapper in all of the inner blocks.

### wrapperUseSimpleShowControl

This attribute controls whether you are going to see options in the block editor to use the simple option. It behaves the same way as described in [this chapter](blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block).

### wrapperDisable

This attribute disables the wrapper completely. When this attribute is set to `true`, you will not have any wrapper options in your block.

### wrapperParentClass

This attribute is interesting to use if, for example, you have a carousel block with inner blocks. To provide the markup necessary for the carousel script to work, you need to add some items selector (a div). With this key, you can pass a parent item class, and all of your items will be wrapped with this selector and a class.

### wrapperId

It is used if you want to provide some identifier for a specific block.

### wrapperAnchorId

It is used if you want to use the section as a scroll to option. Initially, it is designed so the scroll is moved up by the size of your fixed header size. You can change this value according to your project needs.

### wrapperBackgroundColor

Controls the background color of your sections. You can change it by providing the colors registered in the block editor's color palette.

### wrapperWidth (Responsive)

Defines the width of the content (block) inside of the wrapper. It behaves by a grid of 12 (default), and it starts from the left edge.

### wrapperOffset (Responsive)

The same as the width, but this attribute controls the offset (margin) from the left of your wrapper.

### wrapperContainerWidth (Responsive)

This attribute defines your block's container width, and on that container, wrapper width and wrapperContainerWidth will be applied. You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperGutter (Responsive)

Controls the left/right spacing for the content (block). You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperSpacingTop (Responsive)

Moves the spacing from the top by an increment of 10px. It uses `margin-top` to set a spacing, background color **will not be applied to this attribute**. You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperSpacingBottom (Responsive)

Moves the spacing from the bottom by an increment of 10px. It uses `margin-bottom` to set a spacing, background color **will not be applied to this attribute**. You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperSpacingTopIn (Responsive)

Moves the spacing from the top by an increment of 10px. It uses `padding-top` to set a spacing, background color **will be applied to this attribute**. You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperSpacingBottomIn (Responsive)

Moves the spacing from the bottom by an increment of 10px. It uses `padding-bottom` to set a spacing, background color **will be applied to this attribute**. You can define these values in the wrapper's manifest and the global manifest settings.

### wrapperDividerTop (Responsive)

This attribute adds a divider on the top of the section. The spacing of the divider from the content is set by `wrapperSpacingTopIn` attributes.

### wrapperDividerBottom (Responsive)

This attribute adds a divider at the bottom of the section. The spacing of the divider from the content is set by `wrapperSpacingBottomIn` attributes.

### wrapperHide (Responsive)

Controls whether the section will be shown on a specific breakpoint.

> **Important note**: all responsive options are made in `desktop` first way for the block editor because every editor wants to style these firsts. All of the responsive attributes are applied from the large to the mobile breakpoint. So if you set the tablet values, it will be applied to the tablet and mobile breakpoints.
