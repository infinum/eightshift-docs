import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Spacer } from '@eightshift/ui-components';
import { emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer className='es:bg-violet-50 es:transition' />
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		size='px'
		className='es:bg-violet-50 es:transition'
	/>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		size='xs'
		className='es:bg-violet-50 es:transition'
	/>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		size='s'
		className='es:bg-violet-50 es:transition'
	/>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		size='m'
		className='es:bg-violet-50 es:transition'
	/>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		border
		size='m'
		className='es:bg-violet-50 es:transition'
	/>
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		className='es:bg-violet-50 es:transition'
		icon={emptyRect}
	/>
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		border
		className='es:bg-violet-50 es:transition'
		icon={emptyRect}
	/>
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		className='es:bg-violet-50 es:transition'
		text='This is a label'
	/>
</ComponentShowcase></>); }

export function Example10() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		border
		className='es:bg-violet-50 es:transition'
		text='This is a label'
	/>
</ComponentShowcase></>); }

export function Example11() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		className='es:bg-violet-50 es:transition'
		text='This is a label'
	/>
</ComponentShowcase></>); }

export function Example12() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		border
		className='es:bg-violet-50 es:transition'
		text='This is a label'
		subtitle='Subtitle'
	/>
</ComponentShowcase></>); }

export function Example13() { return (<><ComponentShowcase className='esd-hide-bg-on-hover'>
	<Spacer
		border
		className='es:bg-violet-50 es:transition'
		text='This is a label'
		subtitle='Subtitle'
		icon={emptyRect}
	/>
</ComponentShowcase></>); }
