---
id: mailer
title: Mailer
---

Mailer is not and integrations service but a internal service used to send emails. You can connect mailer service with any of the integration services to send emails to your customers.

Forms can also use mailer to provide fallback email service for the forms.

With mailer you can use simple Markdown syntax to create your emails.

## Recipient e-mail

The _Recipient e-mail_ field in the form's Mailer settings defines where the form data is sent. Multiple addresses can be used by separating them with a comma, and template tags (e.g. `{field-name}`) can be used to build the address out of the submitted data.

## Recipient e-mail advanced

Recipients can also be decided by what the user submitted. In the _Recipient e-mail advanced_ field you can define additional addresses, each with its own set of conditions. Provide one pair per line:

```
email : conditions
```

Conditions are written as `field-name=value` and can be combined:

| Syntax | Meaning                                                        |
| ------ | -------------------------------------------------------------- |
| `&`    | AND — both conditions must match                               |
| `\|`   | OR — either condition can match                                |
| `---`  | separates multiple values for the same field, behaving like OR |
| `!=`   | negation — the field must not have that value                  |

For example:

```
test1@infinum.com : rating=1&checkboxes=check-1---check-2
test2@infinum.com : rating=2|select=option-1
test3@infinum.com : rating!=3|select=option-2
test4@infinum.com : rating=4
```

:::note
`AND` is evaluated before `OR`, so `a=1&b=2|c=3` means "(a is 1 and b is 2) or c is 3".
:::

### Append to recipient e-mail

Every matched line is added to the recipient list. What happens to the address from the _Recipient e-mail_ field depends on the _Append to recipient e-mail_ toggle:

- **On** — the matched addresses are added to the default recipient, so all of them receive the email.
- **Off** (default) — the matched addresses replace the default recipient.

:::note
If no line matches, the default _Recipient e-mail_ is used, regardless of the toggle.
:::

:::caution
Conditions match against the submitted field values, so the fields used in the conditions must have a **Name** set, and the values must match the field's values (not the labels).
:::
