---
id: components-color-palette
title: Color Palette
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/components/color-palette-custom/color-palette-custom.js)

This is a custom React component that renders a custom color picker exactly the same as the native block editor component, but on the `save` method in the attributes, we save the color name and not the color hex value.

## Usage

```js
import { ColorPaletteCustom } from 'EightshiftComponentColorPalette';

{onChangeStyleColor &&
  <ColorPaletteCustom
    label={__('Heading Color', 'eightshift-boilerplate')}
    colors={[
      {
        "name": "scarlet",
        "color": "#D8262C"
      },
      {
        "name": "guard",
        "color": "#C00100"
      },
    ]}
    value={styleColor}
    onChange={onChangeStyleColor}
  />
}
```

### Options

All the options are the same as in the native block editor component that you can see [here](https://developer.wordpress.org/block-editor/components/color-palette/).
