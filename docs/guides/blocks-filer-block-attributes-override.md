---
id: blocks-filter-block-attributes-override
title: Filter Attributes Override
---

This filter gives you and ability to hook you changes to blocks/wrapper attributes after it is registered in the block editor but before it is rendered in React.

The usage of this method is vast. You can, for example, use it to provide different blocks/wrapper defaults depending on the post type. For example, you have a button block that you want to be default colour red but on post type `post`, you want that button to be black by default. Using this hook, you can easily do this.

> This method can only change the default values of the attributes. Once the value is saved in the database and it is different from the default, it will stay in the database, and all these changes will not apply to it.


## Example

If you haven't already created a new class src/blocks/class-blocks.php and extend `Eightshift_Libs\Blocks\Blocks` class from the lib.

Hot to extend a class [check here](extending-classes).

Then in the filter, provide a callback method that contains overrides.

```php
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
  public function override_wrapper ( $attr ) : array {

    if ( get_post_type() === 'post' ) {
      $attr['styleBackgroundColor']['default'] = 'black';
    }

    return $attr;
  }
```
