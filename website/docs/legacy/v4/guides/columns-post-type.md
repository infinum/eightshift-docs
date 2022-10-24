---
id: columns-post-type
title: Post Type
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/columns/class-base-post-type-columns.php)

Post Type Column class is located in `Eightshift Libs`. To extend it use `Eightshift_Libs\Columns\Base_Post_Type_Columns` class.

## Example:

To create custom column:
1. make a new class `src/columns/class-example-column.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * Example_Column class file
 *
 * @since 1.1.0
 * @package Eightshift_Boilerplate\Columns
 */

declare( strict_types=1 );

namespace Eightshift_Boilerplate\Columns;

/**
 * Class Example_Column.
 */
class Example_Column extends Base_Post_Columns {

  /**
   * Column name constant name.
   *
   * @var string
   */
  const COLUMN_NAME = 'example';

  /**
   * Get the slug of the post type where the additional column should appear.
   *
   * @return array The name of the post type.
   */
  protected function get_post_type_slug() : array {
    return [ 'post' ];
  }

  /**
   * Add additional post columns to the columns array.
   *
   * @param array $columns The existing column names array with default post columns (title, author, date etc.).
   * @return array         Modified column names array.
   */
  public function add_column_name( array $columns ) : array {
    $columns[ static::COLUMN_NAME ] = esc_html__( 'Example', 'eightshift-boilerplate' );

    return $columns;
  }

  /**
   * Render the post column content in the custom post column
   *
   * @param  string $column_name The name of the column to display.
   * @param  int    $post_id     The current post ID.
   * @return void
   */
  public function render_column_content( string $column_name, int $post_id ) : void {
    if ( $column_name === static::COLUMN_NAME ) {
      echo 'column value';
    }
  }
}
```
