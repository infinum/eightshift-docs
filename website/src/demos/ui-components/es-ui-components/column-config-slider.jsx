import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ColumnConfigSlider } from '@eightshift/ui-components';
import { columns } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={[1, 12]}>
	{(data, setData) => {
		return (
			<ColumnConfigSlider
				icon={columns}
				label='Column configuration'
				value={data}
				onChange={setData}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={[2, 13]}>
	{(data, setData) => {
		return (
			<ColumnConfigSlider
				icon={columns}
				label='Column configuration'
				value={data}
				onChange={setData}
				columns={14}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={[2, 13]}>
	{(data, setData) => {
		return (
			<ColumnConfigSlider
				icon={columns}
				label='Column configuration'
				value={data}
				onChange={setData}
				columns={14}
				showOuterAsGutter
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={[4, 9]}>
	{(data, setData) => {
		return (
			<ColumnConfigSlider
				icon={columns}
				label='Column configuration'
				value={data}
				onChange={setData}
				disableOffset
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase defaultValue={[4, 9]}>
	{(data, setData) => {
		return (
			<ColumnConfigSlider
				icon={columns}
				label='Column configuration'
				value={data}
				onChange={setData}
				disableWidth
			/>
		);
	}}
</ComponentShowcase></>); }
