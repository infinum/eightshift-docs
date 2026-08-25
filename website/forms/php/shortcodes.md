---
id: shortcodes
title: Shortcodes
---

## What are shortcodes?

Shortcodes are small pieces of code that allow adding forms to the site in places blocks can't be easily added.

## esFormsEntryProgress

The `esFormsEntryProgress` shortcode sums a numeric field from all the stored [entries](../features/entries) of a form and outputs the total against a target value, optionally with a progress bar. Useful for donation goals, sign-up counters, and similar progress indicators.

:::note
The entries feature must be enabled on the form; otherwise there is no data to read from.
:::

**Available usage:**
* Anywhere shortcodes are parsed (post or page content, Shortcode block, widgets, etc.)

**Available attributes:**
* form_id - (string) (required) The ID of the form whose entries are counted.
* key - (string) (required) The entry field name whose values are summed.
* limit - (number) (required) The target value used to calculate the percentage. Can't be `0`.
* output - (string) (optional) The output format, `percentage` (default) or `number`.
* prefix - (string) (optional) Text shown before the value.
* suffix - (string) (optional) Text shown after the value.
* show_bar - (string) (optional) Render the progress bar, `yes` or `no` (default).
* condition_key - (string) (optional) The entry field name used to filter which entries are counted.
* condition_value - (string) (optional) The value `condition_key` must match for the entry to be counted.

**Example usage:**
```php
[esFormsEntryProgress form_id="123" key="amount" limit="10000" output="number" prefix="$" show_bar="yes" /]
```

Counting only the entries where the `status` field equals `paid`:
```php
[esFormsEntryProgress form_id="123" key="amount" limit="10000" condition_key="status" condition_value="paid" /]
```

**Good to know:**
* Nothing is output if `form_id`, `key`, or a non-zero `limit` is missing.
* Entries with a non-numeric value in `key` are skipped.
* Both `condition_key` and `condition_value` must be provided for the filtering to apply.
* The `percentage` output is formatted with two decimals, and the `number` output is rounded to the nearest integer.
* The value is not capped, so it can go over `100%` if the sum exceeds the `limit`.
* Up to 10 000 entries per form are taken into account.

**Output markup:**
```html
<div class="es-entry-progress">
	<div class="es-entry-progress__bar">
		<div class="es-entry-progress__status" style="width: 42.50%;"></div>
	</div>
	<div class="es-entry-progress__text">42.50%</div>
</div>
```

:::note
The plugin doesn't ship any styles for these classes, so style them in your theme.
:::

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
