import React from 'react';
import Link from '@docusaurus/Link';

export default function Button(props) {

	const component = 'shift-button';

	const {
		componentClass,
		label,
		href,
		size='default',
		color='default',
	} = props;

	return (
		<Link
			className={`
				${component}
				${component}__size--${size}
				${component}__color--${color}
				${component}__${componentClass}
			`}
			to={href}>
			{label}
		</Link>
	);
}
