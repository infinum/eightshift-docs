---
id: rest-route-example
title: Route Example
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/master/src/rest)

To implement the new Rest API Route, you would need to do a few things, but for this example, we will use this folder structure:
```js

* src
  * class-main.php
  * rest
    * class-example-route.php

```
REST Route class is located in `Eightshift Libs`. To extend it, use `use Eightshift_Libs\Rest\Base_Route` class. This is an abstract class.

## Example:

To create custom REST Route:
1. make a new class `src/rest-routes/routes/class-example-route.php`.
2. implement all the methods provided in the example.
3. register the class inside the `class-main.php` file.
4. dump autoload.

```js
<?php
/**
 * The class register route for example endpoint
 *
 * @package Eightshift_Boilerplate\Rest
 */

namespace Eightshift_Boilerplate\Rest;

use Eightshift_Libs\Rest\Base_Route;
use Eightshift_Libs\Rest\Callable_Route;
use Eightshift_Libs\Core\Config_Data;

/**
 * Class Example_Route
 */
class Example_Route extends Base_Route implements Callable_Route {

  /**
   * Route slug
   *
   * @var string
   */
  const ENDPOINT_SLUG = '/custom-route-slug';

  /**
   * Instance variable of project config data.
   *
   * @var object
   */
  protected $config;

  /**
   * Create a new instance that injects classes
   *
   * @param Config_Data $config Inject config which holds data regarding project details.
   */
  public function __construct( Config_Data $config ) {
    $this->config = $config;
  }

  /**
   * Method that returns project Route namespace.
   *
   * @return string Project namespace for REST route.
   */
  protected function get_namespace() : string {
    return $this->config->get_project_routes_namespace();
  }

  /**
   * Method that returns project route version.
   *
   * @return string Route version as a string.
   */
  protected function get_version() : string {
    return $this->config->get_project_routes_version();
  }

  /**
   * Get the base url of the route
   *
   * @return string The base URL for route you are adding.
   */
  protected function get_route_name() : string {
    return static::ENDPOINT_SLUG;
  }

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.
   */
  protected function get_callback_arguments() : array {
    return [
      'methods'  => static::READABLE,
      'callback' => [ $this, 'route_callback' ],
    ];
  }

  /**
   * Method that returns rest response
   *
   * @param  \WP_REST_Request $request Data got from enpoint url.
   *
   * @return WP_REST_Response|mixed If response generated an error, WP_Error, if response
   *                                is already an instance, WP_HTTP_Response, otherwise
   *                                returns a new WP_REST_Response instance.
   */
  public function route_callback( \WP_REST_Request $request ) {

    return \rest_ensure_response( 'output data' );
  }
}

```

### Test in action

To test it in action for default boilerplate the link would be:

`domain.ext/wp-json/eightshift-boilerplate/v1/custom-route-slug`.

This link will be different based on your project implementation inside `src/class-config.php`.
