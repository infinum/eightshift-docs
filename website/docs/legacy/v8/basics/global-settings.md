---
id: global-settings
title: Global Settings
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

:::note
This chapter is only relevant in setups that don't use CSS variables. If you are using CSS variables please skip to the [Blocks Styles chapter](blocks-styles).
:::

Ok, this is the part that we are incredibly proud of. Did you know that you can pass values from the JSON manifest or some other file directly to SCSS? Yes, we had the same facial expression when we found out. For this to work, we used Webpack and its excellent features.

:::caution :es-hide-title:
This feature comes only with the block setup.
:::

If you used our `wp boilerplate init theme` command, you are all set. If not, please visit the [blocks chapter](blocks) for more details.

## Why do we use this?

Because, with dynamic blocks, you must create your blocks. We got tired of copy/pasting styles from JavaScript/PHP/SCSS files. That is why we created this feature to define some global styles in one spot and use them in all three places.

## How does this work?

You have the file `src/Blocks/manifest.json` that has a key called `globalVariables`. We use this key and build the SCSS maps that you can use in your style files.

Mind-blowing, right?

To use it, write your style in the `manifest.json` under the `globalVariables` key, and you can use that variable in your style files like this:

```scss
$base-col-number: global-settings(maxCols);
```

Keep in mind that the `global-settings` is a function that checks the `globalVariables` map and returns the value depending on the key provided.

For example, if you have something like this in your `manifest.json`:

```json
{
  "globalVariables": {
    "maxCols": 12,
    "gutters": {
      "none": "0",
      "default": "25px",
      "big": "50px"
    },
    "colors": [
      {
        "name": "Primary",
        "slug": "primary",
        "color": "#3E3E3E"
      },
      {
        "name": "Black",
        "slug": "black",
        "color": "#000000"
      },
    ]
  }
}
```

### Scenario 1:

You type this in you SCSS files:

```scss
$base-col-number: global-settings(maxCols);
```

the output will be: **12**

### Scenario 2:

You type this in you SCSS files:

```scss
$gutters: global-settings(gutters);
```

the output will be a map that you need to loop or fetch individual files using `get-map-strict` or `get-map-deep` function:

```scss
$gutters: (
  "none": "0",
  "default": "25px",
  "big": "50px"
);
```

so you can call it like this:

```scss
width: get-map-strict($gutters, default);
```

### Scenario 3:

"I want to output colors, but they don't follow the structure you mentioned before. Why is that?"

Yes, colors are different because we use this manifest to output the colors to the block editors' color palette. Only the colors are like this.

Type this into your SCSS files:

```scss
$primary-color: global-settings(colors, primary),
$black-color: global-settings(colors, black),
```

The output will be:

```scss
$primary-color: #3E3E3E;
$black-color: #000000;
```

so you use it the normal SCSS way:

```scss
color: $primary-color;
background-color: $black-color;
```

:::note
If you add/remove/change any value in the `manifest.json` file, please restart your Webpack watch because it won't recognize that change.
:::
