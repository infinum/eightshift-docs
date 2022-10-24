---
id: manifest
title: Manifest
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/manifest)

Manifest class is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Manifest\Manifest` class.

In the build process, Webpack creates all static files and also `manifest.json` inside the `public` folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically.

This class is used to provide `manifest.json` file location and helpers to return the full path for a specific asset.

## How to use it?

The manifest class provides a filter name that is defined in the lib as a class constant. To apply/call this filter you need to provide `Manifest::MANIFEST_ITEM_FILTER_NAME` filter name inside the project config helper. [Config helper](config) is used to append project prefix to a filter name.

## Example
Manifest.json:
```json
{
  "logo.svg": "/wp-content/themes/eightshift-boilerplate/public/logo.svg"
}
```

Usage:
```js
use Eightshift_Libs\Manifest\Manifest;

$logo_img = apply_filters( Config::get_config( Manifest::MANIFEST_ITEM_FILTER_NAME ), 'logo.svg' );
```

Output:
```
https://domain.com/wp-content/themes/eightshift-boilerplate/public/logo.svg
```
