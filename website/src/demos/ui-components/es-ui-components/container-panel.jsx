import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { ContainerPanel, Checkbox, Button } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'>
	<ContainerPanel
		title='My block'
		className='es:bg-white'
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</ContainerPanel>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'>
	<ContainerPanel
		title='My block'
		className='es:bg-white'
		closable
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</ContainerPanel>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'>
	{(data, setData) => (
		<ContainerPanel
			title='My block'
			className='es:bg-white'
			use={data}
			onUseChange={setData}
		>
			<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</ContainerPanel>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'>
	{(data, setData) => (
		<ContainerPanel
			title='My block'
			className='es:bg-white'
			use={data}
			onUseChange={setData}
			closable
		>
			<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</ContainerPanel>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'
	preContent={(data, setData) => (
		<Checkbox
			checked={data}
			onChange={setData}
			label='Enabled'
		/>
	)}
	defaultValue={false}
>
	{(data) => (
		<ContainerPanel
			title='My block'
			className='es:bg-white'
			use={data}
			closable
		>
			<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</ContainerPanel>
	)}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase className='es:bg-gray-50 esd-hide-bg-on-hover es:transition'>
	{(data, setData) => (
		<ContainerPanel
			title='My block'
			className='es:bg-white'
			actions={
				<>
					<Button size='small'>Demo 1</Button>
					<Button size='small'>Demo 2</Button>
				</>
			}
			closable
		>
			<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</ContainerPanel>
	)}
</ComponentShowcase></>); }
