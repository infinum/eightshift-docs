---
id: columns-taxonomy
title: Taxonomy
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/columns/class-base-taxonomy-columns.php)

Taxonomy Column class is located in `Eightshift Libs`. To extend it use `Eightshift_Libs\Columns\Base_Taxonomy_Columns` class.

## Example:

To create custom taxonomy column:
1. make a new class `src/columns/class-example-taxonomy-column.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * Example_Taxonomy_Column class file
 *
 * @since 1.1.0
 * @package Eightshift_Boilerplate\Columns
 */

declare( strict_types=1 );

namespace Eightshift_Boilerplate\Columns;

/**
 * Class Example_Taxonomy_Column.
 */
class Example_Taxonomy_Column extends Base_Taxonomy_Columns {

  /**
   * Column name constant name.
   *
   * @var string
   */
  const COLUMN_NAME = 'example';

  /**
   * Get the slug of the taxonomy where the additional column should appear.
   *
   * @return array The name of the taxonomy.
   *
   * @since 2.0.5
   */
  protected function get_taxonomy_slug() : array {
    return [ 'category' ];
  }

  /**
   * Add additional taxonomy columns to the columns array.
   *
   * @param array $columns The existing column names array with default taxonomy columns (title, author, date etc.).
   *
   * @return array         Modified column names array.
   *
   * @since 2.0.5
   */
  public function add_column_name( array $columns ) : array {
    $columns[ static::COLUMN_NAME ] = esc_html__( 'Example', 'eightshift-boilerplate' );

    return $columns;
  }

  /**
   * Render the taxonomy column content in the custom taxonomy column
   *
   * @param  string $string      Blank string.
   * @param  string $column_name Name of the column.
   * @param  int    $term_id     Term ID.
   *
   * @return string The contetnt to display in the custom column.
   *
   * @since 2.0.5
   */
  public function render_column_content( string $string, string $column_name, int $term_id ) : string {
    if ( $column_name === static::COLUMN_NAME ) {
      echo 'column value';
    }
  }
}
```
