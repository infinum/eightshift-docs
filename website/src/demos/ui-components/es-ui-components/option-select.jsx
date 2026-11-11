import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { OptionSelect, Checkbox, Button, Menu, MenuItem, MenuSeparator } from '@eightshift/ui-components';
import {
	columns,
	design,
	emptyCircle,
	emptyRect,
	large,
	magicAlt,
	medium,
	multiple,
	small,
	wrench,
} from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' },
				]}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1', icon: design },
					{ value: 'option2', label: 'Option 2', icon: wrench },
					{ value: 'option3', label: 'Option 3', icon: magicAlt },
				]}
				type='toggleButtons'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1', icon: design },
					{ value: 'option2', label: 'Option 2', icon: wrench },
					{ value: 'option3', label: 'Option 3', icon: magicAlt },
				]}
				type='toggleButtonsSplit'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' },
				]}
				type='radios'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' },
				]}
				type='radiosSegmented'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1', icon: design },
					{ value: 'option2', label: 'Option 2', icon: wrench },
					{ value: 'option3', label: 'Option 3', icon: magicAlt },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1', endIcon: design },
					{ value: 'option2', label: 'Option 2', endIcon: wrench },
					{ value: 'option3', label: 'Option 3', endIcon: magicAlt },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: '-', label: 'Try and click me', disabled: true },
					{ value: 'option1', label: 'Option 1', endIcon: design },
					{ value: 'option2', label: 'Option 2', endIcon: wrench },
					{ value: 'option3', label: 'Option 3', endIcon: magicAlt },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Option 1', endIcon: design, separator: 'below' },
					{ value: 'option2', label: 'Option 2', endIcon: wrench },
					{ value: 'option3', label: 'Option 3', endIcon: magicAlt, separator: 'above' },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example10() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Cut', subtitle: 'Cuts' },
					{ value: 'option2', label: 'Copy', subtitle: 'Copies' },
					{ value: 'option3', label: 'Paste', subtitle: 'Pastes' },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example11() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Cut', sectionTitle: 'Commands' },
					{ value: 'option2', label: 'Copy' },
					{ value: 'option3', label: 'Paste' },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example12() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Cut', shortcut: 'Ctrl + X' },
					{ value: 'option2', label: 'Copy', shortcut: 'Ctrl + C' },
					{ value: 'option3', label: 'Paste', shortcut: 'Ctrl + V' },
				]}
				type='menu'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example13() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<Menu>
				<MenuItem>Lorem</MenuItem>
				<MenuItem>Ipsum</MenuItem>
				<MenuSeparator />
				<OptionSelect
					label='Option'
					value={data}
					onChange={setData}
					options={[
						{ value: 'option1', label: 'Option 1', icon: design },
						{ value: 'option2', label: 'Option 2', icon: wrench },
						{ value: 'option3', label: 'Option 3', icon: magicAlt },
					]}
					type='submenu'
				/>
			</Menu>
		);
	}}
</ComponentShowcase></>); }

export function Example14() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<Menu>
				<MenuItem>Lorem</MenuItem>
				<MenuItem>Ipsum</MenuItem>
				<MenuSeparator />
				<OptionSelect
					icon={multiple}
					value={data}
					onChange={setData}
					options={[
						{ value: 'option1', label: 'Option 1', icon: design },
						{ value: 'option2', label: 'Option 2', icon: wrench },
						{ value: 'option3', label: 'Option 3', icon: magicAlt },
					]}
					type='submenu'
				/>
			</Menu>
		);
	}}
</ComponentShowcase></>); }

export function Example15() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<Menu>
				<MenuItem>Lorem</MenuItem>
				<MenuItem>Ipsum</MenuItem>
				<MenuSeparator />
				<OptionSelect
					icon={multiple}
					label='Option'
					subtitle
					value={data}
					onChange={setData}
					options={[
						{ value: 'option1', label: 'Option 1', icon: design },
						{ value: 'option2', label: 'Option 2', icon: wrench },
						{ value: 'option3', label: 'Option 3', icon: magicAlt },
					]}
					type='submenu'
				/>
			</Menu>
		);
	}}
</ComponentShowcase></>); }

export function Example16() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<Menu>
				<MenuItem>Lorem</MenuItem>
				<MenuItem>Ipsum</MenuItem>
				<MenuSeparator />
				<OptionSelect
					label='Option'
					value={data}
					onChange={setData}
					options={[
						{ value: 'option1', label: 'Option 1', icon: design },
						{ value: 'option2', label: 'Option 2', icon: wrench },
						{ value: 'option3', label: 'Option 3', icon: magicAlt },
					]}
					type='standaloneMenuItems'
				/>
			</Menu>
		);
	}}
</ComponentShowcase></>); }

export function Example17() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				label='Option'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				type='radios'
				vertical
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example18() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				aria-label='Demo component'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				type='menu'
				noTriggerIcon
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example19() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				aria-label='Demo component'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				type='menu'
				noTriggerLabel
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example20() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<>
				<OptionSelect
					aria-label='Demo component'
					value={data}
					onChange={setData}
					options={[
						{ value: 'option1', label: 'Option 1', icon: emptyCircle },
						{ value: 'option2', label: 'Option 2', icon: emptyRect },
						{ value: 'option3', label: 'Option 3', icon: emptyCircle },
					]}
					wrapperProps={{ className: 'es:bg-secondary-100 es:p-2' }}
				/>

    			<OptionSelect
    				aria-label='Demo component'
    				value={data}
    				onChange={setData}
    				options={[
    					{ value: 'option1', label: 'Option 1', icon: emptyCircle },
    					{ value: 'option2', label: 'Option 2', icon: emptyRect },
    					{ value: 'option3', label: 'Option 3', icon: emptyCircle },
    				]}
    				type='radios'
    				wrapperProps={{ className: 'es:bg-secondary-100 es:p-2' }}
    			/>

    			<OptionSelect
    				aria-label='Demo component'
    				value={data}
    				onChange={setData}
    				options={[
    					{ value: 'option1', label: 'Option 1', icon: emptyCircle },
    					{ value: 'option2', label: 'Option 2', icon: emptyRect },
    					{ value: 'option3', label: 'Option 3', icon: emptyCircle },
    				]}
    				type='menu'
    				wrapperProps={{ className: 'es:bg-accent-50 es:p-2' }}
    			/>
    		</>
    	);
    }}

</ComponentShowcase></>); }

export function Example21() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				aria-label='Demo component'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				type='menu'
				noItemIcon
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example22() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				aria-label='Demo component'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				noItemLabel
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example23() { return (<><ComponentShowcase defaultValue='option1'>
	{(data, setData) => {
		return (
			<OptionSelect
				aria-label='Demo component'
				value={data}
				onChange={setData}
				options={[
					{ value: 'option1', label: 'Small', icon: small },
					{ value: 'option2', label: 'Medium', icon: medium },
					{ value: 'option3', label: 'Large', icon: large },
				]}
				itemProps={{ size: 'large' }}
				itemClassName='es:flex-col esd-btn-custom'
			/>
		);
	}}
</ComponentShowcase></>); }
