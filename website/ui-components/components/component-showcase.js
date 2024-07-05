import { useState, useRef } from 'react';
import { Button } from '@eightshift/ui-components';
import { clsx } from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const ComponentShowcase = ({
	children,
	defaultValue,
	className,
	fitWidth = false,
	resettable = false,
	preContent,
}) => {
	const [data, setData] = useState(defaultValue);
	const ref = useRef();

	return (
		<BrowserOnly>
			{() => (
				<div className='es-uic-flex es-uic-font-sans'>
					<div
						className={clsx(
							'es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0',
							fitWidth ? 'es-uic-w-fit' : 'es-uic-w-96',
							className
						)}
					>
						{typeof children === 'function' && children(data, setData)}
						{typeof children !== 'function' && children}
					</div>

					<div className='es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow'>
						{preContent && preContent(data, setData, ref)}
						{resettable && (
							<Button
								size='small'
								onPress={() => setData(defaultValue)}
								disabled={data === defaultValue}
							>
								Reset
							</Button>
						)}
					</div>
				</div>
			)}
		</BrowserOnly>
	);
};
