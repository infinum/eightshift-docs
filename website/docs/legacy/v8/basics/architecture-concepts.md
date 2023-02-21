---
id: architecture-concepts
title: Architecture concepts
---

## Project structure

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

Eightshift Development Kit follows a strict project structure to support autoloading, dependency injection and `wp boilerplate` commands, as well as conventions to increase codebase understanding between developers. As an added benefit, following this structure and conventions makes your codebase more consistent and organized.

While Eightshift Development Kit provides required theme files and common theme files such as `style.css` and `functions.php`, they're used differently to what you might expect if you've worked with WordPress themes previously. For instance, `style.css` is used only to register theme metadata, and doesn't contain any actual styles, as they're built using Webpack and use cache busting. `functions.php` simply bootstraps the execution lifecycle. We also provide very basic template partials, such as `single.php`, which you can accommodate to your needs. An idea to consider is replacing some of them with pages that are editable in Gutenberg.

While you'll find some additional configuration files such as `webpack.config.js` in the project root, the majority of your projects codebase should live in the `src` directory, which is autoloaded via Composer following PSR-4 conventions. This implies that every directory under `src` is a namespace under your base namespace (which is your project name), and PHP files inside of those directories are classes in that namespace, with exceptions for filenames that aren't in `StudlyCase`. 

An Eightshift Development Kit convention is to structure namespaces around features and functionality, so for instance, all custom post types would be part of the `ProjectName\CustomPostType` namespace.

## Object-oriented paradigms

Eightshift Libs is entirely object-oriented, providing abstract classes for internal library functionality, interfaces you can use to implement certain classes to make use of Eightshift Development Kit features, as well as concrete class implementations for use in projects.

Our use of OOP allows you to extend, modify or even replace Eightshift Development Kit functionality safely, without breaking compatibility or harming your project.

One of the most important interfaces in Eightshift Libs is the `ServiceInterface`. Classes that implement it are called service classes. This isn't a common pattern in PHP OOP. In Eightshift Development Kit, a service class represents a part of the project's functionality and has a `register` method that sets up the action and filter hooks for the service. If you need to add an action or a filter, you should do that in a service class. All your service classes are automatically loaded and can have dependencies injected using dependency injection.

