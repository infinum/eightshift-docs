---
id: rest
title: REST Intro
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/4.0.0)


Depending on the type of projects you are working on, you might need to create a new REST API route or add a new API field to an existing route.

We have prepared four interfaces and two abstract classes for you.

In general, you will only use what you need from the provided options.

### CallableFieldInterface.php

The interface used in REST API Fields for providing a callback method.

### CallableRouteInterface.php

The interface used in REST API Routes for providing a callback method.

### RouteSecurityInterface.php

The interface used in REST API Routes for providing authentication methods.

### RouteInterface.php

The interface used in REST API Routes for providing general options for your route, such as variables for `READABLE`, `CREATABLE`, etc...

### AbstractField.php

Abstract class used in REST API Field for updating existing fields or providing a new field to the existing REST API.

Please check the implementation details in [this example](rest-field).

### AbstractRoute.php

Abstract class used in REST API Route for adding a new REST API route.

Please check the implementation details in [this example](rest-route).
