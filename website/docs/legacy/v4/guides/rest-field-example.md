---
id: rest-field-example
title: Field Example
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/master/src/rest)

REST Field class is located in `Eightshift Libs`. To extend it, use `use Eightshift_Libs\Rest\Base_Field` class. This is an abstract class.

## Example:

To create custom REST Field:
1. make a new class `src/rest-routes/fields/class-example-field.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * The class register field for example endpoint
 *
 * @since   1.0.0
 * @package Eightshift_Boilerplate\Rest_Routes\Fields
 */

 declare( strict_types=1 );

namespace Eightshift_Boilerplate\Rest_Routes\Fields;

use Eightshift_Libs\Rest\Base_Field;
use Eightshift_Libs\Rest\Callable_Field;

/**
 * Class Register Field
 */
class Example_Field extends Base_Field implements Callable_Field {

  /**
   * Method that returns field object type.
   * Object(s) the field is being registered to, "post"|"term"|"comment" etc.
   *
   * @return string|array
   *
   * @since 2.0.0 Added in the project
   */
  protected function get_object_type() : string {
    return 'post';
  }

  /**
   * Get the name of the field you want to register or override.
   *
   * @return string The attribute name.
   *
   * @since 2.0.0 Added in the project
   */
  protected function get_field_name() : string {
    return 'example-field-name';
  }

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.
   *
   * @since 2.0.0 Added in the project
   */
  protected function get_callback_arguments() : array {
    return [
      'get_callback' => [ $this, 'field_callback' ],
    ];
  }

  /**
   * Method that returns rest response
   *
   * @param object|array $object      Post or custom post type object of the request.
   * @param string       $attr        Rest field/attr string identifier from the second parameter of your register_rest_field() declaration.
   * @param object       $request     Full request payload – as a WP_REST_Request object.
   * @param string       $object_type The object type which the field is registered against. Typically first parameter of your register_rest_field() declaration.
   *
   * @return mixed If response generated an error, WP_Error, if response
   *               is already an instance, WP_HTTP_Response, otherwise
   *               returns a new WP_REST_Response instance.
   *
   * @since 0.8.0 Removing type hinting void for php 7.0.
   * @since 0.2.0 Removed type hinting from first argument because it can be object|array.
   * @since 0.1.0
   */
  public function field_callback( $object, string $attr, $request, string $object_type ) : string {
    return \rest_ensure_response( 'output data' );
  }
}

```

### Test in action

To test it in action for default boilerplate the link would be:

`domain.ext/wp-json/eightshift-boilerplate/v2/posts`.

This link will be different based on your project implementation.
