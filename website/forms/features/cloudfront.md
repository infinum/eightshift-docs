---
id: cloudfront
title: CloudFront
---

## What is CloudFront?

Amazon CloudFront is a content delivery network (CDN) service provided by Amazon Web Services (AWS). It speeds up the delivery of static and dynamic web content by caching it at edge locations around the world, acting as a _reverse proxy_ for all of your website's traffic.

## How to use

After setting up CloudFront, head to the Global settings, open **Miscellaneous → CloudFront** and enable it. This will set up all the necessary options in the backend for everything to function properly.

:::note
Eightshift Forms doesn't configure CloudFront itself. Make sure the viewer headers are forwarded to the origin in your CloudFront distribution — more details on CloudFront headers can be found [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/adding-cloudfront-headers.html).
:::

## Features affected by CloudFront

CloudFront affects the following features:

### Geolocation

By default geolocation uses the IP database to get the user's location. With CloudFront enabled, geolocation will use the `CloudFront-Viewer-Country` header as a data source.

:::note
The `CloudFront-Viewer-Country` header must be enabled in your distribution's origin request policy, otherwise geolocation falls back to the IP database.
:::

### Security

When using CloudFront, the user's IP address is masked and replaced with the IP address of the CloudFront edge server. With the feature enabled, the rate limiting uses the `CloudFront-Viewer-Address` header instead, so the limit is applied to the real visitor. The port part of that header value is stripped, only the IP address is used.

## Using CloudFront and Cloudflare together

Both features can be enabled at the same time. In that case:

- Geolocation uses the Cloudflare header first and falls back to the CloudFront header.
- The visitor's IP address is taken from the CloudFront header, as it is resolved last.

If your traffic goes through only one of the two, enable only that feature.
