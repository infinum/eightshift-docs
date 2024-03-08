---
id: shortcodes
title: Shortcodes
---

## What are shortcodes?

Shortcodes are small pieces of code that you can use to add predefined forms to your website. They are used to simplify the process of adding forms to your website.

## esFormsLink

This shortcode is used to add a simple link to your form. For example you need to add a privacy policy link to your form checkbox label.

```php
[esFormsLink url="https://eightshift.com" label="Eightshift" /]
```

## esFormsROIP

This shortcode is used to toggle content in the result output block based on the API response. If you API response returns a specific key it will use that value and replace the default content.

```php
[esFormsROIP name="<key>"]Default content[/esFormsROIP]
```
