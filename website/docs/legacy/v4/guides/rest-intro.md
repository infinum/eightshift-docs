---
id: rest-intro
title: Rest Intro
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/master/src/rest)

When you are working on a more complex WordPress project at one point, you will have to make a new Rest API route or add a new API field to the existing route, or something else.

We have prepared 4 interfaces:
* interface-callable-field.php
* interface-callable-route.php
* interface-route-security.php
* interface-route.php

and 2 abstract classes:
* class-base-field.php
* class-base-route.php

In general, you will use only what you need from the provided options.

Full details of Rest API implementation can be found here: [Eightshift-libs Rest](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/rest)


## Interface-callable-field.php

The interface used in Rest API Field for providing callback method.

## Interface-callable-route.php

The interface used in Rest API Route for providing callback method.

## Interface-route-security.php

The interface used in Rest API Route for providing authentification methods.

## Interface-route.php

The interface used in Rest API Route for providing general options for your route like variables for `READABLE`, `CREATABLE`, etc...

## Class-base-field.php

Abstract class used in Rest API Field for updating existing filed, or providing a new field to the existing Rest API.

Please check the implementation details in [this example](rest-field-example.md).

## Class-base-route.php

Abstract class used in Rest API Route for adding a new Rest API route.

Please check the implementation details in [this example](rest-routes-example.md).
