---
id: namespaces
title: Namespaces
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

:::tip
The PHP codebase of this project lives in `EightshiftLibs` namespace.
:::

Because WordPress lives in a global namespace, we had to provide the way for your project to be unique. That is why we implemented [**Imposter**](https://github.com/infinum/imposter-plugin) in `composer.json`. Imposter adds a namespace prefix to all the packages inside the `vendor` folder that use namespacing.

You can change the vendor prefix in your `composer.json` file. If you do this, make sure you delete the `vendor` folder and re-run `composer install`.

Using the default setup, your project will have the namespace you defined in the setup process.

However, let's say you change your `composer.json` file to contain this snippet:
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

- Your current namespace is: `CustomProject`.
- Namespace for Eightshift Libs becomes: `EightshiftBoilerplateVendor\EightshiftLibs`.
- Every package you additionally install will follow the same convention: `EightshiftBoilerplateVendor\SomePackageNamespace`.

**To sum it up**: you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Development Kit. If you have multiple Eightshift Development Kit-powered themes or plugins installed, please change the vendor prefix on each of the projects.

### Important note

If you are installing additional composer packages, make sure that they don't have any inline namespace usage. All referenced classes should be imported with `use` statements, which must be defined at the top of files.

The Imposter plugin is not able to replace inline namespaces, which will cause issues with classname resolution and result in a fatal error getting thrown.

To fix these issues, either create a PR on the package and fix this for everyone, or exclude this package from imposter script. Keep in mind that can have some unexpected side effects that we can't predict.
