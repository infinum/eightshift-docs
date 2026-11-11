import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Button, ButtonGroup, OptionSelect, Checkbox } from '@eightshift/ui-components';
import { emptyCircle } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<Button>Hi, I'm a button!</Button>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<Button icon={emptyCircle} />
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<Button icon={emptyCircle}>Hi, I'm a button!</Button>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<ButtonGroup>
		<Button>First</Button>
		<Button>Second</Button>
		<Button>Third</Button>
	</ButtonGroup>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<ButtonGroup vertical>
		<Button>First</Button>
		<Button>Second</Button>
		<Button>Third</Button>
	</ButtonGroup>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase
	defaultValue='default'
	preContent={(data, setData) => (
		<OptionSelect
			label='Size'
			value={data}
			onChange={setData}
			options={[
				{ value: 'small', label: 'Small' },
				{ value: 'default', label: 'Default' },
				{ value: 'large', label: 'Large' },
			]}
			type='menu'
		/>
	)}
>
	{(data) => (
		<>
			<Button size={data}>Hi, I'm a button!</Button>
			<Button
				size={data}
				icon={emptyCircle}
			/>
			<Button
				size={data}
				icon={emptyCircle}
			>
				Hi, I'm a button!
			</Button>
		</>
	)}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase
	defaultValue='default'
	preContent={(data, setData) => (
		<OptionSelect
			label='Type'
			value={data}
			onChange={setData}
			options={[
				{ value: 'default', label: 'Default' },
				{ value: 'ghost', label: 'Ghost' },
				{ value: 'selected', label: 'Selected' },
				{ value: 'selectedGhost', label: 'Selected (ghost)' },
				{ value: 'danger', label: 'Danger' },
				{ value: 'dangerGhost', label: 'Danger (ghost)' },
			]}
			type='menu'
		/>
	)}
>
	{(data) => (
		<>
			<Button type={data}>Hi, I'm a button!</Button>
			<Button
				type={data}
				icon={emptyCircle}
			/>
			<Button
				type={data}
				icon={emptyCircle}
			>
				Hi, I'm a button!
			</Button>
		</>
	)}
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase>
	<Button
		icon={emptyCircle}
		tooltip="Hi, I'm a tooltip!"
	/>
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase
	className='esd-hide-bg-on-hover es:min-h-56'
	defaultValue={{
		checked: false,
		transition: 'slideFade',
	}}
	preContent={(data, setData) => (
		<>
			<Checkbox
				checked={data.checked}
				onChange={(v) => setData({ ...data, checked: v })}
				label='Pending'
			/>
		</>
	)}
>
	{(data) => (
		<Button
			pending={data.checked}
			onPress={() => alert('Button pressed!')}
		>
			Hi, I'm a button!
		</Button>
	)}
</ComponentShowcase></>); }
