---
id: taxonomy
title: Taxonomy
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/custom-taxonomy)

Custom Taxonomy class is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Custom_Taxonomy\Base_Taxonomy` class. This is an abstract class.

## Example:

To create custom taxonomy:
1. make a new class `src/custom-taxonomy/class-blog-taxonomy.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * The Blog_Taxonomy specific functionality.
 *
 * @since   1.0.8
 * @package Eightshift_Boilerplate\Custom_Taxonomy
 */

declare( strict_types=1 );

namespace Eightshift_Boilerplate\Custom_Taxonomy;

use Eightshift_Libs\Custom_Taxonomy\Base_Taxonomy;

/**
 * Class Blog_Taxonomy
 */
class Blog_Taxonomy extends Base_Taxonomy {

  /**
   * Taxonomy slug costant.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const TAXONOMY_SLUG = 'blog-category';

  /**
   * Rest API Endpoint slug costant.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const REST_API_ENDPOINT_SLUG = 'blogs-categories';

  /**
   * Get the slug of the custom taxonomy
   *
   * @return string Custom taxonomy slug.
   *
   * @since 0.1.0
   */
  protected function get_taxonomy_slug() : string {
    return static::TAXONOMY_SLUG;
  }

  /**
   * Get the post type slug to use the taxonomy.
   *
   * @return string Custom post type slug.
   *
   * @since 0.1.0
   */
  protected function get_post_type_slug() : string {
    return 'post';
  }

  /**
   * Get the arguments that configure the custom taxonomy.
   *
   * @return array Array of arguments.
   *
   * @since 0.1.0
   */
  protected function get_taxonomy_arguments() : array {
    return [
      'hierarchical'      => true,
      'label'             => esc_html__( 'Blog Categories', 'eightshift-boilerplate' ),
      'show_ui'           => true,
      'show_admin_column' => true,
      'show_in_nav_menus' => false,
      'public'            => true,
      'show_in_rest'      => true,
      'query_var'         => true,
      'rest_base'         => static::REST_API_ENDPOINT_SLUG,
      'rewrite'           => array(
        'hierarchical'  => true,
        'with_front'    => false,
      ),
    ];
  }
}
```
