---
id: namespaces
title: Namespaces
sidebar_label: Namespaces
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

> PHP part of this project lives in `EightshiftLibs` namespace.

But because WordPress lives in an global namespace we had to provide the way for your project to be unique. That is why we implemented [**Imposter**](https://github.com/infinum/imposter-plugin) script inside `composer.json`. Imposter adds Namespace prefix on all the packages inside Vendor folder that uses namespacing.

You can change the vendor prefix in your `composer.json` file. But if you do this, make sure you delete the vendors folder before running the command to install composer packages again with command: `composer install`.


```php
"autoload": {
	"psr-4": {
		"CustomProject\\": "src/"
	}
},
"extra": {
	"imposter": {
		"namespace": "EightshiftBoilerplateVendor"
	}
}
```

For example with the default setup your project will have namespace you defined in the setup process but lets say you have the setup from the upper code:

- Your current namespace is: `CustomProject`.
- Namespace for all packages used from Eightshift libs is `EightshiftBoilerplateVendor\CustomProject`.
- Also every package you additionally install will follow the same convention: `EightshiftBoilerplateVendor\SomePackageNamespace`.

To sum it up you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Boilerplate. But if you have multiple Eightshift Boilerplates installed please change the vendor prefix on one of the projects.
