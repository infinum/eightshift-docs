---
id: known-issues
title: Known issues
---

Here we list all known issues and their workaround.

### Multiple forms on the same page

Forms JavaScript initialization works by checking the form's _Unique ID_. If you have multiple forms with the same _ID_ on the same page, only the first form will be initialized.

This is a known issue that will not be fixed soon. The workaround is duplicating the form and using the duplicated form on the page.

### Geolocation async loading

When you initialize a form, the process is synchronous, which means that everything is loaded at the same time. However, when you enable geolocation, the initialization process becomes asynchronous. This means that the form will be shown until the geolocation API call is resolved, which can take a few seconds. During this time, a loading spinner will be displayed until the form is ready to be shown.

### Setting forms field value manually

Forms uses JavaScript store to keep track of the form's state. If you set a field value manually, the form will not be aware of this change.

To fix you should **never** set the field value manually. Instead, you should use `Store` helper methods to set the field value.

For more details check the [Store documentation](/forms/javascript/state/store).

### Manually initializing forms

*Coming soon*

### 
