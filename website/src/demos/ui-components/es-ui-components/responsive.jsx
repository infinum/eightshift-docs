import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Responsive, ResponsiveLegacy, Button, OptionSelect, MiniResponsive } from '@eightshift/ui-components';
import { fontFamily } from '@eightshift/ui-components/icons';
import { globalManifest, responsiveOptions, breakpointNames, responsiveLegacyAttr } from '../../support/es-ui-components/responsive-helpers.jsx';

export function Example1() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Responsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
		>
			{({ currentValue, handleChange, options }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
				/>
			)}
		</Responsive>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Responsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
			inline
		>
			{({ currentValue, handleChange, options }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
				/>
			)}
		</Responsive>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Responsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
			inline
		>
			{({ currentValue, handleChange, options, isInlineCollapsedView }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
					type={isInlineCollapsedView ? 'menu' : 'toggleButtons'}
				/>
			)}
		</Responsive>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Responsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
			inline
		>
			{({ currentValue, handleChange, options, isInlineExpandedView }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
					type={isInlineExpandedView ? 'radiosSegmented' : 'toggleButtons'}
				/>
			)}
		</Responsive>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Responsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
			noModeSelect
		>
			{({ currentValue, handleChange, options }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
				/>
			)}
		</Responsive>
	)}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase
	defaultValue={{
		_default: 'sans',
		_desktopFirst: false,
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<MiniResponsive
			icon={fontFamily}
			label='Font family'
			value={data}
			onChange={setData}
			options={responsiveOptions}
			breakpoints={breakpointNames}
			breakpointData={globalManifest.globalVariables.breakpoints}
		>
			{({ currentValue, handleChange, options, isInlineCollapsedView }) => (
				<OptionSelect
					options={options}
					onChange={(value) => handleChange(value)}
					value={currentValue}
					type={isInlineCollapsedView ? 'menu' : 'toggleButtons'}
				/>
			)}
		</MiniResponsive>
	)}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase
	defaultValue={{
		myAttrLarge: 'serif',
		myAttrDesktop: '',
		myAttrTablet: '',
		myAttrMobile: '',
	}}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<ResponsiveLegacy
			icon={fontFamily}
			label='Font family'
			attribute={responsiveLegacyAttr}
			value={data}
			onChange={(attrName, newVal) => {
				setData({
					...data,
					[attrName]: newVal,
				});
			}}
			options={responsiveOptions}
			breakpointData={globalManifest.globalVariables.breakpoints}

    	>
    		{({ currentValue, options, handleChange }) => (
    			<OptionSelect
    				options={options}
    				onChange={(value) => handleChange(value)}
    				value={currentValue}
    			/>
    		)}
    	</ResponsiveLegacy>
    )}

</ComponentShowcase></>); }
