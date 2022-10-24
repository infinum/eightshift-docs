---
id: rest
title: Rest Intro
sidebar_label: Rest Intro
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/3.0.0/)


Depending on the type of projects you are working on, you might need to create a new REST API route or add a new API field to the existing route.

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

Abstract class used in Rest API Field for updating existing fields or providing a new field to the existing Rest API.

Please check the implementation details in [this example](rest-field).

## AbstractRoute.php

Abstract class used in Rest API Route for adding a new Rest API route.

Please check the implementation details in [this example](rest-route).
