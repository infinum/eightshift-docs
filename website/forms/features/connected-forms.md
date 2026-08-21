---
id: connected-forms
title: Connected forms
---

Connected forms let one form pass its data to another form. After the first form is successfully submitted, the fields of the connected form are automatically populated with the values the user just entered.

This is useful for multi-part flows that can't be a single form — for example, a short lead form followed by a longer application form, where the user shouldn't have to retype their name and email.

## How to use it

Open the form that will be submitted **first**, go to its settings, and open the **General → Connected** tab.

1. **Connected form** — select the form you want to pass the data to.
2. **Connected fields** — map the fields once the connected form is selected.

The mapping is a plain list, one pair per line, in the following format:

```
source-field-name : connected-field-name
```

For example:

```
email : contact-email
first-name : name
```

The left side is a field name from the current form, and the right side is a field name from the connected form. Both dropdowns in the settings list the available field names for each side.

:::note
Only fields with a **Name** set can be mapped. If a field is missing from the available names list, set its name in the form editor first.
:::

## How it works

1. The first form is submitted and validated as usual.
2. On success, the API response includes the connected form ID and the field mapping.
3. The frontend finds the connected form on the page and sets each mapped field value based on its field type.

:::caution
Both forms must be rendered on the same page. The connected form is looked up in the DOM, so if it isn't on the page — for instance, it's behind a redirect or in a modal that isn't rendered yet — nothing is populated.
:::

Values defined as form [variations](success-redirect#variations) are also applied to the connected form, alongside the mapped fields.

## JavaScript events

Two events are dispatched around the fill, so you can hook into the process:

- `esFormsBeforeEnrichmentConnectedFormFill`
- `esFormsAfterEnrichmentConnectedFormFill`

More details are in the [available events](../javascript/events/available-events) documentation.
