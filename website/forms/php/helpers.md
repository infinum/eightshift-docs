---
id: helpers
title: Helpers
---

Eightshift Forms offers static helpers that can be implemented in your project. The key difference between these helpers and filters is that you can use the former in your theme or plugin code regardless of the load cycle.

### esFormsGetFormIdByName

This function retrieves the custom unique name of a form as set in the settings when provided with the form ID. When applying specific settings to one or more forms using project filters, it is handy. Usually, forms are identified by their IDs, but if you switch the environment, the form ID may change. This helper helps you identify the form by its name instead of its ID.

```php
if (\function_exists('esFormsGetFormIdByName')) {
  echo esFormsGetFormIdByName('<form-id>');
}
```

### esFormsDecryptor

Decrypt and encrypt methods encode variations set in the form settings and passed to the thank you page upon form submission. This method lets you decode and use the variation in your theme or plugin.

```php
if (\function_exists('esFormsDecryptor')) {
  $variation = isset($_GET['es-variation']) ? \esFormsDecryptor(\sanitize_text_field(\wp_unslash($_GET['es-variation']))) : '';
}
```

### esFormsGeolocationCountriesList

The Geolocation countries list method generates a list of countries available in the geolocation API and country list feature.

```php
if (\function_exists('esFormsGeolocationCountriesList')) {
  $countriesList = esFormsGeolocationCountriesList();
}
```

### esFormsGetSelectOptionsArrayFromString

Once the select block options are outputted, they will be stored in HTML format, making it difficult to manipulate the data. However, there is a method to convert the HTML string into an array, allowing you to use it in your theme or plugin more easily.

```php
if (\function_exists('esFormsGetSelectOptionsArrayFromString')) {
  $select = esFormsGetSelectOptionsArrayFromString('<options>');
}
```

### esFormsGetComponentsRender

This helper allows you to access the Eightshift Forms component render method, enabling you to utilize all our form components in your theme or plugin. If you already have a style set for a select component, you can use this helper to render the component and pass the necessary data to it for use in your project.

A list of all components can be found [here](https://github.com/infinum/eightshift-forms/tree/develop/src/Blocks/components).

```php
if (\function_exists('esFormsGetComponentsRender')) {
  $render = esFormsGetComponentsRender('<component>', '[<attributes>]');
}
```
