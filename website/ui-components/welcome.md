---
id: welcome
title: Welcome
---
import {useState} from 'react';
import { Button, InputField } from '@eightshift/ui-components';

export const Demo = () => {
	const [a, setA] = useState('a');
	return (
		<InputField value={a} onChange={setA} />
	)
};

# UI components
This section goes through

## Eightshift UI components

Eightshift UI components is a collection of commonly-used UI components, utilities and icons, meant to provide the best experience both for users and developers while making the editor UI look modern.

They're meant to be uncoupled for WordPress so the updates can be easier. Also included are icons and some helpers and utilities.

Learn more at https://github.com/infinum/eightshift-ui-components.

## Eightshift Frontend Libs components

This is a collection of components more closely related to WordPress, mostly built with Eightshift UI components internally.

:::caution Warning
Frontend libs v13+ does not include icons and most of the helpers, import them from Eightshift UI components instead.
:::

:::tip Looking for legacy component docs?
Find them [here](/components/legacy-component-docs)
:::
