---
id: enqueue
title: Enqueue
---

Manifest class is located in `Eightshift Libs`. To extend it, use one of the following classes:
* `Eightshift_Libs\Enqueue\Enqueue_Admin` class.
* `Eightshift_Libs\Enqueue\Enqueue_Blocks` class.
* `Eightshift_Libs\Enqueue\Enqueue_Theme` class.

This classes are made to create Javascript and Css files of the project for every project part like Admin area, Block Editor area of Theme area.

The usage of any of this classes is optional and you can use only what you need. Eightshift Boilerplate commes with all 3 classes all-ready implemented.

Each of this classe implements have some actions that can be deregistrated using standard [WordPress way](TODO).

Enqueue classes work in combination with [webpack build](/eightshift-docs/docs/advanced/webpack) part for your project.

File names are defined inside a class variable that can be changed by extending the class and providing the override for the variable. If you change the file names you must provide changes to the webpack build process.

## Enqueue_Admin

This class provides assets for **Admin** part of the project.

It implements this hooks:
```php

// Login only style.
add_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );

// Admin only style.
add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );

// Admin only script.
add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
```

Class Variables:
```php
  const IN_FOOTER = true;

  const ADMIN_SCRIPT_URI = 'applicationAdmin.js';

  const ADMIN_STYLE_URI  = 'applicationAdmin.css';
```

## Enqueue_Blocks

This class provides assets for **Block Editor** part of the project.

It implements this hooks:
```php

// Editor only script.
add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_script' ] );

// Editor only style.
add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_style' ], 50 );

// Editor and frontend style.
add_action( 'enqueue_block_assets', [ $this, 'enqueue_block_style' ], 50 );

// Frontend only script.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_script' ] );
```

Class Variables:
```php
  const IN_FOOTER = true;

  const BLOCKS_EDITOR_SCRIPT_URI = 'applicationBlocksEditor.js';
  const BLOCKS_EDITOR_STYLE_URI  = 'applicationBlocksEditor.css';

  const BLOCKS_STYLE_URI  = 'applicationBlocks.css';
  const BLOCKS_SCRIPT_URI = 'applicationBlocks.js';
```

## Enqueue_Theme

This class provides assets for **Theme** part of the project.

It implements this hooks:
```php

// Theme only style.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 10 );

// Theme only script.
add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
```

Class Variables:
```php
  const IN_FOOTER = true;

  const THEME_SCRIPT_URI = 'application.js';
  const THEME_STYLE_URI  = 'application.css';
```

## Additional

Each of this 3 classes extends `Eightshift_Libs\Enqueue\Assets` class that holds some of the useful methods that you can extend. Thes methods can be used in all of the enqueue classes.

You can find Assets class [here](TODO).

Provided methods:
* get_frontend_script_dependencies
* get_admin_script_dependencies
* get_localizations
* get_frontend_style_dependencies
* get_admin_style_dependencies


