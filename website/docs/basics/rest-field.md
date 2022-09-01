---
id: rest-field
title: REST Field
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

This class is used to update an existing REST API Field or provide a new field to the existing REST API.

To create a new class for extending an REST API field, run this command:

`wp boilerplate create rest-field --prompt`

The output will ask you to input the correct field name and object type (post, get, etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the `fieldCallback` method.

## Test it in action

To test it in action, you should check the `wp-json` path in your browser. You can do something like this:

`domain.ext/wp-json/routeNamespace/routeVersion/routeName`

and find the field name.

> This link will be different based on your project implementation.
