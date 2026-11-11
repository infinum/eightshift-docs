import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Select } from '@eightshift/ui-components';
import { demoOptions } from '../../support/es-ui-components/select-helpers.jsx';

export function Example1() { return (<><ComponentShowcase>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={null}>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
			clearable
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={null}>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
			noSearch
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase
	defaultValue={null}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Select
			label='Default'
			value={data}
			onChange={setData}
			options={demoOptions}
		/>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	defaultValue={null}
	preContent={(data) => (
		<span className='es:font-mono es:text-xs esd-white-space-pre'>{JSON.stringify(data, null, 2)}</span>
	)}
>
	{(data, setData) => (
		<Select
			label='Simple value'
			value={data}
			onChange={setData}
			options={demoOptions}
			simpleValue
		/>
	)}
</ComponentShowcase></>); }
