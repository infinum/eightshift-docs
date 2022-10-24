---
id: manifest
title: Manifest
sidebar_label: Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)

In the build process, Webpack creates all the static files from your assets folder and also `manifest.json` inside the public folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically.

This class provides `manifest.json` file location and helpers to return the full path for a specific asset.

## How to use it

First, install the manifest class if you didn't use the default project installation using this command:

`wp boilerplate create_manifest`

You will see a custom filter you can use to fetch the item from the public folder in your class. This is the custom filter:

```php
/**
 * Manifest item filter name constant.
 *
 * @var string
 */
public const MANIFEST_ITEM = 'manifest-item';

/**
 * Register all hooks. Changed filter name to manifest.
 *
 * @return void
 */
public function register(): void
{
	\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);
}
```

To use this filter, add the following code and provide the correct name of your asset:

```php
use CoolProject\Manifest\Manifest;

$logo = \apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');
```

And that's it. This filter will check the public folder for the `manifest.json` file, parse it, and return the value of the provided key.

If there is no `manifest.json` file or you provided the wrong asset name, there will be a descriptive message for you.

## Why not just fetch the asset the old-fashioned way?

By the old-fashioned way, we mean running something like this:

```php
$logo = get_template_directory_uri() . 'public/logo.svg';
```

You can definitely do this. But with our filter, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done.

If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you would miss something, break the project, etc.
