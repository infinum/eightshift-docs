---
id: shortcodes
title: Shortcodes
---

## What are shortcodes?

Shortcodes are small pieces of code that allow adding forms to the site in places blocks can't be easily added.

## esFormsLink

This shortcode allows adding links within text labels, e.g. if you need to add a privacy policy link to a form checkbox label.

```php
[esFormsLink url="https://eightshift.com" label="Eightshift" /]
```

## esFormsROIP

The `esFormsROIP` (_Result output item part_) shortcode allows showing certain content inline, based on the user input. The content is shown if the provided `name` matches the fields defined within filters.

```php
[esFormsROIP name="<key>"]Default content[/esFormsROIP]
```
