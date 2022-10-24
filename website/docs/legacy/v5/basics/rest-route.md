---
id: rest-route
title: Rest Route
sidebar_label: Rest Route
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)

This class is used to create a new Rest API route.

To create a new class for the Rest API route, run this command:

`wp boilerplate create_rest_route`

The output will ask you to input the correct endpoint slug and method (`POST`, `GET`, etc.). Everything else will be done for you, setting the namespace, package, vendor prefixes, class, and folder name, and you will be set to write your field implementation in the `routeCallback` method.

## Test it in action

To test it in action, you should check the `wp-json` path in your browser. You can do that with something like this:

`domain.ext/wp-json/routeNamespace/routeVersion/routeName`

> This link will be different based on your project implementation.
