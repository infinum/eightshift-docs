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
				<div className='es:flex es:font-sans'>
					<div
						className={clsx(
							'es:border es:border-dashed es:border-gray-200 es:p-4 es:rounded-lg es:space-y-2.5 es:shrink-0',
							className
						)}
						style={{ width: fitWidth ? 'fit-content' : '24rem'}}
					>
						{typeof children === 'function' && children(data, setData)}
						{typeof children !== 'function' && children}
					</div>

					<div className='es:space-y-2.5 es:ml-3 es:grow'>
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
