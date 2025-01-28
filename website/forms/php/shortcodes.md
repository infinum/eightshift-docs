---
id: shortcodes
title: Shortcodes
---

## What are shortcodes?

Shortcodes are small pieces of code that allow adding forms to the site in places blocks can't be easily added.

## esFormsLink

This shortcode allows adding links within text labels, e.g. if you need to add a privacy policy link to a form checkbox label.

**Available usage:**
* Form field label (e.g. checkbox label, radio label, etc.)

**Available attributes:**
* url - (string) (required) The URL of the link.
* label - (string) (required) The label of the link.

**Example usage:**
```php
[esFormsLink url="https://eightshift.com" label="Eightshift" /]
```

## esFormsROIP

The `esFormsROIP` (_Result output item part_) shortcode allows showing certain content inline, based on the user input. The content is shown if the provided `name` matches the fields defined within filters.

**Available usage:**
* Result output custom post type

**Available attributes:**
* name - (string) (required) The name of the key to check.

**Example usage:**
```php
[esFormsROIP name="<key>"]Default content[/esFormsROIP]
```

## esFormsROISF

The `esFormsROISF` shortcode will output button that can be used to restore/show form after the form is submitted and the result is shown. This works only if the form is set to be hidden after submission.

**Available usage:**
* Result output custom post type

**Available attributes:**
* none

**Example usage:**
```php
[esFormsROISF]Show form[/esFormsROISF]
```

## esFormsRangeCurrent

The `esFormsRangeCurrent` shortcode allows showing the current value of the range input.

**Available usage:**
* Form field range label.

**Available attributes:**
* value - (string) (required) The initial value of the range.
* prefix - (string) (optional) The prefix of the range value.
* suffix - (string) (optional) The suffix of the range value.

**Example usage:**
```php
[esFormsRangeCurrent value="<initialValue>" prefix="<valuePrefix>" suffix="<valueSuffix>" /]
```
