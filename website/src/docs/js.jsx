import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export function WindowObject(props) {
	const {
		name,
		filter,
		url,
	} = props;

	const internalUrl = `https://github.com/infinum/eightshift-forms/blob/develop/src/Blocks/components/form/assets/${url}.js`;

	return (
	<>
		<h3>Usage</h3>
		<p>To access {name} object and all its customization options use your browsers console and type:</p>

		<CodeBlock language="js">
			{reformatCode(`
				window?.esForms?.${filter}
			`)}
		</CodeBlock>

		{url &&
			<p>You can find all methods and their documentation on this <a href={internalUrl} target='_blank' rel='noopener noreferrer'>link</a>.</p>
		}
	</>
	);
};


