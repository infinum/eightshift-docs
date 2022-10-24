---
id: di-container
title: Dependency injection container
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/class-main.php)

Dependency injection is a way of implementing inversion of control design pattern. It's used to handle the dependencies between multiple classes without the direct instantiation of one class in another - which causes tight coupling in the code, and makes it less testable and harder to maintain.
Dependency injection is a way of implementing inversion of control design pattern. It's used to handle the dependencies between multiple classes without the direct instantiation of one class in another - which causes tight coupling in the code and makes it less testable and harder to maintain.

In general, if you instantiate another class like this inside your class

```js
new SuperClass()
````

that should be avoided because it tightly couples two classes.

Eightshift libs are using [PHP-DI](http://php-di.org/) as an implementation of a dependency injection container. We'll explain the implementation by following the [eightshift-boilerplate](https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/src/class-main.php) example.

In your main class, which is used to store all the dependencies in your code, and which extends the main eightshift-lib class (`Eightshift_Libs\Core\Main`), you need to define a method called `get_service_classes()` which contains an array of service classes (those that have a way to register hooks in your WordPress project):

```js
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

    // Media.
    Media\Media::class,

    // Admin.
    Admin\Modify_Admin_Appearance::class,

    // Menu.
    Menu\Menu::class,

    // Blocks.
    Lib_Blocks\Blocks::class => [ Config::class ],
  ];
}
```

Whenever a class has a dependency on another class, you'd add this dependency through a process of constructor injection. For instance, the `Enqueue_Admin` class depends on both the `Config` and `Manifest` classes. Looking at the [implementation](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue/class-enqueue-admin.php) we have:

```js
class Enqueue_Admin implements Service {
  public function __construct( Config_Data $config, Manifest_Data $manifest ) {
    $this->config   = $config;
    $this->manifest = $manifest;
  }
}
```

Notice that we could add `Lib_Manifest\Manifest` as a type hint in the constructor of the `Enqueue_Admin` class and `Lib_Manifest\Config` as well, but instead, we used their _interfaces_: `Config_Data` and `Manifest_Data`. If we used concrete classes, we wouldn't have to add these in the `get_service_classes()` method array, because the DI container lib would be able to figure out what class the `Enqueue_Admin` class uses as a dependency through a process called [reflection](https://www.php.net/manual/en/intro.reflection.php).

This, however, creates a tight coupling - the `Enqueue_Admin` class now **always** depends on these concrete classes, and we cannot easily replace them if we want to create automated tests.
This is why we use interfaces since interface only mandates the contract our class needs to honor - not the implementation of that contract.

By adding the interfaces we need to say to our DI container what the classes, that implement these interfaces, actually are. This is why we needed to define:

```js
Lib_Enqueue\Enqueue_Admin::class => [ Config::class, Lib_Manifest\Manifest::class ]
```

in our `get_service_classes()` method.

The beauty of this method is that we can easily add mocks in our automated tests:

```js
protected function get_service_classes() : array {
  $services = [
    Lib_Enqueue\Enqueue_Admin::class => [ Config::class, Lib_Manifest\Manifest::class ],
    // Other classes go here.
  ];

  if ( getenv('TEST') ) {
    $services[ Lib_Enqueue\Enqueue_Admin::class ] => [ Fixture\Config::class, Fixture\Manifest::class ];
  }

  return $services;
}
```

If we had an environment variable `TEST` defined in our `phpunit.xml` defined, this means that the `Lib_Enqueue\Enqueue_Admin` class will get overwritten during the test run, and we can pass the fake classes from the `Fixture` namespace.

This is just a simple example, but one that could prove useful when writing testable code in the future, and something to be mindful of.

## Useful hint

Don't pass too many dependencies in your classes. Having more than three dependencies is usually a sign that your class may be doing too much, and that it should probably be broken down into more different classes.
