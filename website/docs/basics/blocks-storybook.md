---
id: blocks-storybook
title: Storybook
sidebar_label: Storybook
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

We have created a full storybook that hosts all our blocks/components/variations with a fully functional Block Editor, where you can try how blocks work and behave.

**Visit [Storybook](eightshift-docs/storybook/) for more details.**

> To speedup project build time Eightshift Boilerplate doesn't come with the storybook out of the box, you need to install it. To install Storybook to your project just type this command in you terminal and follow the instructions:

```shell
wp boilerplate create_blocks_storybook
```

## Create my custom story

You don't need to have stories in your block/component, but we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us.

If you used our way to set up your project, you already have Storybook ready to use. To start Storybook, run this command:

```js
npm run Storybook
```

In your project, you also have the `.storybook` folder, where all the configuration for Storybook is defined.

For your blocks/components/variation to be seen in the Storybook, you must have the `docs` folder and the `story.js` file in it.

### Block story

For all blocks, you don't need to write anything because all blocks stories look the same:

```js
import React from 'react';
import { Gutenberg, blockDetails } from '@eightshift/frontend-libs/scripts/storybook';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';
import readme from './readme.mdx';

export default {
	title: `Blocks/${manifest.title}`,
	parameters: {
		docs: { 
			page: readme
		}
	},
};

export const block = () => (
	<Gutenberg props={blockDetails(manifest, globalManifest)} />
);
```

We pull all the data from the manifest.json file and all the attribute values from the `example` key.

### Variation story

The same as the block's story.

### Component story

Components are not smart and can't be automatically built into the story. This is why you must create a story of all your component and mock the data. 
You should set all the mock data in the component `manifest.json` and just provide the story's implementation.

Button Block Editor component:

```js
import React from 'react';
import { Fragment } from '@wordpress/element';
import readme from './readme.mdx';
import manifest from './../manifest.json';
import { ButtonEditor } from '../components/button-editor';
import { ButtonOptions } from '../components/button-options';
import { ButtonToolbar } from '../components/button-toolbar';

export default {
	title: `Components/${manifest.title}`,
	parameters: {
		docs: { 
			page: readme
		}
	},
};

const props = manifest.example.attributes;

export const editor = () => (
	<ButtonEditor {...props} />
);
```

Button Block Editor Size variation:

```js
import React from 'react';
import { Fragment } from '@wordpress/element';
import readme from './readme.mdx';
import manifest from './../manifest.json';
import { ButtonEditor } from '../components/button-editor';
import { ButtonOptions } from '../components/button-options';
import { ButtonToolbar } from '../components/button-toolbar';

export default {
	title: `Components/${manifest.title}`,
	parameters: {
		docs: { 
			page: readme
		}
	},
};

const props = manifest.example.attributes;

export const size = () => (
	<Fragment>
		{manifest.options.sizes.map((values, index) => (
			<Fragment key={index}>
				<ButtonEditor
					{...props}
					buttonContent={values.label}
					buttonSize={values.value}
				/>
				<br />
			</Fragment>
		))}
	</Fragment>
);
```
