---
id: components-color-palette
title: Color Palette
---

This is a custom react component the renders a custom color picker exactly the same as native block editor component but on save method in attributes we save color name and not color hex.

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

All options are the same as a native block editor component that you can see [here](TODO).

