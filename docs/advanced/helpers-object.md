---
id: helpers-object-helpers
title: Object
---

Object trait is located in `Eightshift Libs`. To extend it, use `Eightshift_Libs\Helpers\Object_Helper` namespace.

All of us have some custom helpers and stuff that we use around on multiple the project. We have created this simple trait helper that you can use in any PHP class as a [trait](/eightshift-docs/docs/guides/extending-classes). To see all the class helper go [here](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-object-helper.php) and help your selves.


## is_valid_xml

Check if provided XML is valid file. It uses DOMDocument library.

* @param xml $xml Full xml document.
* @return boolean

## is_json

Check if provided json is valid.
* @param string $string String to check.
* @return bool

## flatten_array

Flattens multidimensional array.

* @param  array $array Multidimensional array.
* @return array

## sanitize_array

Sanitize all values in an array.

* @param array  $array                 Provided array.
* @param string $sanitization_function WordPress function used for sanitization purposes.

* @link https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/

* @return array

## sort_array_by_order_key

Sort array by order key. Used to sort terms.

* @param array $items Items array to sort. Must have order key.
* @return array
