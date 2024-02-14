---
id: utils-library
title: Utils library
---

In order to provide a better experience for developers, we have created a library of utility functions that can be used in your add-on plugin. This library is available in the [Eightshift Forms Utils package](https://github.com/infinum/eightshift-forms-utils).

In this library we have multiple utils classes with PHP. To use it in your add-on, you need to require the package in your `composer.json` file.

```json
"require": {
	"infinum/eightshift-forms-utils": "^1.1.10",
},
```

All helpers are located inside the `EightshiftFormsAddonComputedFieldsVendor\EightshiftFormsUtils` namespace.

## Example usage

In this example we will show how to get settings names.

```php
use EightshiftFormsAddonComputedFieldsVendor\EightshiftFormsUtils\Helpers\UtilsSettingsHelper;

$name = UtilsSettingsHelper::getSettingName('<my_setting_name>');
```
