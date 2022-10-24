---
id: helpers-object-helpers
title: Object
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/helpers/class-object-helper.php)

Object trait is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Helpers\Object_Helper` class.

All of us have some custom helpers and stuff that we use around on multiple the project. We have created this simple trait helper that you can use in any PHP class as a [trait](/docs/legacy/v4/guides/extending-classes).

## is_valid_xml

Check if the provided XML is valid. It uses a `DOMDocument` library.

* @param xml $xml Full xml document.
* @return boolean

## is_json

Check if provided JSON is valid.

* @param string $string String to check.
* @return bool

## flatten_array

Flattens a multidimensional array.

* @param  array $array Multidimensional array.
* @return array

## sanitize_array

Sanitize all the values in an array.

* @param array  $array                 Provided array.
* @param string $sanitization_function WordPress function used for sanitization purposes.

* @link https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/

* @return array

## sort_array_by_order_key

Sort array by order key. It is used to sort terms.

* @param array $items Items array to sort. Must have order key.
* @return array
