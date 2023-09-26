---
id: cloudflare
title: Cloudflare
---

## What is Cloudflare?

Cloudflare is a large network of servers that can improve the security, performance, and reliability of anything connected to the Internet. This is done by serving content as a _reverse proxy_ for all of your website's traffic.

![Cloudflare screen](/img/forms/cloudflare.webp)

## How to use

After setting up Cloudflare, head to the Global settings and enable Cloudflare. This will set up all the necessary options in the backend for everything to function properly.

## Features affected by Cloudflare

Cloudflare affects the following features:

### Geolocation

By default geolocation uses the IP database to get user's location. With Cloudflare enabled, geolocation will use Cloudflare headers as a data source.

:::note
Make sure IP geolocation is enabled in the Cloudflare dashboard. More details on the Cloudflare IP geolocation functionality can be found [here](https://developers.cloudflare.com/support/network/configuring-ip-geolocation/).
:::

### Security

When using Cloudflare, the user's IP address is masked and replaced with the IP address of the Cloudflare server. This ensures everything keeps working fine, with keeping all of the users private.
