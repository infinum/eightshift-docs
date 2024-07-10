---
id: helpers
title: Helpers
---

Frontend libs Tailwind includes many useful helpers.

Here are a few featured:

## General helpers

### `getHiddenOptions`
In order to simplify hiding parts of component options, the `getHiddenOptions` helper was created.

To use, first in your component add:
```jsx
export const DemoOptions = (attributes) => {
	const {
		setAttributes,
		// highlight-next-line
		hideOptions,
		additionalControls,
		...rest
	} = attributes;

	...

	// highlight-next-line
	const hiddenOptions = getHiddenOptions(hideOptions);

	...

	return (
		<>
			<Toggle
				label={__('My option', 'fe-libs-tailwind')}
				checked={myOption}
				onChange={(value) => setAttributes({ [getAttrKey('myOption', attributes, manifest)]: value })}
				// highlight-next-line
				hidden={hiddenOptions?.myOption}
			/>
		</>
	);
};
```

:::note
The `hidden` property is included in all Eightshift UI components.
If using something external, conditionally render it just as with any other React component.
:::

Then, in a different component/block:
```jsx
<DemoOptions
	{...props('demo', attributes)}
	// highlight-next-line
	hideOptions='myOption'
/>
```

If you want to hide multiple options:
```jsx
<DemoOptions
	{...props('demo', attributes)}
	// highlight-next-line
	hideOptions='myOption,myOtherOption,loremIpsumOption'
/>
```

### `GutenbergBlock`
Simplifies block creation.

```jsx
<GutenbergBlock
	{...props}
	options={MyBlockOptions}
	editor={MyBlockEditor}
	toolbar={MyBlockToolbar}
/>
```

## Fetch helpers

### `fetchFromWpRest`
Replaces the `getFetchWpApi` function from standard Frontend libs.

Props are mostly the same, with a few differences:
- option labels will automatically have HTML entities unescaped (can be disabled with `noUnescapeTitle`)
- by default the labels are truncated to 32 characters (can be changed with `truncateTitle`)

### `wpSearchRoute`
A pre-configured fetch function that simplifies adding an URL picker with WP search autocomplete.

```jsx
<LinkInput
	icon={buttonIsAnchor ? icons.globeAnchor : icons.globe}
	url={buttonUrl}
	onChange={({ url, isAnchor }) => {
		setAttributes({
			[getAttrKey('buttonUrl', attributes, manifest)]: url,
			[getAttrKey('buttonIsAnchor', attributes, manifest)]: isAnchor ?? false,
		});
	}}
	// highlight-next-line
	fetchSuggestions={wpSearchRoute}
	hidden={hiddenOptions?.link}
/>
```

## Responsive helpers
### `generateOptionsFromValue`

If you're using a `Responsive` component with an attribute that doesn't have any obvious options, you can use this helper to generate options that you can pass to Responsive to ensure user-friendly per-breakpoint value preview.

You can provide a function to the second argument if you want to customize the value output.

```jsx
<Responsive
	value={imageData}
	onChange={(value) => setAttributes({ [getAttrKey('imageData', attributes, manifest)]: value })}
	icon={icons.imageFile}
	label={__('Image', 'eightshift-ui-components')}
	// highlight-next-line
	options={generateOptionsFromValue(imageData)}
	{...responsiveData}
>
	{({ breakpoint, currentValue, handleChange }) => (
		<MediaPicker
			onChange={({ id, url }) => handleChange({ id: id, url: url })}
			imageId={currentValue?.id}
			imageUrl={currentValue?.url}
			noDelete={breakpoint !== '_default'}
		/>
	)}
</Responsive>
```

## Tailwind config helpers

### `processEightshiftClasses`

Used within the Tailwind config to help process all the manifests and keep all the needed classes in the output.

You won't have to add this manually, it will be included in the default setup.

### `getScreens`

Used within the Tailwind config to generate breakpoint data from the global manifest.

You won't have to add this manually, it will be included in the default setup.
