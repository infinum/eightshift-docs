---
id: blocks-render-block-view-helper
title: Render Block View Helper
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php)

Locate and return template part with passed attributes for a block.

### Usage

Inside your block view PHP file you'd write:

```js
$this->render_block_view(
  '/components/heading/heading.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'heading'    => $attributes['heading'] ?? [],
  ]
);
```

In the case you are using libs with dependency injection container, this should be handled by the library and the `render_block_view` method is provided in block view by default.
