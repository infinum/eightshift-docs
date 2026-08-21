---
id: increment
title: Increment
---

Increment gives every successful submission of a form its own sequential number. Unlike the entry ID or the form ID, you control where the numbering starts and how it looks, which makes it a good fit for order numbers, payment references, ticket numbers or application IDs.

This is what makes it possible to use Forms as a payment processor front end — payment gateways need a unique, predictable reference for every transaction, and the increment provides exactly that.

## How to use it

Open the form settings and go to the **General → Increment** tab.

- **Increment start number** — the number the counter starts from.
- **Increment length number** — the minimum length of the output. Shorter numbers are padded with leading zeros, so a length of `5` turns `42` into `00042`.

The same tab shows the **current increment** for that form, with a **Reset** button next to it that sets the counter back to the start number.

:::note
The counter is per form, and it is stored with the form itself. Every form has its own sequence.
:::

:::caution
Resetting the counter means the numbers that follow will repeat the ones already used. If the increment is used as a payment or order reference, only reset it when you're sure that's what you want.
:::

## Where the number is used

The counter is bumped on every **successful** submission, and the new value is available in several places:

- **E-mails** — use the `mailerIncrementId` template tag in the mailer subject or template to print it in the email.
- **Entries** — enable _Increment ID_ under the [entries](entries) additional values settings to store it alongside the submitted data.
- **Payment integrations** — Corvus uses it as the `order_number` and Paycek as the `paymentId`.

:::note
Both payment integrations have an option to use the entry ID instead of the increment, in case you'd rather reference the stored entry. That option needs the [entries](entries) feature to be enabled.
:::

## Payment processor flow

A typical setup, when a form is used to take payments:

1. Set the increment start number to a value that doesn't collide with any references already used in the payment gateway.
2. Set the increment length so the reference matches the format you want to see in the gateway's dashboard.
3. Enable the _Increment ID_ entry value, so every stored entry keeps the reference that was sent to the gateway.
4. Add the `mailerIncrementId` tag to the confirmation email, so the customer receives the same reference.

That way the same number identifies the transaction in the gateway, in your entries, and in the customer's inbox.
