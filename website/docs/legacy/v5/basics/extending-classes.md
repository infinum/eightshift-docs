---
id: extending-classes
title: Extending Classes
sidebar_label: Extending Classes
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)


You can extend every class from the library. To follow the good practice, you should never use the class directly from the Eightshift-libs in your service container. Instead, you should create a class in your project and extend the class from the Eightshift-libs. That is why we made all those [WP-CLI](wp-cli) commands you saw in the previous chapter.

We don't do any magic in the Eightshift-libs like in previous versions. All classes contain only the methods you need to call using WordPress hooks or filters.

## Example

Let's look at a way to add a class that enqueues theme front-end scripts and styles.
Go to the **root** of your theme. Using the terminal, run this command:

`wp boilerplate create_enqueue_admin`

This command will output something like this in your project, taking care of your projects namespace and vendor prefixes, as well as the package name and the text-domain:

```php
<?php

/**
 * The Admin Enqueue specific functionality.
 *
 * @package CoolProject\Enqueue\Admin
 */

declare(strict_types=1);

namespace CoolProject\Enqueue\Admin;

use CoolProject\Config\Config;
use CoolProjectVendor\EightshiftLibs\Enqueue\Admin\AbstractEnqueueAdmin;
use CoolProjectVendor\EightshiftLibs\Manifest\ManifestInterface;

/**
 * Class EnqueueAdmin
 *
 * This class handles enqueue scripts and styles.
 */
class EnqueueAdmin extends AbstractEnqueueAdmin
{

  /**
   * Create a new admin instance.
   *
   * @param ManifestInterface $manifest Inject manifest which holds data about assets from manifest.json.
   */
  public function __construct(ManifestInterface $manifest)
  {
    $this->manifest = $manifest;
  }

  /**
   * Register all the hooks
   *
   * @return void
   */
  public function register(): void
  {
    add_action('login_enqueue_scripts', [ $this, 'enqueueStyles' ]);
    add_action('admin_enqueue_scripts', [ $this, 'enqueueStyles' ], 50);
    add_action('admin_enqueue_scripts', [ $this, 'enqueueScripts' ]);
  }

  /**
   * Method that returns assets name used to prefix asset handlers.
   *
   * @return string
   */
  public function getAssetsPrefix(): string
  {
    return Config::getProjectName();
  }

  /**
   * Method that returns assets version for versioning asset handlers.
   *
   * @return string
   */
  public function getAssetsVersion(): string
  {
    return Config::getProjectVersion();
  }
}
```

As you can see from the provided example, we created a new class and extended the functionality from the Eightshift-libs.

In your new class, you have a `register` method that must be in every class that registers WordPress action hooks or filters. We call these **service classes**.

Your class contains three action hooks now. From this example, you can see that, if you don't want to use some functionality, remove the action, and it will not be used anymore. For more details on what each hook's callback does, go to the extended class in the Eightshift-libs and see the logic defined there.
