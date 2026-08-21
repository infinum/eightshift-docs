---
id: cron-jobs
title: Cron jobs
---

Some work can't happen during a form submission — cleaning up old data, retrying queued API calls, or removing temporary files. Those tasks run in the background as WP-Cron jobs, so submissions stay fast and the database doesn't grow indefinitely.

Every job is registered on `admin_init` if it isn't scheduled yet, and starts running from the next day onwards.

## Schedules

Three custom schedules are registered on top of the WordPress defaults:

| Schedule                | Interval   |
| ----------------------- | ---------- |
| `esFormsEvery15Minutes` | 15 minutes |
| `esFormsEveryHour`      | 1 hour     |
| `esFormsEveryDay`       | 24 hours   |

## Available jobs

| Job                                 | Runs             | What it does                                                                                                                                                                                                                   |
| ----------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `es_forms_file_upload`              | Daily            | Deletes uploaded files older than two hours from the temporary upload folder. Uploads only pass through the site, so nothing is kept after it reaches the integration or the email. See [file upload security](file-security). |
| `es_forms_entries_auto_delete`      | Daily            | Goes through all forms and, for every form with auto-delete enabled, deletes [entries](entries) older than that form's retention interval (160 days by default).                                                               |
| `es_forms_activity_log_auto_delete` | Daily            | Deletes activity log entries older than the retention interval set in the [fallback emails](fallback-emails) settings (30 days by default). Runs only if the feature and its auto-delete option are enabled.                   |
| `es_forms_cleanup_log_entries`      | Daily            | Removes rate limiting log entries older than a day, so the [security](security) feature only keeps what it needs to count requests.                                                                                            |
| `es_forms_oauth_cleanup`            | Daily            | Deletes the temporary OAuth authorization options used while connecting NationBuilder and Pardot, so a stale approval can't be reused.                                                                                         |
| `es_forms_clearbit_queue`           | Every 15 minutes | Processes the queued [Clearbit](../integrations/clearbit) lookups and pushes the enriched data to HubSpot. Queued work is retried here instead of blocking the submission.                                                     |
| `es_forms_nationbuilder_queue`      | Every 15 minutes | Processes the queued NationBuilder list and tag updates for submitted signups.                                                                                                                                                 |

:::note
Each job checks its own feature before doing anything. If the feature is off or not configured, the job exits immediately — so an unused job costs nothing.
:::

## Running a job manually

All jobs can be triggered on demand from **Global settings → Troubleshooting → Cron Jobs**. Every job is listed with a button that runs it immediately, instead of waiting for the next scheduled run.

This is useful when you want to clean up data right away, retry a queued integration call, or check whether a job behaves as expected on a site with little traffic.

:::note
WP-Cron is triggered by site visits, so on a low-traffic site jobs can run later than scheduled. If you need exact timing, disable WP-Cron (`DISABLE_WP_CRON`) and trigger `wp-cron.php` from a real server cron job.
:::

:::caution
The manual trigger runs the job with the current settings, which for the cleanup jobs means data is deleted right away. Deleted entries, logs and files can't be recovered.
:::
