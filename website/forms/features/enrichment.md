---
id: enrichment
title: Enrichment
---

## Enrichment

This feature considers various user data elements to create a comprehensive and precise representation of their activity. To activate enrichment, map the `URL` or `cookie` values with the relevant form fields.

### How will this help me?

With this feature, users can visit your form and leave without submitting it. You will know where they originated if they return to the same form. This way, you can increase your conversion rate.

### How does it work?

By providing a parameters map in settings, forms can read users `cookies` and `URL` parameters and store that data in the users `localStorage`. This data is updated every time the user lands on any pages containing the forms.

For example, if the user first time lands on this page:

```
 https://infinum.com/?utm_content=test
```

and you have provided the corresponding parameter mapping in the settings. Forms will store the GET parameters in the `local storage` and use it to prefill the form fields.

:::note
Forms only store parameters defined in the mapping.
:::

Next time, if the user returns to the same page without this parameter, forms will use the value from `local storage` if the storage is still valid.

### How long does the data stay in the storage?

By default, the data is stored for 30 days. You can change this value in the settings.

![Enrichment screen](/img/forms/enrichment.webp)

### How to map parameters?

First, you provide the list of all the `cookies` and `URL` parameters you want to use.

![Enrichment params screen](/img/forms/enrichment-params.webp)

Next, you need to map them with the corresponding form fields by providing the field names.

![Enrichment map screen](/img/forms/enrichment-map.webp)

You can map multiple fields with the same parameter by separating the field names with a comma.

:::caution
The field name will match the mapped fields on every form in your project.
:::

## Prefill from storage

If a user doesn't finish submitting a form, the enrichment prefill feature remembers their inputs in localStorage. When they visit the form again, the prefill feature will automatically input the previous data. However, if the form is successfully submitted, this data will be erased.

:::caution
It is important to disclose this in your site's Privacy policy.
:::

![Enrichment prefill storage map screen](/img/forms/enrichment-storage.webp)

## Prefill from URL

The same as prefill from storage, prefill from URL will prefill the form fields if the user has data in the URL. This way, your form can be shared with prefilled data.

:::caution
It is important to disclose this in your site's Privacy policy.
:::

![Enrichment prefill url map screen](/img/forms/enrichment-url.webp)

### URL format

:::note
Both the enrichment feature and its _prefill from URL_ option must be enabled in the global settings, otherwise the URL is ignored.
:::

All the data goes into a **single** query parameter, named `form-` plus the form ID:

```
?form-{formId}=field-name==value/other-field==value
```

| Separator | Use                                     |
| --------- | --------------------------------------- |
| `/`       | separates fields                        |
| `==`      | separates the field name from its value |
| `---`     | separates multiple values for one field |

Field names are the **Name** values set in the form editor, and the values must match the field's values (not the labels).

### Examples

A simple text and textarea prefill:

```
https://example.com/contact/?form-840=first-name==Ivan/message==Hello%20there
```

An email and a phone number — the `+` has to be encoded as `%2B`:

```
https://example.com/contact/?form-840=email==ivan%40example.com/phone==%2B385911234567
```

A phone field with a separate prefix — the number comes first, the dialing code (without `+`) second:

```
https://example.com/contact/?form-840=phone==911234567---385
```

Multiple values for checkboxes and a select, a country and a date:

```
https://example.com/apply/?form-840=checkboxes==check-1---check-2/select==option-1/country==hr/date==2026-01-31
```

A range or rating field takes a plain number:

```
https://example.com/survey/?form-840=rating==4/range==10
```

:::note
Values must be URL encoded — space as `%20`, `@` as `%40`, `+` as `%2B`, `&` as `%26`, `#` as `%23`.
:::

:::caution
A value can't contain a `/`, since that is the field separator and it can't be escaped. Values like URLs have to be filled in manually. File fields can't be prefilled either.
:::

Fields with an empty value are skipped, so a parameter such as `field-name==` does nothing.

:::tip
The form ID is the ID of the form post. If the prefill doesn't fire, check the value the form actually uses in the browser console via `window.esForms`.
:::

## Smart prefill

Prefill from storage remembers a user's inputs for one form. _Smart prefill_ goes a step further and remembers selected fields across **all** the forms on your site — if a user types their email into a newsletter form, the contact form further down the site will already have it filled in.

Configure it in the global settings, under **Enrichment → Prefill smart**. Add one field name per line in the _Add custom enrichment smart parameters_ field.

Then, whenever a user fills in a field with one of those names, its value is stored in the browser and used to prefill every field with the same name on any other form.

:::note
These are field names, the same ones you set in the form editor, not URL parameters. A field is only prefilled if its name matches exactly.
:::

The values are stored in `localStorage` under the `es-storage-smart` key, separately from the per-form prefill data.

|                                  | Prefill from storage                                   | Smart prefill                                         |
| -------------------------------- | ------------------------------------------------------ | ----------------------------------------------------- |
| Scope                            | one form                                               | every form with a matching field name                 |
| Requires                         | the _prefill from storage_ option                      | only the enrichment feature                           |
| Cleared on successful submission | yes                                                    | no                                                    |
| Expires after                    | _Clear form prefill storage after_ (2 days by default) | _Clear enrichment storage after_ (30 days by default) |

:::caution
Smart values intentionally survive a successful submission, so keep the list to convenience fields like a name, an email or a phone number. Don't add anything sensitive to it.
:::

:::caution
It is important to disclose this in your site's Privacy policy.
:::

## Prefill from another form

Fields can also be prefilled with the data from a form the user has just submitted. See the [connected forms](connected-forms) feature.
