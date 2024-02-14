---
id: helpers
title: Helpers
---

Eightshift Forms offers static helpers that can be implemented in your project. The key difference between these helpers and filters is that you can use the former in your theme or plugin code regardless of the load cycle.

All helpers can be found [here](https://github.com/infinum/eightshift-forms/blob/develop/src/Helpers/esForms.php).

### esFormsGetFormIdByName

This function retrieves the custom, unique name of a form, as set in the Form settings, from the provided form ID. It's useful when applying specific settings to one or more forms using filters in your project.

 Form identification by name (instead of the default "by ID"), can be useful if switching environments when the form ID could change.

```php
if (\function_exists('esFormsGetFormIdByName')) {
  echo esFormsGetFormIdByName('<form-id>');
}
```

### esFormsDecryptor

This helper provides decrypt and encrypt methods for variations set in the Form settings, passed to the "Thank you" page after form submission.

```php
if (\function_exists('esFormsDecryptor')) {
  $variation = isset($_GET['es-variation']) ? \esFormsDecryptor(\sanitize_text_field(\wp_unslash($_GET['es-variation']))) : '';
}
```

### esFormsGeolocationCountriesList

This method generates a list of countries available in the geolocation API and country fields.

```php
if (\function_exists('esFormsGeolocationCountriesList')) {
  $countriesList = esFormsGeolocationCountriesList();
}
```

### esFormsGetSelectOptionsArrayFromString

This helper parses the block grammar output (that the Gutenberg editor generates) for block options, making it easy to use them in your projects.

```php
if (\function_exists('esFormsGetSelectOptionsArrayFromString')) {
  $select = esFormsGetSelectOptionsArrayFromString('<options>');
}
```

### esFormsGetComponentsRender

This helper allows you to access the Eightshift Forms component `render` method, enabling you to utilize all Forms  components in your projects. If you already have a style set for the selected component, you can use this helper to render it with all the necessary data and styling applied.

A list of all components can be found [here](https://github.com/infinum/eightshift-forms/tree/develop/src/Blocks/components).

```php
if (\function_exists('esFormsGetComponentsRender')) {
  $render = esFormsGetComponentsRender('<component>', '[<attributes>]');
}
```

### esFormRenderForm

If you want to output a form in a custom template or block, you can use this helper to do so.

Please note that not all functionalities are available, and certain options might not be available.

```php
if (\function_exists('esFormRenderForm')) {
  echo esFormRenderForm('<formId>', '[<attributes>]');
}
```

### esFormGetEntry

If you need to retrieve form entry data, you can use this helper by providing entry unique ID.

```php
if (\function_exists('esFormGetEntry')) {
  $entry = esFormGetEntry('<entryId>');
}
```
