import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { reformatCode } from '../../utils/shared.jsx';

export default function WindowObject(props) {
	const {
		name,
		filter,
	} = props;

	return (
	<>
		<h2>Window Object</h2>
		<p>To access {name} object and all its customization options use your browsers console and type:</p>

		<CodeBlock language="php">
			{reformatCode(`
				window.esForms.${filter}
			`)}
		</CodeBlock>
	</>
	);
};


