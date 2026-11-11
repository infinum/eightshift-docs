import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Toggle, Switch, Button } from '@eightshift/ui-components';
import { emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={false}>
	{(data, setData) => {
		return (
			<Toggle
				checked={data}
				onChange={setData}
				label='Demo'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	defaultValue={false}
	fitWidth
>
	{(data, setData) => {
		return (
			<Switch
				checked={data}
				onChange={setData}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={false}>
	{(data, setData) => {
		return (
			<Toggle
				icon={emptyRect}
				subtitle='Subtitle'
				checked={data}
				onChange={setData}
				label='Demo'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={false}>
	{(data, setData) => {
		return (
			<Toggle
				label='Demo'
				checked={data}
				onChange={setData}
				disabled
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	defaultValue={null}
	resettable
>
	{(data, setData) => {
		return (
			<Toggle
				label='Demo'
				checked={data}
				onChange={setData}
				isIndeterminate={data === null}
			/>
		);
	}}
</ComponentShowcase></>); }
