---
id: frontend-libs-instalation
title: Installation and Requirements
---

Implementing of this library inside your existing project is not that trivial.

That is why we created a boilerplate repository that incorporates this library. To see the detailed implementation and how it works in action check the [Eightshift Boilerplate repo](https://github.com/infinum/eightshift-boilerplate).

**In order to incorporate this lib inside your project you need to have:**

1. [Node.js](https://nodejs.org/en/) and [Composer](https://getcomposer.org/) installed on your system

**Implementation process:**

1. Install the frontend library and eightshift libs

    ```shell script
    npm install @eightshift/frontend-libs
    composer require infinum/eightshift-libs
    ```

2. If you have an existing Webpack config, look at how the config is set up in [Eightshift Boilerplate repo](https://github.com/infinum/eightshift-boilerplate/blob/develop/webpack.config.js) and merge any changes you have.

The `eightshift-libs` composer package contains a lot of useful abstract classes, interfaces and dependency injection container implementation that you can use in your project. 

### Examples

Inside your theme's `functions.php` you'd register a main class like this

```php
<?php
/**
 * Theme Name: Your Theme
 * Description: Your theme description
 * Author: You
 * Author URI: 
 * Version: 1.0.0
 * Text Domain: your-theme-namespace
 *
 * @package Your_Theme_Namespace
 *
 * @since 1.0.0
 */

declare( strict_types=1 );

namespace Your_Theme_Namespace;

/**
 * If this file is called directly, abort.
 *
 * @since 1.0.0
 */
if ( ! \defined( 'WPINC' ) ) {
  die;
}

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
require __DIR__ . '/vendor/autoload.php';

/**
 * Begins execution of the theme.
 *
 * Since everything within the theme is registered via hooks,
 * then kicking off the theme from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
( new Core\Main() )->register();
```

It's assumed that you'll have a `src` folder that contains a `class-main.php` file with a list of services that will be registered and handled by the dependency injection container (DIC) from the `eightshift-libs`

```php
<?php
/**
 * The file that defines the main start class.
 *
 * A class definition that includes attributes and functions used across both the
 * theme-facing side of the site and the admin area.
 *
 * @since   1.0.0
 * @package Your_Theme_Namespace\Core
 */

declare( strict_types=1 );

namespace Your_Theme_Namespace\Core;

use Eightshift_Libs\Core\Main as Lib_Core;
use Eightshift_Libs\Manifest as Lib_Manifest;
use Eightshift_Libs\Enqueue as Lib_Enqueue;
use Eightshift_Libs\I18n as Lib_I18n;
use Eightshift_Libs\Login as Lib_Login;
use Eightshift_Libs\Blocks as Lib_Blocks;

/**
 * The main start class.
 *
 * This is used to define admin-specific hooks, and
 * theme-facing site hooks.
 *
 * Also maintains the unique identifier of this theme as well as the current
 * version of the theme.
 *
 * @since 1.0.0
 */
class Main extends Lib_Core {

  /**
   * Get the list of services to register.
   *
   * A list of classes which contain hooks.
   *
   * @return array<string> Array of fully qualified class names.
   *
   * @since 1.0.0
   */
  protected function get_service_classes() : array {
    return [

      // Config.
      Config::class,

      // Manifest.
      Lib_Manifest\Manifest::class => [ Config::class ],

      // I18n.
      Lib_I18n\I18n::class => [ Config::class ],

      // Enqueue.
      Lib_Enqueue\Enqueue_Admin::class => [ Config::class, Lib_Manifest\Manifest::class ],
      Lib_Enqueue\Enqueue_Theme::class => [ Config::class, Lib_Manifest\Manifest::class ],
      Lib_Enqueue\Enqueue_Blocks::class => [ Config::class, Lib_Manifest\Manifest::class ],

      // Login.
      Lib_Login\Login::class,
		
      // Blocks.
      Lib_Blocks\Blocks::class => [ Config::class ],
    ];
  }
}
```

For more details, check the [Eightshift Boilerplate repo](https://github.com/infinum/eightshift-boilerplate)

In the case you are using the library in a plugin, in the `plugin-name.php` file you'd have something similar to

```php
<?php
/**
 * Plugin main file starting point
 *
 * @since             1.0.0
 * @package           Your_Plugin_Name
 *
 * @wordpress-plugin
 * Plugin Name:       Your Cool Plugin
 * Plugin URI:
 * Description:       Plugin description
 * Version:           1.0.0
 * Author:            You
 * Author URI:
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       your-plugin
 * Requires PHP:      7.2
 */

declare( strict_types=1 );

namespace Your_Plugin_Name;

use Your_Plugin_Name\Core\Plugin_Factory;
use Your_Plugin_Name\Exception\Plugin_Activation_Failure;

/*
 * Make sure this file is only run from within WordPress.
 */
if ( ! defined( 'ABSPATH' ) ) {
  $error_message = esc_html__( 'You cannot access this file outside WordPress.', 'your-plugin' );
  throw Plugin_Activation_Failure::activation_message( $error_message );
}

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Plugin URL const
 */
define( 'PLUGIN_BASE_URL', plugin_dir_url( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 *
 * @since 1.0.0
 */
register_activation_hook(
  __FILE__,
  function() {
    Plugin_Factory::create()->activate();
  }
);

/**
 * The code that runs during plugin deactivation.
 *
 * @since 1.0.0
 */
register_deactivation_hook(
  __FILE__,
  function() {
    Plugin_Factory::create()->deactivate();
  }
);

/**
 * Begins plugin execution.
 *
 * @since 1.0.0
 */
Plugin_Factory::create()->register();
```

The `Plugin_Factory` class will create an instance of your plugin that will handle activation, deactivation hooks as well as registering the classes with the DIC in the same fashion as in the themes.
