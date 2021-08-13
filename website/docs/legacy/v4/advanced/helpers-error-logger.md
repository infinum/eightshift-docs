---
id: helpers-error-logger-helpers
title: Error Logger
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php)

Object trait is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Helpers\Error_Logger` class.

If you are working with Ajax or REST API in your project, this logger will come in handy. We have created this simple trait helper that you can use in any PHP class as a [trait](/eightshift-docs/docs/legacy/v4/guides/extending-classes). To see all of the class helper go [here](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/trait-error-logger.php).


## rest_response_handler

Ensure correct response for rest using the handler function.

* @param integer     $code   Response Status code.
* @param string      $status Response Status name. (success/error).
* @param string|null $msg    Response Message.
* @param array|null  $data   Response additional data.

* @return \WP_Error|array \WP_Error instance with error message and status or array.

<div class="legacy-badge legacy-badge--v4"></div>
