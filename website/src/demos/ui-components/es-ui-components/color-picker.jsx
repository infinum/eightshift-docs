import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ColorPicker, OptionSelect } from '@eightshift/ui-components';
import { defaultColors, groupedColors } from '../../support/es-ui-components/color-picker-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue='blue'>
	{(data, setData) => {
		return (
			<ColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				colors={defaultColors}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='blue500'>
	{(data, setData) => {
		return (
			<ColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				colors={groupedColors}
				clearable
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue='blue500'>
	{(data, setData) => {
		return (
			<ColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				colors={groupedColors}
				noColorGroups
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue='blue500'>
	{(data, setData) => {
		return (
			<ColorPicker
				value={data}
				onChange={setData}
				aria-label='Color picker'
				colors={groupedColors}
				showColorCode
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	defaultValue={{ color: 'blue500', type: 'default' }}
	preContent={(data, setData) => (
		<OptionSelect
			label='Type'
			value={data.type}
			onChange={(value) => setData({ ...data, type: value })}
			options={[
				{ value: 'default', label: 'Default', subtitle: <span className='es:font-mono'>default</span> },
				{ value: 'fillColor', label: 'Fill color', subtitle: <span className='es:font-mono'>fillColor</span> },
				{ value: 'textColor', label: 'Text color', subtitle: <span className='es:font-mono'>textColor</span> },
				{
					value: 'textHighlightColor',
					label: 'Text highlight color',
					subtitle: <span className='es:font-mono'>textHighlightColor</span>,
				},
				{
					value: 'listMarkerColor',
					label: 'List marker color',
					subtitle: <span className='es:font-mono'>listMarkerColor</span>,
				},
			]}
			type='menu'
		/>
	)}
>
	{(data, setData) => {
		return (
			<ColorPicker
				value={data.color}
				onChange={(value) => setData({ ...data, color: value })}
				aria-label='Color picker'
				colors={groupedColors}
				type={data.type}
			/>
		);
	}}
</ComponentShowcase></>); }
