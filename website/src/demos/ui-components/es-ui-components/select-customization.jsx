import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Select, AsyncSelect, MultiSelect, AsyncMultiSelect, HStack } from '@eightshift/ui-components';
import * as icons from '@eightshift/ui-components/icons';
import { demoOptions, demoGetData } from '../../support/es-ui-components/select-helpers.jsx';

export function Example1() { return (<><ComponentShowcase>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
			customDropdownArrow={icons.arrowDownCircle}
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='item-1'>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
			customMenuOption={(item) => <span className='es:font-bold es:text-blue-400 es:text-sm'>{item?.label}</span>}
			simpleValue
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue='item-1'>
	{(data, setData) => (
		<Select
			value={data}
			onChange={setData}
			options={demoOptions}
			customValueDisplay={(item) => <span className='es:font-bold es:text-blue-400'>{item?.label}</span>}
			simpleValue
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={[demoOptions[0]]}>
	{(data, setData) => (
		<MultiSelect
			value={data}
			onChange={setData}
			options={demoOptions}
			customValueDisplay={(item) => (
				<HStack
					className='es:icon:size-[1em] es:font-bold es:text-blue-400'
					slot='label'
				>
					{icons?.[item?.icon] ?? item?.icon}
					{item?.label}
				</HStack>
			)}
		/>
	)}
</ComponentShowcase></>); }
