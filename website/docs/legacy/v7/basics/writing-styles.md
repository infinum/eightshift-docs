---
id: writing-styles
title: Writing Styles
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0)

> This chapter is only relevant in setups that don't use CSS variables. If you are using CSS variables please skip to the [Blocks Styles chapter](blocks-styles) chapter.

Everyone says that writing styles is easy and that is usually doesn't require a lot of thinking. But, like everything in programming, if you don't think about it, the problems add up, and you end up with a headache.

Here are some of the recommendations that we use when writing our styles. It's also how we manage everything to be as modular as possible.

### Never use HEX color values in your files

Like in Bootstrap or any other front-end framework, you should never use hex color values in multiple places. You should assign that hex value to a variable and use that variable all over. That way, if you ever need to change the color, simply change the value in one place and it will be consistently applied all over the project.

You can read more about defining your colors in the [global settings](global-settings) chapter.

### Never use the actual color name as a variable name

You can name your variables whatever you like, but we recommend that you never use the actual color name as a variable name. It would be best if you used some generic variable name.

For example, you can call blue color r2d2-color. With this approach, if your designer chooses to change the project's color scheme at any point, you only need to change one variable value and you're done.

We like to use [this site](https://chir.ag/projects/name-that-color) for our color names. Also, we recommend using simple names. For instance, Cornflower Blue color would have `$base-corn-color` or `$base-flower-color` variable name.

### All external variables must go to a components map

We use maps for a lot of stuff in our boilerplate. The reason is that:

* maps can contain multiple variables in one place,
* you don't need to write multiple variables at the top,
* you can nest functionalities,
* you can have multiple values with the same name and just change the top-level map,
* etc.

We also have many helpers, which you can check in our [SASS docs](/docs/basics/library).

In the component map, you should only add things that you will reuse in your component.

**Examples:**

A simple variable in a map:

```scss
$social-links: (
  icon-color: global-settings(colors, black),
);

.social-links {
  color: map-get-strict($social-links, icon-color);
}
```

Nested variables in a map:

```scss
$social-links: (
  colors: (
    dark: global-settings(colors, black),
    light: global-settings(colors, white),
  ),
  sizes: (
    small: 10px,
    big: 20px,
  )
);

.social-links {
  color: map-get-deep($social-links, colors, dark);

  &--light {
    color: map-get-deep($social-links, colors, light);
  }

  &__sizes {
    font-size: map-get-deep($social-links, sizes, small);


    &--big {
      font-size: map-get-deep($social-links, sizes, big);
    }
  }
}
```

### Never mix multiple maps in a single component

You want all your styles to be contained to a single component and not dependent on external components. Sometimes this can't be avoided.

In that case, you should define a key in the component variable for the external map and define it like this:

**Example:**

External map in `assets/styles/parts/utils/_z-index.scss`:

```scss
$zindex: (
  header: 100,
  drawer: 99,
  overlay: 98,
);
```

Your component:

```scss
$header: (
  index: map-get-strict($zindex, header),
);

.header {
  z-index: map-get-strict($header, index);
}
```

### Where can I define global typography for all my blocks/components?

Well, nowhere. Try to move your way of thinking from Bootstrap or any other front-end framework where you define global typography in one place.

Why is that? Because we use component-based development and you should think in that way. Each component is responsible for its own styles.

You should define styles with all sizes, colors, and variations for the heading component and reuse that component wherever you need any kind of heading. The same applies to any other component. This is why you don't need global typography, styles, etc.

Global styles and variables are only used for things you want to share across components (that should be reduced to a minimum).
