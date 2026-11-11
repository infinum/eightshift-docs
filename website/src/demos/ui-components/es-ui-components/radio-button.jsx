import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { RadioButton, RadioButtonGroup } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase defaultValue='first'>
	{(data, setData) => {
		return (
			<RadioButtonGroup
				label='My radio buttons'
				value={data}
				onChange={setData}
			>
				<RadioButton
					value='first'
					label='First option'
				/>
				<RadioButton
					value='second'
					label='Second option'
				/>
			</RadioButtonGroup>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='first'>
	{(data, setData) => {
		return (
			<RadioButtonGroup
				label='My radio buttons'
				value={data}
				onChange={setData}
				orientation='horizontal'
			>
				<RadioButton
					value='first'
					label='First option'
				/>
				<RadioButton
					value='second'
					label='Second option'
				/>
			</RadioButtonGroup>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue='first'>
	{(data, setData) => {
		return (
			<RadioButtonGroup
				label='My radio buttons'
				value={data}
				onChange={setData}
				design='segmented'
			>
				<RadioButton
					value='first'
					label='First option'
				/>
				<RadioButton
					value='second'
					label='Second option'
				/>
			</RadioButtonGroup>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue='first'>
	{(data, setData) => {
		return (
			<RadioButtonGroup
				label='My radio buttons'
				value={data}
				onChange={setData}
			>
				<RadioButton
					value='first'
					label='First option'
				/>
				<RadioButton
					value='second'
					label='Second option'
					subtitle='Disabled because of reasons'
					disabled
				/>
				<RadioButton
					value='third'
					label='Third option'
				/>
			</RadioButtonGroup>
		);
	}}
</ComponentShowcase></>); }
