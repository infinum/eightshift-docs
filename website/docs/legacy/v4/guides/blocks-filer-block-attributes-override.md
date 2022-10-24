---
id: blocks-filter-block-attributes-override
title: Filter Attributes Override
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php)

This filter gives you the ability to hook your changes to block/wrapper attributes after they are registered in the block editor but before they are rendered in React.

The usage of this method is vast. You can, for example, use it to provide different block/wrapper defaults depending on the post type. For example, you have a button block that you want to have the default color red, but on the post type `post`, you want that button to be black by default. Using this hook, you can easily do this.

> This method can only change the default values of the attributes. Once the value is saved in the database and it is different from the default, it will stay in the database, and all these changes won't apply to it.

## Example

If you haven't already, create a new class in a file `src/blocks/class-blocks.php` and extend the `Eightshift_Libs\Blocks\Blocks` class from the lib.

How to extend a class [check here](extending-classes).

Then in the filter provide a callback method that contains the overrides.

```js
  /**
   * Register all the hooks
   *
   * @since 1.0.0
   *
   * @return void
   */
  public function register() {
    parent::register();

    add_filter( $this->config->get_config( static::BLOCK_ATTRIBUTES_FILTER_NAME ), [ $this, 'override_wrapper' ] );
  }

  /**
   * Override wrapper on all blocks.
   *
   * @param array $attr Array of blocks details.
   * @return array
   */
  public function override_wrapper ( array $attr ) : array {

    if ( get_post_type() === 'post' ) {
      $attr['styleBackgroundColor']['default'] = 'black';
    }

    return $attr;
  }
```
