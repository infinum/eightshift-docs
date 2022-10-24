---
id: enqueue
title: Enqueue
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue)

When enqueuing assets you can either use ready made classes from the libs:

* `Eightshift_Libs\Enqueue\Enqueue_Admin` class.
* `Eightshift_Libs\Enqueue\Enqueue_Blocks` class.
* `Eightshift_Libs\Enqueue\Enqueue_Theme` class.

or you can modify their functionalities by extending them.

These classes will handle JavaScript and CSS files of the project for different parts like: Admin area, Block Editor area of Theme area (front end).

The usage of any of these classes is optional, and you can use only what you need. Eightshift Boilerplate comes with all three classes already implemented.

Each of these classes implement actions that can be deregistered using the standard [WordPress way](https://developer.wordpress.org/reference/functions/remove_action/).

Enqueue classes work in combination with [webpack build](/docs/legacy/v4/advanced/webpack) of your project.

File names are defined inside class constants that can be changed by extending the class and providing the overrides for the constants. If you change the file names, you must provide changes to the webpack build process as well.

## Enqueue_Admin

This class provides way to enqueue assets for the **Admin** part of the project.

It implements these hooks in the register method:
```js

// Login only style.
add_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );

// Admin only style.
add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );

// Admin only script.
add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
```

Class constants:
```js

  const ADMIN_SCRIPT_URI = 'applicationAdmin.js';

  const ADMIN_STYLE_URI  = 'applicationAdmin.css';
```

## Enqueue_Blocks

This class provides assets for **Block Editor** part of the project.

It implements these hooks:
```js

// Editor only script.
add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_script' ] );

// Editor only style.
add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_style' ], 50 );

// Editor and front-end style.
add_action( 'enqueue_block_assets', [ $this, 'enqueue_block_style' ], 50 );

// Frontend only script.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_script' ] );
```

Class constants:
```js

  const BLOCKS_EDITOR_SCRIPT_URI = 'applicationBlocksEditor.js';
  const BLOCKS_EDITOR_STYLE_URI  = 'applicationBlocksEditor.css';

  const BLOCKS_STYLE_URI  = 'applicationBlocks.css';
  const BLOCKS_SCRIPT_URI = 'applicationBlocks.js';
```

## Enqueue_Theme

This class provides assets for **Theme** part of the project.

It implements these hooks:
```js

// Theme only style.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 10 );

// Theme only script.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
```

Class constants:
```js

  const THEME_SCRIPT_URI = 'application.js';
  const THEME_STYLE_URI  = 'application.css';
```

## Additional

Each of these 3 classes extends `Eightshift_Libs\Enqueue\Assets` class that holds some useful methods that you can extend. These methods can be used in all enqueue classes.

You can find the Assets class [here](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue).

Provided methods:

* `get_frontend_script_dependencies()`
* `get_admin_script_dependencies()`
* `get_localizations()`
* `get_frontend_style_dependencies()`
* `get_admin_style_dependencies()`
* `get_media()`
* `script_in_footer()`
