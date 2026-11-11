import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Notice, OptionSelect, Checkbox } from '@eightshift/ui-components';
import { magicAltFillTransparent } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<Notice
		label='Hello there'
		subtitle='This is a notification subtitle'
	/>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<Notice label='Hello there!' />
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	defaultValue='default'
	preContent={(data, setData) => (
		<OptionSelect
			label='Type'
			value={data}
			onChange={setData}
			options={[
				{ value: 'default', label: 'Default', subtitle: <span className='es:font-mono'>default</span> },
				{ value: 'error', label: 'Error', subtitle: <span className='es:font-mono'>error</span> },
				{ value: 'info', label: 'Info', subtitle: <span className='es:font-mono'>info</span> },
				{ value: 'placeholder', label: 'Placeholder', subtitle: <span className='es:font-mono'>placeholder</span> },
				{ value: 'success', label: 'Success', subtitle: <span className='es:font-mono'>success</span> },
				{ value: 'warning', label: 'Warning', subtitle: <span className='es:font-mono'>warning</span> },
			]}
			type='menu'
		/>
	)}
>
	{(data) => (
		<Notice
			label='Hello there'
			subtitle='This is a notification subtitle'
			type={data}
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<Notice
		label='Warning'
		subtitle='Potential magic ahead'
		type='warning'
		icon={magicAltFillTransparent}
	/>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase
	defaultValue={false}
	preContent={(data, setData) => (
		<Checkbox
			checked={data}
			onChange={setData}
			label='Align icon to title'
		/>
	)}
>
	{(data) => (
		<Notice
			label='Lorem ipsum...'
			subtitle='dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tincidunt nibh, in lacinia tellus lobortis eu. Curabitur dignissim tellus eget felis tincidunt, a maximus odio tristique.'
			type='info'
			alignIconToTitle={data}
		/>
	)}
</ComponentShowcase></>); }
