---
id: config
title: Project Config
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/src/class-config.php)

Project config is located in `src/class-config.php`, and it extends `Eightshift_Libs\Core\Config` class from the lib.

This class is used to define all the important methods for your project:
* get_project_name()
* get_project_version()
* get_project_prefix()
* get_project_env()
* get_project_routes_namespace()
* get_project_routes_version()
* get_project_primary_color()
* get_project_path()
* get_config()

Some methods are mandatory and are defined in [config interface](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/interface-config-data.php) the rest are provided inside the project.

## get_project_name()

Type: Mandatory

Generally used for naming assets handlers, languages, etc.

## get_project_version()

Type: Mandatory

Generally used for versioning asset handlers while enqueueing them.

## get_project_prefix()

Type: Mandatory

The WordPress filters live in a global namespace, so we need to prefix them to avoid naming collisions.

## get_project_env()

Type: Optional but recommended

Returns the project environment variable descriptor.

Used for defining global settings depending on the environment of the project. It can be one of, but not limited to, develop, staging, production.

Defaults to 'develop' (as to not cache manifest in transient) if not otherwise defined in `wp-config.php`

## get_project_routes_namespace()

Type: Optional

Used for namespacing project's REST-API routes and fields. Only required if you are creating a custom REST route or field.

## get_project_routes_version()

Type: Optional

Used for versioning projects REST-API routes and fields. Only required if you are creating a custom REST route or field.

## get_project_primary_color()

Type: Optional

Used for styling the mobile browser color and splash screens. Check `head.php` for more details.

## get_project_path()

Type: Mandatory

Returns project absolute path.

If used in a theme, use `get_template_directory()` and in case it's used in a plugin, use `__DIR__`.

## get_config()

Type: Mandatory

The method that returns every string prefixed with project prefix based on project type.

It converts all spaces and "_" with "-", also it converts all characters to lowercase. Also, it appends the project prefix defined in the `class-config.php`.

Example 1:
```js
Config::get_config( 'custom_filter_name' );

Output:
eb-custom-filter-name
```

Example 2:
```js
Config::get_config( 'custom-filter-name' );

Output:
eb-custom-filter-name
```

Example 3:
```js
Config::get_config( 'custom filter name' );

Output:
eb-custom-filter-name
```
