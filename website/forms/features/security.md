---
id: security
title: Security
---

The security feature enables you to enhance the security of your forms. Our rate-limiting function keeps track of user requests and compares them to the set limit.

![Security screen](/img/forms/security.webp)

## How to use it?

To use this feature, you can set the `number of requests (per minute)` and a `time limit (in seconds)` on the global settings page.

We monitor each request and will display an error message if the limit is exceeded. Once the time limit has passed, the user can submit the form again.

## Is this feature GDPR compliant?

The user's IP address determines the rate limit. However, we hash each stored IP address with the md5 method to comply with GDPR.

## Cloudflare

If you have Cloudflare turned on for your project, please make sure that you read the [Cloudflare documentation](cloudflare) to make sure that the security feature works as expected.
