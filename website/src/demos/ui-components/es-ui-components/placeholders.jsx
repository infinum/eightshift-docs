import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import {
	ImagePlaceholder,
	FilePlaceholder,
	MediaPlaceholder,
	Checkbox,
	OptionSelect,
	RichLabel,
} from '@eightshift/ui-components';
import { a11yWarning, experiment, file, magicAlt } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase
	defaultValue={false}
	preContent={(data, setData) => (
		<Checkbox
			label='Show image'
			checked={data}
			onChange={setData}
		/>
	)}
>
	{(data) => <ImagePlaceholder url={data === true ? 'https://picsum.photos/200' : null} />}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	defaultValue='cover'
	preContent={(data, setData) => (
		<OptionSelect
			label='Image display mode'
			value={data}
			onChange={setData}
			options={[
				{ value: 'contain', label: 'Contain', subtitle: <span className='es:font-mono'>contain</span> },
				{ value: 'cover', label: 'Cover', subtitle: <span className='es:font-mono'>cover</span> },
				{ value: 'fill', label: 'Fill', subtitle: <span className='es:font-mono'>fill</span> },
			]}
			type='menu'
		/>
	)}
>
	{(data) => (
		<ImagePlaceholder
			url='https://picsum.photos/900/380'
			imageMode={data}
		/>
	)}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	defaultValue='default'
	preContent={(data, setData) => (
		<OptionSelect
			label='Size'
			value={data}
			onChange={setData}
			options={[
				{ value: 'default', label: 'Default', subtitle: <span className='es:font-mono'>default</span> },
				{ value: 'auto', label: 'Auto', subtitle: <span className='es:font-mono'>auto</span> },
				{ value: 'large', label: 'Large', subtitle: <span className='es:font-mono'>large</span> },
				{ value: 'fullWidth', label: 'Full width', subtitle: <span className='es:font-mono'>fullWidth</span> },
				{ value: 'fullHeight', label: 'Full height', subtitle: <span className='es:font-mono'>fullHeight</span> },
				{ value: 'full', label: 'Full width and height', subtitle: <span className='es:font-mono'>full</span> },
				{ value: 'video', label: 'Video (16:9)', subtitle: <span className='es:font-mono'>video</span> },
			]}
			type='menu'
			help='Preview in docs may not be fully accurate for all sizes'
		/>
	)}
>
	{(data) => (
		<ImagePlaceholder
			url='https://picsum.photos/900/380'
			size={data}
		/>
	)}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase
	defaultValue='default'
	preContent={(data, setData) => (
		<OptionSelect
			label='Style'
			value={data}
			onChange={setData}
			options={[
				{ value: 'default', label: 'Default', subtitle: <span className='es:font-mono'>default</span> },
				{ value: 'simple', label: 'Simple', subtitle: <span className='es:font-mono'>simple</span> },
			]}
			type='menu'
		/>
	)}
>
	{(data) => (
		<ImagePlaceholder
			noImage
			style={data}
		/>
	)}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<ImagePlaceholder noImage />
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase>
	<FilePlaceholder
		fileName='demo.json'
		icon={file}
	/>
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase>
	<MediaPlaceholder icon={magicAlt} />
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase>
	<MediaPlaceholder
		icon={experiment}
		style='simple'
		size='large'
		helpText='Lorem ipsum dolor.'
	/>
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase>
	<MediaPlaceholder
		icon={experiment}
		style='simple'
		size='large'
		helpText={
			<RichLabel
				icon={a11yWarning}
				label='Lorem ipsum dolor.'
			/>
		}
	/>
</ComponentShowcase></>); }
