---
id: extending-classes
title: Extending Classes
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0)

We are providing abstract classes, interfaces, helpers, dependency injection and namespaces for your project. In general, you can use anything as-is from the vendor library, or you can modify/add the functionality of existing classes by extending them in your project.

If you are familiar with the extending classes (object inheritance) in PHP language then you can just skip this chapter but for the rest of you here is an awesome description on how it works:

* [Interfaces](https://www.php.net/manual/en/language.oop5.interfaces.php)
* [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
* [Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)
* [Object Inheritance](https://www.php.net/manual/en/language.oop5.inheritance.php)
* [Namespaces](https://www.php.net/manual/en/language.namespaces.php)
* [Traits](https://www.php.net/manual/en/language.oop5.traits.php)

Please get acquainted with these concepts before you continue because they will help you in the later chapters.

## Important notes

> PHP part of this project lives in `Eightshift_Libs` namespace.

> When adding a new class, changing the class name or changing the class file name, don't forget to run `composer dump-autoload` to rebuild the autoload map.

## Example

Every class in the lib can be extended and certain parts of it can be overriden or removed. For example, let's look at a way to remove loading of the admin style CSS assets.

In order to override the `Eightshift_Lib\Enqueue_Admin` class, you should create a new class, preferably in the `enqueue` folder in your project.
In your `enqueue\class-admin-enqueue.php` file you'd do:

```js
<?php
/**
 * The Admin Enqueue specific functionality.
 *
 * @package Your_Project\Enqueue
 */

declare( strict_types=1 );

namespace Your_Project\Enqueue;

use Eightshift_Libs\Enqueue\Enqueue_Admin;

class Admin_Enqueue extends Enqueue_Admin {
  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 2.0.0
   */
  public function register() {
    parent::register();

    // We do not want to load the login and admin styles.
    remove_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );
    remove_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );
  }
}
```

This way, only `add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );` hook will run, and only admin scripts will be loaded. You just need to be sure to modify your webpack settings so that admin CSS scripts are not bundled.

You can do this with other classess in the lib - `Blocks`, `Columns`, `Manifest`, etc. in the same way.
