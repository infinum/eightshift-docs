import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { NumberPicker, Button } from '@eightshift/ui-components';
import { emptyCircle, resetToZero } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			min={-40}
			max={40}
			step={2}
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			fixedWidth={12}
			max={999}
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			prefix='€'
		/>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			suffix='item(s)'
		/>
	)}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
		>
			<Button
				icon={resetToZero}
				tooltip='Reset'
				onPress={() => setData(0)}
				disabled={data === 0}
				type='ghost'
				slot={null}
			/>
		</NumberPicker>
	)}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			label='Pick a number'
			icon={emptyCircle}
			help='Help text'
		/>
	)}
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => (
		<NumberPicker
			value={data}
			onChange={setData}
			label='Pick a number'
			icon={emptyCircle}
			subtitle='Subtitle text'
			inline
		/>
	)}
</ComponentShowcase></>); }
