---
id: autowiring
title: Autowiring
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/4.0.0)

What is autowiring?

*Autowiring is an exotic word that represents something very simple: the container's ability to create and inject dependencies automatically.*

The quote is taken from the [PHP-DI](https://php-di.org/doc/autowiring.html) library that we use.

In a nutshell, we use a dependency injection (DI) container to load all your service classes. Alongside the DI container, we also use the PSR-4 coding standard for autoloading. That allows us to predict what your file/folder structure will look like in correlation to the namespace. With that in mind, you don't have to worry about requiring your classes. Our autoloading takes care of everything. All you need to do is follow a few coding standards so that you can automatically inject other classes as dependencies.

Autowiring runs inside the `Main` service class as an extended class of our `AbstractMain` class. You can install the main class using this command:

`wp boilerplate create_main`

## How it works

Here is a quick overview of how this works:

- You create a new class manually or using the WP-CLI command.
- PSR-4 should detect your new class if you followed the PSR-4 naming standard.
- The new class is added to the `classmap` array inside the `vendor` folder.
- Autowiring class reads the new class, checks if your class has any class dependencies, and injects them.
- And it just works.

**To put it shortly**: just add a new class (that is PSR-4 compliant) with or without some class dependencies and everything will be automatically resolved/injected.

### What if I have to mock or manually call a class?

Before we start with the automatization and autowiring, let's see how service classes are called manually.

We can think of these scenarios where you want to load a class manually:
- You have to write tests and manually provide mocked classes.
- Your classes have a custom structure and autowiring can't resolve it.
- You want to provide a primitive parameter (`string`, `int`, etc.) inside a constructor method.

In those cases, you can manually provide your DI container with the implementation using the `getServiceClasses` method inside the `src>Main>Main.php` class.

Provide the method and add your custom implementation like this:

`src>Main>Main.php`
```php
  /**
   * Get the list of services to register.
   *
   * A list of classes which contain hooks.
   *
   * @return array<class-string, string|string[]> Array of fully qualified service class names.
   */
  protected function getServiceClasses(): array
  {
    return [

      // If you are using a class as a DI.
      ProjectNamespace\Rest\Routes\DocumentsRoute::class => [
        ProjectNamespace\Query\Documents\QueryDocuments::class
      ],

      // If you just want to include a simple class with no DI.
      ProjectNamespace\CoolFolder\CoolClass::class,
    ];
  }
```

### What if my class doesn't have anything inside a constructor method? (no dependencies)

If your class **doesn't have** anything defined in the constructor method, autoloading will require your class.
This just means that you are not using dependency injection (since you have nothing to inject).

### What if my class has a **primitive parameter** (`string`, `int`, etc.) inside a constructor method?

If your class **has** a primitive parameter defined in the constructor method, autowiring will **not know** how to handle this so you must manually provide the primitive parameters at the point of usage. You can find more information about that [here](#what-if-i-have-to-mock-or-manually-call-a-class).

### What if my class does have another class as a parameter inside a constructor method?

This works out of the box, but you shouldn't really do this.

A good coding practice is that your class should never depend on the concrete class implementation because you have tightly coupled your class to another class. This makes it hard to test and your code becomes hard to modify. Imagine that you have put a concrete implementation as a dependency, only to get feedback from the client that you need to change that implementation for a completely different one. Making the changes means that you'll need to track all the places in your codebase where you have used some functionality from this class, and change it completely.

> You should always code against interfaces and not implementation.

We can't stress this enough because as your project grows, so will your headaches. Also, when you start testing your code, that is when your hair will begin to fall off. We recommend reading Uncle Bob Martin's [Clean Code](http://cleancoder.com/products). That will save you a lot of sleepless nights, and you'll learn tons of tips and tricks for writing clean code.

### What if my class has an interface parameter inside the constructor method?

This will automatically be resolved (same as with class parameters) if you follow one simple rule:

> Variable name in your constructor method needs to match the class name (which implements the interface) in camelCase.

For example, let's say you have a `SteeringWheel` class:

```php
class SteeringWheel implements CarPartInterface
```

and you want to have this as a dependency in Car class. Your Car class has the following constructor:

```php
public function __construct(CarPartInterface $steeringWheel)
{
  $this->steeringWheel = $steeringWheel;
}
```

Since the injected variable name `$steeringWheel` is the camelCase version of the class name `SteeringWheel` which implements `CarPartInterface`, autowiring will know to inject the correct class and everything will work fine.

If you understand everything from the upper example, you can just skip the next one. However, we recommend checking out the following example for a more detailed overview.

#### Example

Let's set a scene. You have created a `DocumentsRoute` class and it needs some functionality from the `QueryDocuments` class.

Steps you need to follow are:

- You should create an interface with all the methods you need in the `DocumentsRoute` class. Let's call it `QueryDocumentsInterface`. We'll put it inside the `src/Query/Documents` folder.
- Your `QueryDocuments` class should implement your new `QueryDocumentsInterface` class and have all the methods from the interface implemented.
- In your `DocumentsRoute` class, provide the `QueryDocumentsInterface` interface as a parameter inside the `__construct` method with the name of the argument `$queryDocuments`.
- You can now use the methods defined in the `QueryDocuments` class.

Let us provide you with some code examples:

**Structure:**
- src
	- Query
		- Documents
			- QueryDocumentsInterface.class
			- QueryDocuments.class
	- Rest
		- Routes
			- DocumentsRoute.class


**src/Query/Documents/QueryDocumentsInterface.php**
```php
/**
 * The file that holds a QueryDocuments interface.
 *
 * @package ProjectNamespace\Query\Documents;
 */

declare(strict_types=1);

namespace ProjectNamespace\Query\Documents;

/**
 * Interface for querying documents
 */
interface QueryDocumentsInterface
{

  /**
   * Get structured documents data for documents section.
   *
   * @param int $id Id for data.
   *
   * @return string
   */
  public function getDocumentsData(int $id = 0): string;
}
```

**src/Query/Documents/QueryDocuments.php**
```php
/**
 * The file for querying all the documents
 *
 * @package ProjectNamespace\Query\Documents
 */

declare(strict_types=1);

namespace ProjectNamespace\Query\Documents;

use ProjectNamespaceVendor\EightshiftLibs\Services\ServiceInterface;

/**
 * QueryDocuments class.
 */
class QueryDocuments implements ServiceInterface, QueryDocumentsInterface
{
    /**
   * Get structured documents data for documents section.
   *
   * @param int $id Id for data.
   *
   * @return string
   */
  public function getDocumentsData(int $id = 0): string
  {
    // here goes the implementation of getDocumentsData method.
  }
}
```

**src/Rest/Routes/DocumentsRoute.php**
```php
/**
 * The class register route for DocumentsRoute endpoint
 *
 * @package ProjectNamespace\Rest\Routes
 */

declare(strict_types=1);

namespace ProjectNamespace\Rest\Routes;

use ProjectNamespace\Query\Documents\QueryDocumentsInterface;
use ProjectNamespaceVendor\EightshiftLibs\Rest\Routes\AbstractRoute;
use ProjectNamespaceVendor\EightshiftLibs\Rest\CallableRouteInterface;

/**
 * Class DocumentsRoute
 */
class DocumentsRoute extends AbstractRoute implements CallableRouteInterface
{

  /**
   * Instance variable of documents data.
   *
   * @var QueryDocumentsInterface
   */
  protected $queryDocuments;

  /**
   * Create a new instance.
   *
   * @param QueryDocumentsInterface $queryDocuments Inject documentsData which holds data for documents.
   */
  public function __construct(QueryDocumentsInterface $queryDocuments)
  {
    $this->queryDocuments = $queryDocuments;
  }

  // here goes the rest of the DocumentsRoute implementation.
}
```

And that's it. Autowiring knows how to resolve the dependencies, you didn't tightly couple the code, and you're all set.

## To sum it up

This chapter may be a bit long, but we wanted to make sure you understand our motivation behind it. We often work on large projects with lots of third-party integrations, and having a good project structure and architecture makes the projects more durable. It makes them less prone to bugs (if you write tests) and makes implementing new features and removing obsolete ones a lot easier.

Do you need to use it? Not really. Especially on really simple projects. Should you? We think you'll benefit from it in the long run.
