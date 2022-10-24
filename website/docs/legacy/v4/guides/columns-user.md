---
id: columns-user
title: User
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/columns/class-base-user-columns.php)

User Column class is located in `Eightshift Libs`. To extend it use `Eightshift_Libs\Columns\Base_User_Columns` class.

## Example:

To create custom user column:
1. make a new class `src/columns/class-example-user-column.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * Example_User_Column class file
 *
 * @since 1.1.0
 * @package Eightshift_Boilerplate\Columns
 */

declare( strict_types=1 );

namespace Eightshift_Boilerplate\Columns;

/**
 * Class Example_User_Column.
 */
class Example_User_Column extends Base_User_Columns {

  /**
   * Column name constant name.
   *
   * @var string
   */
  const COLUMN_NAME = 'example';

  /**
   * Add additional user columns to the columns array.
   *
   * @param array $columns The existing column names array with default user columns (title, author, date etc.).
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
   * Render the user column content in the custom user column
   *
   * @param string $output      Custom column output. Default empty.
   * @param string $column_name Column name.
   * @param int    $user_id     ID of the currently-listed user.
   *
   * @return string             Output based on the column name.
   *
   * @since 2.0.5
   */
  public function render_column_content( string $output, string $column_name, int $user_id ) : string {
    if ( $column_name === static::COLUMN_NAME ) {
      echo 'column value';
    }
  }

  /**
   * Make user columns sortable
   *
   * @param  array $columns Array of columns.
   *
   * @return array          Modified array of columns.
   *
   * @since 2.0.5
   */
  public function sort_added_columns( array $columns ) : array {
    $columns[ static::COLUMN_NAME ] = static::COLUMN_NAME;

    return $columns;
  };
}

```
