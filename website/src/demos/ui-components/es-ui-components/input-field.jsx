import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { InputField, OptionSelect } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase>
	{(data, setData) => (
		<InputField
			value={data}
			onChange={setData}
			placeholder='Basic text input'
			aria-label='Basic text input'
			type='text'
		/>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	defaultValue={{ type: 'text' }}
	preContent={(data, setData) => (
		<OptionSelect
			label='Type'
			value={data.type}
			onChange={(value) => setData({ ...data, type: value })}
			options={[
				{ value: 'text', label: 'Text', subtitle: <span className='es:font-mono'>text</span> },
				{ value: 'search', label: 'Search field', subtitle: <span className='es:font-mono'>search</span> },
				{ value: 'url', label: 'URL', subtitle: <span className='es:font-mono'>url</span> },
				{ value: 'tel', label: 'Phone number', subtitle: <span className='es:font-mono'>tel</span> },
				{ value: 'email', label: 'E-mail', subtitle: <span className='es:font-mono'>email</span> },
				{ value: 'password', label: 'Password', subtitle: <span className='es:font-mono'>password</span> },
				{ value: 'multiline', label: 'Multi-line text', subtitle: <span className='es:font-mono'>multiline</span> },
			]}
			type='menu'
		/>
	)}
>
	{(data, setData) => (
		<InputField
			value={data?.text}
			onChange={(value) => setData({ ...data, text: value })}
			type={data.type}
			aria-label='Demo field'
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	{(data, setData) => (
		<InputField
			value={data}
			onChange={setData}
			placeholder='Basic text input'
			aria-label='Basic text input'
			type='text'
			monospaceFont
		/>
	)}
</ComponentShowcase></>); }