To ensure there are no naming collisions caused by Composer dependencies, we use the [Imposter Composer plugin](https://github.com/infinum/imposter-plugin) to contain them in the `{ProjectName}Vendor` namespace. This comes with a few caveats which you should be aware of, and about which you can read more in the [namespaces chapter](namespaces).

Read more about [namespaces and Imposter](namespaces), [extending classes and service classes](extending-classes), and [dependency injection and autowiring](autowiring).

## Blocks and Components

While Blocks and Components will be covered in much more detail in the [Blocks chapter](blocks), it's worth getting acquainted with the concepts from the start.

In Gutenberg, Blocks are an abstract unit for structuring content. The same applies in Eightshift, with an additional concept of _Components_, which are abstract units for structuring blocks and layouts. 

Components are mostly similar to Blocks, with a few key differences:
* Components can not be inserted by users in Gutenberg, and are not registered as block types
* Components can be rendered in any context using the `Components::render` method, with arbitrary attribute values passed to them
* Blocks are usually only rendered using the render callback provided when registering the block
  * Note that in the Eightshift Development Kit, the render callback is provided for you by Eightshift Libs. It automatically adds the wrapper if necessary and sets up your block view.
* Components don't implement the `{blockName}-block.js` file

Blocks and Components have the same structure, which makes extracting components from existing blocks trivially easy.

Components can be _composed_ into a block. In other words, blocks can consist out of zero or more components. Component composition is handled in the block manifest, allows you to avoid using InnerBlocks to include functionality shared with other blocks, and serializes component attributes to the block using prefixed attributes for each component instance depending on your manifest definitions.

To learn more about the differences between blocks and components, read [Igor's blog post on Components and blocks](/blog/components-and-blocks). To learn how to use blocks and components to build your projects, read the [Blocks chapter](blocks).

## The Manifest

`manifest.json` files contain metadata, configurations and variables. 

Every Eightshift project has one global `manifest.json` file stored in `src/Blocks/manifest.json`, which contains global settings, properties, and variables. 

Furthermore, every Eightshift block, component, and variation has its own manifest file which is used to provide data required for block registration, such as a list of attributes, the block name, and the template for the inserter example. These local manifest files allow you to define arrays of options for attribute values that your blocks or components can consume. Manifest files also allow you to define relationships between attribute values and CSS variable values, which allows you a great deal of power when styling your blocks and components, as well as saves time as you don't have to provide conditional CSS classes.

To learn more about the [global manifest](blocks-global-manifest.md), [block manifest](block-manifest.md), [component manifest](blocks-component-manifest.md) and using [the manifest to provide CSS variables for use in block styling](blocks-styles.md), read the respective articles in the [Blocks chapter](blocks-important). For information about manifest structure, refer to the manifest schemas available in Eightshift Frontend Libs and linked to in the manifest files. 

## The directory structure in detail

Your project might contain a different set of namespaces and classes in the `src` folder, depending on what you've included using wp boilerplate commands.
By default, your project will include the `Blocks`, `Config`, `Enqueue`, `Main`, `Manifest` and `Menu` namespaces. You can include classes from Eightshift Libs to provide additional functionality manually or using wp boilerplate.

This chapter also doesn't cover all the namespaces and classes in Eightshift Libs, or their use. Check out the source code documentation for all available namespaces and classes.

- src
	- Blocks
  	- assets
  	- components
  	- custom
  	- variations
  	- wrapper
	- Columns
	- Config
	- CustomMeta
	- CustomPostType
	- CustomTaxonomy
	- Enqueue
		- Admin
		- Blocks
		- Theme
	- Exception
	- Helpers
	- I18n
	- Main
	- Manifest
	- Media
	- Menu
	- ModifyAdminAppearance
	- Plugin
	- Rest
	- ThemeOptions
	- View
- .storybook
- .gitignore
- .eslintignore
- .eslintrc
- .stylelintrc
- babel.config.js
- composer.json
- composer.lock
- package-lock.json
- package.json
- phpcs.xml.dist
- postcss.config.js
- README.md
- webpack.config.js

#### Blocks

The Blocks namespace contains the Blocks class used for block registration. This directory also contains shared assets, components, blocks, variations, and the wrapper.

Read about blocks in detail in the [Blocks chapter](blocks).

#### Columns

This namespace contains all the custom admin listing columns hooks in your project. These include listing column hooks for post types, taxonomy, and user lists, such as `manage_{$post_type}_posts_columns`.

#### Config

The Config class provides getter methods for your project's configuration, such as `getProjectName` or `getProjectVersion`.

#### CustomMeta

This class contains all the custom meta hooks for your project.

#### CustomPostType

This namespace contains classes that register all custom post type hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with `wp boilerplate create post-type`.

#### CustomTaxonomy

This namespace contains classes that register all custom taxonomy hooks for your project. For better code consistency and to save time on boilerplating, Eightshift Development Kit provides an example class implementation you can use with `wp boilerplate create taxonomy`.

#### Enqueue

These Enqueue namespace classes handle loading JavaScript and CSS assets, depending on the location you want to use it:
- **Admin** - Used in the admin (not block editor) panel. You can find the files inside the `assets` folder with the `-admin` suffix.
- **Blocks** - Used in the block editor. You can find the files inside the `src/Blocks/assets` folder. As blocks are complicated, we have files loaded only in the admin-editor part of the project, those files have an `-editor` suffix. The rest of the files with no suffix load on the admin-editor part and the project's front end.
- **Theme** - Used in the theme (frontend) part of your project. You can find the files inside the `assets` folder with no suffix. You would use these files for the assets related to your project that is not associated with components and blocks. These files are rarely used, as styles and JavaScript functionality are usually provided at component, block, or wrapper levels.

Using any of these classes is optional, and you can use only what you need. The `wp boilerplate init theme` command will set up all the three classes already implemented. Keep in mind that Enqueue classes work in combination with the Webpack build of your project.

All the asset files mentioned are prefixed with `application`. If you don't like the prefix, you can change it by providing project overrides for constants used in Eightshift Libs. If you change the file names, you must make changes to the Webpack build process as well. For modifying the Webpack configuration, read the [Webpack chapter](webpack).

#### Exception

This namespace contains all exceptions that can be thrown from the project.

#### Helpers

All the backend helpers provided by Eightshift Libs are part of the Helpers namespace. Generally, you can use them from Eightshift Libs without extending or modifying them.

#### I18n

Classes in this namespace are used to define all hooks related to internationalization and localization. For more information about i18n and l10n, check out [Tips and tricks](tips-tricks).

#### Main

The Main namespace contains the `Main` class, which sets up the dependency injection container and autowiring using `AbstractMain` and `Autowiring` classes. For most projects, `Main` can be used automagically without any work on your part, but as with all of the Eightshift Development Kit, you can extend it to suit your needs.

You can provide manual service classes here as well. Learn more in the [autowiring chapter](autowiring).

#### Manifest

The Manifest namespace provides the `manifest.json` file location and helpers to return the full path for a specific asset. Learn more about the manifest in the [manifest chapter](manifest).

#### Media

The Media namespace is used to add custom implementations for media, such as adding custom image sizes, enabling SVG image support, etc. By default, it registers theme support for title tags, HTML5 and post thumbnails.

#### Menu

This class is used to register menu positions.

#### ModifyAdminAppearance

This class is used to change admin appearance. We use it to change the admin color palette depending on the environment.

#### Plugin

This namespace is used only in the plugin boilerplate and holds classes required for activation and deactivation of the plugin.

#### Rest

The Rest namespace provides classes for handling REST API fields and routes. This is covered in more detail in the [REST chapter](rest).

#### ThemeOptions

This namespace is used to add admin menu configuration panels such as _Theme Options_, usually using ACF. 

#### View

This namespace is used to add filters used when escaping unsafe tags using `wp_kses_post` and `wp_kses` functions.

#### .storybook

This folder contains all of the files necessary to run the storybook in your project. Read more [about the Storybook project](https://storybook.js.org/).

#### .gitignore

As the name implies, this file is used to define restrictions to which files Git watches. Read more [about Git](https://git-scm.com/).

#### .eslintignore

Defines files and folders which ESLint should ignore when linting.

#### .eslintrc

Provides definitions used for linting JavaScript files. Read more [about ESLint](https://eslint.org/).

#### .stylelintrc

Provides definitions used for linting SCSS/CSS stylesheets. Read more [about Stylelint](https://stylelint.io/).

#### babel.config.js

Provides Babel configuration, which determines how your JavaScript code will be compiled, what standard you will use, and much more. Read more [about Babel](https://babeljs.io/).

#### composer.json

Contains a list of your project's Composer dependencies, as well as project metadata and configuration. Dependencies can be added and installed using `composer install`. Read more [about Composer](https://getcomposer.org/).

#### composer.lock

Lock files are used to set the package version to the exact release. This ensures that everyone has the same package version when installing.

#### package-lock.json

The same as `composer.lock`, but for node_modules.

#### package.json

Contains a list of your project's npm dependencies, as well as project metadata and configuration. Dependencies can be added and installed using `npm install`. Read more [about npm](https://nodejs.dev/).

#### phpcs.xml.dist

Provides definitions used for linting PHP files. Read more [about PHPCS](https://github.com/squizlabs/PHP_CodeSniffer).

#### postcss.config.js

PostCSS works in collaboration with Webpack and defines what additional plugins you are going to use when building your CSS files. Read more [about PostCSS](https://postcss.org/).

#### webpack.config.js

`webpack.config.js` provides Webpack configuration, used when building your JavaScript and CSS files. This is covered in more detail in the [Webpack chapter](webpack).
