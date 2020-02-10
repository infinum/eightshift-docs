---
id: libs-example-custom-post-type
title: Register Custom Post Type
---

When working on a WordPress project it is possible that, at one point, you will need to register a Custom Post Type.

In that case, we have prepared an easy way for you to register a new post type by following these steps with the following code example:

First we will setup our folder structure:

### Folder structure

```php

* src
  * class-main.php
  * custom-post-type
    * class-example.php

```
Files containing a class should be named `class-{classname}.php` and there should always be only one class per file.

## Follow these steps:
* Create a new folder inside the `src` folder called `custom-post-type`. This is the place where you will hold all your classes for registering custom post types, Or put this in a place you think it would suit your project best.
* Let's call our first custom post type `Projects`. Create a file called the same as your custom post type, in this case, `class-projects.php`.
* Copy this example and update it to your needs.
* Register this new class in `class-main.php` inside `get_service_classes` method.
* In terminal run `composer dump-autoload`.

### Class-projects.php

```php

<?php
/**
 * File that holds class for "Projects" custom post type registration.
 *
 * @package Eightshift_Boilerplate\Custom_Post_Type
 */

namespace Eightshift_Boilerplate\Custom_Post_Type;

/**
 * File that holds base abstract class for custom post type registration.
 */
use Eightshift_Libs\Custom_Post_Type\Base_Post_Type;

/**
 * File containing label generator class.
 */
use Eightshift_Libs\Custom_Post_Type\Label_Generator;

/**
 * Class Projects.
 */
class Projects extends Base_Post_Type {

  /**
   * Post type slug constant.
   *
   * @var string
   */
  const POST_TYPE_SLUG = 'projects-type';

  /**
   * Pretty slug for the custom post type.
   *
   * @var string
   */
  const POST_TYPE_URL_SLUG = 'projects';

  /**
   * Rest API Endpoint slug constant.
   *
   * @var string
   */
  const REST_API_ENDPOINT_SLUG = 'projects';

  /**
   * Capability type for projects post type.
   *
   * @var string
   */
  const POST_CAPABILITY_TYPE = 'post';

  /**
   * Location of menu in sidebar.
   *
   * @var int
   */
  const MENU_POSITION = 20;

  /**
   * Set menu icon.
   *
   * @var string
   */
  const MENU_ICON = 'dashicons-analytics';

  /**
   * Get the slug to use for the Projects custom post type.
   *
   * @return string Custom post type slug.
   */
  protected function get_post_type_slug() : string {
    return self::POST_TYPE_SLUG;
  }

  /**
   * Get the arguments that configure the Projects custom post type.
   *
   * @return array Array of arguments.
   */
  protected function get_post_type_arguments() : array {

    $nouns = [
      Label_Generator::SINGULAR_NAME_UC => esc_html_x( 'Project', 'Projects post uppercase singular name', 'eightshift-boilerplate' ),
      Label_Generator::SINGULAR_NAME_LC => esc_html_x( 'project', 'Projects post lowercase singular name', 'eightshift-boilerplate' ),
      Label_Generator::PLURAL_NAME_UC => esc_html_x( 'Projects', 'Projects post uppercase plural name', 'eightshift-boilerplate' ),
      Label_Generator::PLURAL_NAME_LC => esc_html_x( 'projects', 'Projects post lowercase plural name', 'eightshift-boilerplate' ),
    ];

    return [
      'label'              => $nouns[ Label_Generator::SINGULAR_NAME_UC ],
      'labels'             => ( new Label_Generator() )->get_generated_labels( $nouns ),
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'query_var'          => true,
      'capability_type'    => self::POST_CAPABILITY_TYPE,
      'has_archive'        => true,
      'rewrite'            => [ 'slug' => static::POST_TYPE_URL_SLUG ],
      'hierarchical'       => false,
      'menu_icon'          => static::MENU_ICON,
      'menu_position'      => static::MENU_POSITION,
      'supports'           => [ 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ],
      'show_in_rest'       => true,
      'rest_base'          => static::REST_API_ENDPOINT_SLUG,
    ];
  }
}

```

### Class-main.php

```php

// Add this to the top of the file.
use Eightshift_Boilerplate\Custom_Post_Type;

// Add this inside `get_service_classes` method.
Custom_Post_Type\Projects::class,

```