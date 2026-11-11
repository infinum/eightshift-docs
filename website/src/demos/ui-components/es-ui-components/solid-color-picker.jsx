import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { SolidColorPicker } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase defaultValue='#0D3636'>
	{(data, setData) => {
		return (
			<SolidColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='#0D3636'>
	{(data, setData) => {
		return (
			<SolidColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				allowTransparency
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	defaultValue='rgb(13,54,54)'
	preContent={(data) => <span className='es:text-sm es:font-mono'>{data}</span>}
>
	{(data, setData) => {
		return (
			<SolidColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				outputFormat='rgb'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue='#0D3636'>
	{(data, setData) => {
		return (
			<SolidColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				noAdvancedOptions
			/>
		);
	}}
</ComponentShowcase></>); }
