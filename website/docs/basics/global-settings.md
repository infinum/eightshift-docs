---
id: global-settings
title: Global Settings
sidebar_label: Global Settings
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)

Ok, this is the part that we are incredibly proud of. Did you know that you can pass values from the JSON manifest or some other file directly to SCSS? Yes, we had the same facial expression when we found out. For this, to work, we used Webpack and its excellent features.

> This feature comes only with the block setup.

So if you used the `init_theme` setup, you are all set; if not, please visit [blocks chapter](blocks) for more details.

## Why do we use this?

Because, with dynamic blocks, you must create your blocks. We got tired of copy/pasting styles from JavaScript/PHP/SCSS files. That is why we created this feature to define some global styles in one spot and use them in all three places.

## How does this work?

You have file `src/Blocks/manifest.json` that has a key called `globalVariables`. We use this key and build the SCSS maps that you can use in your style files.

Mind-blowing right?

To use it, write your style in the `manifest.json` under the `globalVariables` key, and you can use that variable in your style files like this:

```js
$base-col-number: global-settings(maxCols);
```

Keep in mind that the `global-settings` is a function that checks the `globalVariables` map and returns the value depending on the key provided.

For example, if you have something like this in your `manifest.json`:

```js
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

```js
$base-col-number: global-settings(maxCols);
```

the output will be: **12**

### Scenario 2:

You type this in you SCSS files:

```js
$gutters: global-settings(gutters);
```

the output will be a map that you need to loop or fetch individual files by `get-map-strict` or `get-map-deep` function:

```js
$gutters: (
  "none": "0",
  "default": "25px",
  "big": "50px"
);
```

so you can call it like this:

```js
width: get-map-strict($gutters, default);
```

### Scenario 3:

I want to output colors, but they don't follow the structure you mentioned before. Why is that?

Yes, colors are different because we use this manifest to output the colors to the Block Editors color palette, which is why colors are different. (Only colors are like this).

You type this in you scss files:

```js
$primary-color: global-settings(colors, primary),
$black-color: global-settings(colors, black),
```

the output will be:

```js
$primary-color: #3E3E3E;
$black-color: #000000;
```

so you use it the normal SCSS way:

```js
color: $primary-color;
background-color: $black-color;
```

> If you add/remove/change any value in the `manifest.json` file, please restart your Webpack watch because it won't recognize that change.
