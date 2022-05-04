import React from 'react';

export default function iFrame(props) {

	const component = 'shift-iframe';

	const {
		src,
		type = '',
	} = props;

	return (
		<div className={`${component} ${type && `${component}--${type}`}`}>
			<iframe className={`${component}__frame`} src={src} />
		</div>
	);
};
