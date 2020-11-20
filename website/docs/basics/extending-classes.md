---
id: extending-classes
title: Extending Classes
sidebar_label: Extending Classes
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)


Every class in the lib can be extended. To follow the good practice you should never use class directly from the Eightshift-libs in you service container, but rather you should create an class in your project and extend the class from the Eightshift-libs. That is why we created all those [WP-CLI](wp-cli) commands that you saw in the previous chapter.

We don't do any magic in the Eightshift-libs like in the previous versions. All classes contains only methods that you need to call using WordPress hooks or filters.

## Example

Let's look at a way to add Class that enqueues theme frontend scripts and styles.
Go to the **root** of your theme using the terminal and run this command:

`wp boilerplate create_enqueue_admin`

This command will output something like this in your project, taking care of your project namespace and vendor prefixes, as well as package name and text-domain:

```js
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

As you see from the provided example we created a new class and extended the functionality from the Eightshift-libs.

In your new class you have `register method` that must be in every class that registers WordPress action hooks or filters, and we call them **service classes**.

Your class contains three action hooks now, from this example you can see that if you don't want to use some functionality just remove the action and it is not used any more. For more details what each hooks callback does just go to the extended class in Eightshift-libs and see what it does.
