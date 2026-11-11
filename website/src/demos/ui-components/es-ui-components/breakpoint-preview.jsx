import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { BreakpointPreview } from '@eightshift/ui-components';

export function Example1() { return (<><ComponentShowcase
	className='es:text-sm'
	fitWidth
>
	<BreakpointPreview
		blocks={[
			{
				breakpoint: 'Mobile',
				widthEnd: '480px',
				value: 'Regular',
				dotsStart: true,
				alignEnd: true,
				active: true,
			},
			{
				breakpoint: 'Default',
				value: 'Small',
				dotsEnd: true,
			},
		]}
	/>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase
	className='es:text-sm'
	fitWidth
>
	<BreakpointPreview
		dotsStart
		blocks={[
			{
				breakpoint: 'Mobile',
				widthEnd: '480px',
				value: 'Regular',
				alignEnd: true,
			},
			{
				breakpoint: 'Default',
				value: 'Small',
				dotsEnd: true,
				active: true,
			},
		]}
	/>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase
	className='es:text-sm'
	fitWidth
>
	<BreakpointPreview
		dotsEnd
		blocks={[
			{
				breakpoint: 'Mobile',
				widthEnd: '480px',
				value: 'Regular',
				dotsStart: true,
				alignEnd: true,
				active: true,
			},
			{
				breakpoint: 'Default',
				value: 'Small',
			},
		]}
	/>
</ComponentShowcase></>); }
