---
id: rest
title: Rest Intro
sidebar_label: Rest Intro
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)


When working on a more complex WordPress project at one point, you will have to make a new Rest API route or add a new API field to the existing route, or something else.

We have prepared four interfaces and two abstract classes for you.

In general, you will use only what you need from the provided options.

## CallableFieldInterface.php

The interface used in Rest API Field for providing callback method.

## CallableRouteInterface.php

The interface used in Rest API Route for providing callback method.

## RouteSecurityInterface.php

The interface used in Rest API Route for providing authentication methods.

## RouteInterface.php

The interface used in Rest API Route for providing general options for your route like variables for `READABLE`, `CREATABLE`, etc...

## AbstractField.php

Abstract class used in Rest API Field for updating existing filed, or providing a new field to the existing Rest API.

Please check the implementation details in [this example](rest-field).

## AbstractRoute.php

Abstract class used in Rest API Route for adding a new Rest API route.

Please check the implementation details in [this example](rest-route).
