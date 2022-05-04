import React from 'react';

export default function Container(props) {

	const component = 'shift-container';

	const {
		componentClass,
		size='default',
		spacingTop='default',
		spacingBottom='default',
		bgColor='none',
		children,
	} = props;

	return (
		<>
			{children &&
				<div className={`
					${component}
					${component}__spacing-top--${spacingTop}
					${component}__spacing-bottom--${spacingBottom}
					${component}__bg-color--${bgColor}
					${component}__${componentClass}
				`}>
					<div className={`
						${component}__inner
						${component}__inner-size--${size}
					`}>
				 		{children}
					</div>
				</div>
			}
		</>
	);
}
