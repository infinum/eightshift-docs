---
id: pardot
title: Pardot
---

Pardot (Salesforce Marketing Cloud Account Engagement) is a B2B marketing automation platform that helps teams generate more leads and drive sales.

### Website

- [Visit website](https://www.salesforce.com/products/marketing-cloud/marketing-automation/)

### API Version

- V5

### API Documentation

- [Documentation](https://developer.salesforce.com/docs/marketing/pardot/overview)
- [Form Handlers](https://developer.salesforce.com/docs/marketing/pardot/guide/form-handler-v5.html)
- [Form Handler Fields](https://developer.salesforce.com/docs/marketing/pardot/guide/form-handler-field-v5.html)

### Integration type

- Form builder **not** provided by the service.
- The form is created using our forms fields and connected to Jira custom fields using form settings.

### Authentication

- Salesforce OAuth 2.0 (Connected App)

### OAuth Callback URL

Set this in your Salesforce Connected App:

```
{your-site-url}/wp-json/eightshift-forms/v1/oauth/pardot
```

### Environments

- Production
- Sandbox
