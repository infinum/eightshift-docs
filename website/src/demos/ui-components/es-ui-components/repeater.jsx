import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { RepeaterDemo } from '../../support/es-ui-components/repeater-helpers.jsx';

export function Example1() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
			addDefaultItem={{
				title: 'My new item',
			}}
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
			minItems={3}
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
			emptyState={<span className='es:font-mono'>Nothing to see here...</span>}
		/>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
			hideEmptyState
		/>
	)}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase defaultValue={[]}>
	{(data, setData) => (
		<RepeaterDemo
			data={data}
			setData={setData}
			addDisabled
		/>
	)}
</ComponentShowcase></>); }
