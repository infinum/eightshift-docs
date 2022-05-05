---
id: helpers-php
title: PHP
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

## ensureString

Makes sure the output is a string. Useful for converting an array of components into a string.
If you pass an associative array, it will output strings with keys. Used for generating data-attributes from an array.

- @param array|string $variable Variable we need to convert into a string.
- @throws ComponentException When $variable is not a string or an array.
- @return string

## classnames

Converts an array of classes into a string that can be echoed.

- @param array $classes Array of classes.
- @return string

## render

Renders a component and (optionally) passes some attributes to it.

Note about the `parentClass` attribute: If provided, the component will be wrapped with a parent BEM selector.

For example, if `$attributes['parentClass'] === 'header'` and `$component === 'logo'` are set, the component will be wrapped with a `<div class="header__logo"></div>`.

- @param string $component Component's name or full path (ending with .php).
- @param array  $attributes Array of attributes that is implicitly passed to the component.
- @param string $parentPath If parent path is provided, it will be appended to the file location. If not, get_template_directory_uri() will be used as a default parent path.
- @throws \Exception When we're unable to find the component by $component.
- @return string

## getManifest

Get `manifest json`. Used for getting block/components manifest.

- @param string $path Absolute path to manifest folder.
- @throws \Exception When we're unable to find the component by $component.
- @return array

## responsiveSelectors

This function is the PHP equivalent of the JavaScript function on this [link](helpers-javascript).

## checkAttr

This function is the PHP equivalent of [this JavaScript function](helpers-javascript), except there is no `undefinedAllowed` parameter - it's used only on the WordPress admin side.

## checkAttrResponsive

This function is the PHP equivalent of [this JavaScript function](helpers-javascript), except there is no `undefinedAllowed` parameter - it's used only on the WordPress admin side.

## selector

This function is the PHP equivalent of the JavaScript function on this [link](helpers-javascript).

## restResponseHandler

Ensure the correct response for REST using the handler function.

- @param integer     $code Response Status code.
- @param string      $status Response Status name (success/error).
- @param string|null $msg Response Message.
- @param array|null  $data Response additional data.
- @return \WP_REST_Response|\WP_Error If response generated an error, WP_Error, if response is already an instance, WP_REST_Response, otherwise returns a new WP_REST_Response instance.

## isValidXml

Check if XML is valid. Used for validating SVG files.

- @param string $xml Full xml document.
- @return boolean

## isJson

Check if json is valid.

- @param string $string String to check.
- @return bool

## flattenArray

Flatten multidimensional array.

- @param array $array Multidimensional array.
- @return array

## sanitizeArray

Sanitize all the values in an array.

- @link https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/
- @param array  $array Provided array.
- @param string $sanitizationFunction WordPress function used for sanitization purposes.
- @return array

## sortArrayByOrderKey

Sort array by order key. Used to sort terms.

- @param array $items Items array to sort. Must have order key.
- @return array

## getShortcode

Call a shortcode function by tag name.

- @author J.D. Grimes
- @link https://codesymphony.co/dont-do_shortcode/
- @param string      $tag The shortcode whose function to call.
- @param array       $attr The attributes to pass to the shortcode function. Optional.
- @param string|null $content The shortcodes content. Default is null (none).
- @return string|bool False on failure, the result of the shortcode on success.
