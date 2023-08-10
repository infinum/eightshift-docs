---
id: manual-initiation
title: Manual initiation
---

If you don't want the forms JavaScript to load automatically, you can disable from the admin global settings and load it manually using this event.

```js
window.addEventListener('esFormsManualInitLoaded', ({detail}) => {
	// Load the form.
	detail.esForms.form.init();
});
```
