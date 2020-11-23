---
id: autowiring
title: Autowiring
sidebar_label: Autowiring
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

What is autowiring?

*Autowiring is an exotic word that represents something very simple: the container's ability to create and inject dependencies automatically.*

The quote was used from [PHP-DI](https://php-di.org/doc/autowiring.html) library that we use.

In a nutshell, we use a dependency injection container to load all your service classes. With DI container, we also use the PSR-4 coding standard that allows us to predict how your file/folder structure will look like in correlation to the namespace. With that in mind, you don't have to worry about when your class is required, and when it loads, our autowiring takes care of everything. You need to follow a few coding standards.

Autowiring runs inside the `Main` service class as an extended class in our `AbstractMain` class. You can install the main class using this command:

`wp boilerplate create_main`

## How it works?

Here is a quick overview of how this works:

- You create a new class manually or using the WP-CLI command.
- PSR-4 would detect your new class if you followed the PSR-4 naming standard.
- New class is added to the `classmap array` inside the `vendor` folder.
- Autowiring class reads the new class and checks if you have any DI classes used in your new class.
- It just works.

As you saw from the overview steps, autowiring checks your class and loads DI classes accordingly.

### What if my class doesn't have anything inside a constructor method?

If your class **doesn't have** anything defined in the constructor method, autowiring will require your class.
This just means that you are not using DI.

### What if my class does have a primitive parameter inside a constructor method?

If your class ** has** a primitive parameter defined in the constructor method, autowiring will check what type it is and load it to your new class.

### What if my class does have another class as a parameter inside a constructor method?

Well, this is when things become interesting. A good coding practice is that your class should never depend on the same class because you have tightly coupled your class to another class. This way, you can't simply reuse your class, test it, or copy it to another project. 

**You should always code against interfaces and not implementation.**

We can't stress this enough because as your project grows, so will your headaches. Also, when you start testing your code, that is when your hair will begin to fall off. So read [Uncle Bob Martins - Clean Code](http://cleancoder.com/products) book and save your self a lot of sleepless nights.

Let's set a scene. You have a created class `DocumentsRoute` class and your class need some functionality from the `QueryDocuments` class.

What are your steps:

- You should create an interface with the method you need in the `DocumentsRoute` class, let's call it `QueryDocumentsInterface.class` and put it inside the `src/Query/Documents` folder.
- Your `QueryDocuments` class should implement your new `QueryDocumentsInterface` class and have all the methods from the interface defined.
- In your `DocumentsRoute` class provide the `QueryDocumentsInterface` interface as a parameter inside the `__construct` method.
- Provide some additional markup to use this `QueryDocumentsInterface` in your `DocumentsRoute` class.

Let's us provide you with some code examples:

**Structure:**
- src
	- Query
		- Documents
			- QueryDocumentsInterface.class
			- QueryDocuments.class
	- Rest
		- Routes
			- DocumentsRoute.class


**src/Query/Documents/QueryDocumentsInterface.class**
```js
/**
 * The file that is an Query for Documents class interface.
 *
 * @package ProjectNamespace\Query\Documents;
 */

declare(strict_types=1);

namespace ProjectNamespace\Query\Documents;

/**
 * Interface for a QueryDocumentsInterface
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

**src/Query/Documents/QueryDocuments.class**
```js
/**
 * The file that is an Query of Documents class.
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
    ... here goes the implementation of getDocumentsData method.
  }
}
```

**src/Rest/Routes/DocumentsRoute.class**
```js
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
  protected $documentsData;

  /**
   * Create a new instance.
   *
   * @param QueryDocumentsInterface $queryDocuments Inject documentsData which holds data for documents.
   */
  public function __construct(QueryDocumentsInterface $queryDocuments)
  {
    $this->documentsData = $queryDocuments;
  }

  ...here goes the rest of the DocumentsRoute implementation.
}
```

An this is it, autowiring knows how to resolve this setup, and you are all set.

### What if I have to mock or do some weird stuff in my DI?

Sometimes automatization can save you, but in the end, eventually, you need something custom, we got you covered.

We can think of these scenarios:
- You have to write tests and manually provide mocked classes.
- You need to do some weird stuff in your DI.
- Your classes have some custom structure, and autowiring can't resolve it.

In those cases, you can manually provide your DI container with the implementation using the `getServiceClasses` method inside the `src>Main>Main` class.

Just provide the method and add your custom implementation like this:

`src>Main>Main.class`
```js
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
      ProjectNamespace\Rest\Routes\DocumentsRoute => [ProjectNamespace\Query\Documents\QueryDocuments],

      // If you just want to include a simple class with no DI.
      ProjectNamespace\CoolFolder\CoolClass.class,
    ];
  }
```

## Sum it up

This chapter may be a bit long, but we wanted to make sure you understand our motivation behind it. We often work on large projects, with lots of third-party integrations, and having a good project structure and architecture makes the projects more durable. It makes them less prone to bugs (if you write tests), makes the implementation of new features, and removing obsolete features a lot easier.

Do you need to use it? Not really. Especially on really simple projects. Should you? We think you'll benefit from it in the long run
