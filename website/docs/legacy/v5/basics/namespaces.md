---
id: namespaces
title: Namespaces
sidebar_label: Namespaces
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)

> PHP part of this project lives in `EightshiftLibs` namespace.

Because WordPress lives in a global namespace, we had to provide the way for your project to be unique. That is why we implemented [**Imposter**](https://github.com/infinum/imposter-plugin) script inside `composer.json`. Imposter adds a namespace prefix on all the packages inside the `vendor` folder that uses namespacing.

You can change the vendor prefix in your `composer.json` file. But if you do this, make sure you delete the `vendor` folder before running the command to install the composer packages again with the `composer install` command.


```json
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

For example, with the default setup, your project will have the namespace you defined in the setup process. But let's say you have the structure from the parent code:

- Your current namespace is: `CustomProject`.
- Namespace for all packages used from Eightshift libs is `EightshiftBoilerplateVendor\CustomProject`.
- Also, every package you additionally install will follow the same convention: `EightshiftBoilerplateVendor\SomePackageNamespace`.

To sum it up: you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Boilerplate. But if you have multiple Eightshift Boilerplate powered themes or plugins installed, please change the vendor prefix on each of the projects.
