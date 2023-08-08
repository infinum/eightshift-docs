---
id: how-to-use
title: How to use?
---

As mentioned earlier, Eightshift Forms utilizes the `esForms` global window object to manage the state. This approach ensures consistency across various functionalities and components. 

The `esForms` window object contains all the functions developers can use in their forms. Doing so makes all features available for your project, with minimal risk of future disruptions or changes.

To utilize the `esForms` object, call it directly from the window object:

```js	
window.esForms
```

or you can use built-in events which also contain all the state in the time of the event.

:::caution
It's important to be careful when using a state outside of the `esFormsJsFormLoaded` event, as it may not be ready at the time of use. To ensure that the state is available, calling your JavaScript after the `domReady` event and with the `esFormsJsFormLoaded` event is necessary.
:::

## Example

In this example we are using the `esFormsJsFormLoaded` event to initialize our form in JavaScript. 

```js
import domReady from '@wordpress/dom-ready';

domReady(() => {
	window.addEventListener('esFormsJsFormLoaded', ({detail}) => {
		const {
			formId,
			esForms = {
				store,
			},
		} = detail;

		if (store?.getStateFormElement(formId)) {
			// Do some actions with the form.
		}
	});
});
```
