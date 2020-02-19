---
id: fonts-icon
title: Icon font
---

Icons can be added as icon font and will be added in a similar way that the [custom fonts](fonts-custom) are added. The process of file preparation is a bit different.

__While icon font is the easiest method of managing and using a large library of icons, there are a number of reasons why it should not be used. Poor accessiblity, really noticable FOUT and styling inconsistencies are major downsides to icon fonts. There are a lot more benefits that come with using SVG components like: more styling options, usage flexibility and no impact to accessiblity of the website.__

## Icon font files setup

For generating icon font files we recommend using [Icomoon](https://icomoon.io/app/).

Icons, exported as `.svg`, will need to be imported in a new set. Once all SVG icons are present in a set and named properly, the icon font can be generated. It is also recommended that before downloading an icon font the option for generating preprocessor variables is selected.

Downloaded package will contain a few important files:
* `selection.json` - contains a snapshot of the whole icon font set and can be imported to update the whole icon set
* `variables.scss` - contains SCSS variables that map the name of the icon to it's character code.
* `style.scss` - contains helper classes to access specific icons.
* `fonts/icon-set-name.*` - Actual font files with multiple formats.

Place font files in `theme-name/assets/fonts` directory and import them the same way as other fonts. Recommended formats for icon fonts are `.svg` and `.woff`. Place the `selection.json` file in the same directory just as a reference for updating icon font set (no need to import it).

Variables and class names need to be included in some form of global SCSS file e.g. `theme-name/assets/styles/parts/shared` and you can change or rename them to fit your needs. The definition of the `@font-face` can be removed because we will be generating it using the [Font Magician](https://github.com/jonathantneal/postcss-font-magician), so we will get back to that later.

## Font Magician configuration for icon font

Icon font will be just another font family in Font Magician configuration. So give it a specific name that will be referenced in `font-family` rule and add the names of the font files.

```js
...
const postcssFontMagician = require('postcss-font-magician');

module.exports = {
  plugins: [
    ... // other postCss configs
    postcssFontMagician({
      custom: {
        ... // other font-family declarations and config
        'IconFontName': { // font-family declaration
          variants: {
            normal: {
              400: {
                url: {
                  woff: 'icon-font-name.woff',
                  svg: 'icon-font-name.svg',
                },
              },
            },
          },
        },
        ... // other font-family declarations
      },
   }),
  ],
};
```

Restart the build process to generate new `@font-face` rules.


## Using the icon font

Once Font Magician configuration is done new `font-family` definition will need to be added.
```scss
// Variable declared in a global variables .scss file.
$base-icon-family: `IconFontName`,

// Using the variable in .scss partial
.icon {
  font-family: $base-font-family;
  ...
}
```
