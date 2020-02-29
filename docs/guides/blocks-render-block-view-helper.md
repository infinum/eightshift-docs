---
id: blocks-render-block-view-helper
title: Render Block View Helper
---

Locate and return template part with passed attributes for a block.

Helper is located in the [eightshift-libs](https://github.com/infinum/eightshift-libs/blob/935e7bc777094d7518950316a45061f7675cf7ed/src/blocks/class-blocks.php#L295) library.

### Usage

Inside your block view PHP file you'd write:

```php
$this->render_block_view(
  '/components/heading/heading.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'heading'    => $attributes['heading'] ?? [],
  ]
);
```

In the case you are using libs with dependency injection container, this should be handled by the library and the `render_block_view` method is provided in block view by default.
