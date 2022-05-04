import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Arrow(props) {

	const component = 'shift-arrow';

	const {
		componentClass,
	} = props;

	const arrowClass=`
		${component}
		${componentClass}__${component}
	`;

	return (
		<img className={arrowClass} src={useBaseUrl('img/ic-arrow.svg')} />
	);
}
