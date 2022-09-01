---
id: example-class
title: Example Class
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/5.0.0)

As you've already seen in the [WP-CLI](wp-cli) chapter, we have many finished features prepared for you. However, we want to make things even easier for you, so we created an example service class for you to use.

If you want to add a new service class to your project but don't want to write all the boilerplate around it, just use the WP-CLI command:

`wp boilerplate create_service_example`

The output will ask you to input the correct folder path relative to the `src` folder and specify the class name.
Everything else will be done for you like setting the namespace, package, vendor prefixes, class and folder name, and you will be set to write your class.

After that, add your WordPress hooks to the register method, provide its callback, and let the magic happen.
