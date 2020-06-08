---
id: fonts-custom
title: Custom fonts
---
To add a custom font and generate `@font-face` rules in built CSS file we recommend using PostCSS plugin: [Font Magician](https://github.com/jonathantneal/postcss-font-magician). Before configuring Font Magician, font files need to be included in the build process.

## Font files setup

Font files should be placed in `theme-name/assets/fonts`. There are multiple web oriented font file formats. For majority of browsers only `.woff` format is enough (having it alongisde `.woff2` is even better), but if you plan to support older browsers (e.g. IE 10 and older) you must include `.eot` and `.svg` formats, as well.

Fonts, and all of their variations, need to be included in `index.js` file inside the `/fonts` directory:

```js
import './Font-Name-Variation.woff2';
import './Font-Name-Variation.woff';
```

After running the build process again, fonts will be placed in `/theme-name/public` directory and we can configure Font Magician to load them.

## Font Magician configuration

To install Font Magician run:
```shell
npm install postcss-font-magician --save-dev
```
or
```shell
yarn add postcss-font-magician --dev
```

In the root of the theme there is already a `postcss.config.js` file with [Autoprefixer](https://github.com/postcss/autoprefixer) enabled. To configure Font Magician it needs to be imported first and its configuration needs to be added to the existing one.

```js
...
const postcssFontMagician = require('postcss-font-magician');

module.exports = {
  plugins: [
    ... // other postCss configs
    postcssFontMagician({
      foundries: ['custom'],
      custom: {
        FontName: { // font-family declaration
          variants: {
            normal: { // font-style variation
              400: { // font-weight variation
                url: {
                  woff: 'Font-Name-Variation.woff',
                  woff2: 'Font-Name-Variation.woff2',
                },
              },
              ... // other font-weight variation of the same font-tyle
            },
            ... // other font-style variation of the same font-family
          },
        },
        ... // other font-family declarations
      },
    }),
  ],
};
```

There are other configuration options for including custom fonts using Font Magician and you can check them in the [font magician documentation](https://github.com/jonathantneal/postcss-font-magician#options)

Restart the build process to generate `@font-face` rules.

## Using the custom font

To use the custom font in a theme, simply declare a new `font-family` rule and assign it to the __font name__ from the Font Magician configuration. A better approach would be to save the specific `font-family` values to variables that can be reused:
```scss
// Variable declared in a global variables .scss file.
$base-font-family: `FontName`, sans-serif,

// Using the variable in .scss partial
body {
  font-family: $base-font-family;
  ...
}
```
