---
id: fallback-emails
title: Fallback e-mails & activity log
---

When something goes wrong during a submission — an integration rejects the data, an API times out, a payment doesn't come back — the submitted data would otherwise be lost. This feature keeps a record of it: selected events are written to an **activity log** in the database, and can also be sent to you as a plain-text **fallback e-mail** with all the submitted data, ready for debugging or manual processing.

![Fallback screen](/img/forms/fallback.webp)

## How to use it

Enable the feature in the global settings, under **Troubleshooting → Fallback e-mails**, then turn on **Enable activity log**. The rest of the options only show up once the log is enabled.

## Activity log

Every logged event is stored in the database, along with the form it belongs to, the debug key that describes what happened, the originally submitted parameters and the integration's response. The visitor's IP address is hashed, never stored in plain text.

Logs can be browsed from the WordPress admin — all of them at once from the feature's settings, or only the ones belonging to a single form from that form's Fallback settings.

### Auto-delete

Turn on **Auto-delete old activity logs** and set a **retention interval** in days (30 by default) to keep the table from growing indefinitely. The cleanup is done by a daily [cron job](cron-jobs).

## Fallback e-mail

The **Fallback e-mail** field in the feature settings receives the e-mails for every logged event. Multiple addresses can be used by separating them with commas.

Each integration also has its own _Fallback e-mail_ tab in the global settings, so a specific integration's failures can reach additional people. Those addresses are added as `CC` — or become the main recipient if no global fallback e-mail is set.

:::note
If neither address is set, no e-mail is sent. The event is still written to the activity log.
:::

The e-mail is sent as plain text and contains the form title and ID, the debug key, the ID of the matching activity log entry, and the submitted data.

## Log level

The **Log level** option controls how much debug data is included in the e-mail:

- **Minimal** — only the debug key, so you know what happened without the payload.
- **Default** — the debug key plus the submission and integration response details, with the bulky form definition data (field lists, steps setup, file metadata) stripped out.
- **FULL MAX** — everything the request produced, the raw request included.

:::caution
`FULL MAX` e-mails contain the complete submission. Use it while debugging, not as a permanent setting, and keep in mind who receives those e-mails.
:::

## Events

Not everything is logged by default. The settings list the available events grouped by type — general submission errors, validation problems, per-integration failures, and so on — each with its own toggle and a short description of when it fires. The ones we suggest keeping on are marked as **recommended**.

Only the events you enable produce an activity log entry and a fallback e-mail, so you can start with the recommended set and switch on more while chasing a specific problem.

:::caution
Fallback e-mails and activity logs contain data submitted by your users, so this needs to be disclosed in your privacy policy, and the retention interval should match your data retention rules.
:::
