import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { AnimatedVisibility, Checkbox, OptionSelect } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase
	className='esd-hide-bg-on-hover'
	defaultValue={false}
	preContent={(data, setData) => (
		<Checkbox
			checked={data}
			onChange={setData}
			label='Visible'
		/>
	)}
>
	{(data) => (
		<AnimatedVisibility
			visible={data}
			noInitial
		>
			<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
				<span>This is demo content</span>
			</div>
		</AnimatedVisibility>
	)}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	className='esd-hide-bg-on-hover es:min-h-56'
	defaultValue={{
		checked: false,
		transition: 'slideFade',
	}}
	preContent={(data, setData) => (
		<>
			<OptionSelect
				label='Transition'
				value={data.transition}
				onChange={(v) => setData({ ...data, transition: v })}
				options={[
					{ value: 'fade', label: 'Fade' },
					{ value: 'slideFade', label: 'Slide and fade', subtitle: 'Default' },
					{ value: 'slideInFadeOut', label: 'Slide in and fade out' },
					{ value: 'slideFadeUpSlight', label: 'Slight slide up and fade' },
					{ value: 'slideFadeDownSlight', label: 'Slight slide down and fade' },
					{ value: 'scaleFade', label: 'Scale and fade' },
					{ value: 'scaleSlideFade', label: 'Scale, slide, and fade' },
					{ value: 'scaleRotateFade', label: 'Scale, rotate, and fade' },
				]}
				type='menu'
				wrapperProps={{
					keepOpen: false,
				}}
			/>

			<Checkbox
				checked={data.checked}
				onChange={(v) => setData({ ...data, checked: v })}
				label='Visible'
			/>
		</>
	)}
>
	{(data) => (
		<AnimatedVisibility
		visible={data.checked}
		transition={data.transition}
		noInitial
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</AnimatedVisibility>
	)}
</ComponentShowcase></>); }
