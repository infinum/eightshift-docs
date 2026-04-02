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

The `esFormsROISF` (_Result output item show form_) shortcode renders a submit button inside a result output item. Use it to give users the option to re-submit the form from the result output page.

The button label is set via the shortcode content. If the [`es_forms_block_form_component_show_form`](filters/block/form/component-show-form) filter is set, it will use the custom component returned by that filter instead of the default submit button.

**Available usage:**
* Result output custom post type

**Available attributes:**
* _(none)_ — button label is set as the shortcode content.

**Example usage:**
```php
[esFormsROISF]Submit again[/esFormsROISF]
```
