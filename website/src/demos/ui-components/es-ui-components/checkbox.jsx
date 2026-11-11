import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Checkbox } from '@eightshift/ui-components';
import { emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={false}>
	{(data, setData) => {
		return (
			<Checkbox
				checked={data}
				onChange={setData}
				label='Demo'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	{(data, setData) => {
		return (
			<Checkbox
				icon={emptyRect}
				label='Demo'
				checked={data}
				onChange={setData}
				alignEnd
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	defaultValue={null}
	resettable
>
	{(data, setData) => {
		return (
			<Checkbox
				label='Demo'
				checked={data}
				onChange={setData}
				indeterminate={data === null}
			/>
		);
	}}
</ComponentShowcase></>); }
