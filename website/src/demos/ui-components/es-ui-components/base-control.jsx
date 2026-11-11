import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { BaseControl, Button, Container, ContainerGroup } from '@eightshift/ui-components';
import { emptyCircle, emptyRect } from '@eightshift/ui-components/icons';
import { globalManifest, responsiveOptions, breakpointNames } from '../../support/es-ui-components/responsive-helpers.jsx';

export function Example1() { return (<><ComponentShowcase>
	<BaseControl
		label='Label'
		icon={emptyCircle}
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</BaseControl>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<BaseControl
		label='Label'
		icon={emptyCircle}
		help='This is help text'
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</BaseControl>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<BaseControl
		label='Label'
		icon={emptyCircle}
		actions={
			<>
				<Button
					icon={emptyCircle}
					size='small'
				/>
				<Button
					icon={emptyRect}
					size='small'
				/>
			</>
		}
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</BaseControl>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<BaseControl
		label='Label'
		icon={emptyCircle}
		inline
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4'>
			<span>This is demo content</span>
		</div>
	</BaseControl>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<Container>
		<span>Container contents</span>
	</Container>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase>
	<ContainerGroup>
		<Container>Default</Container>
		<Container accent>Accent</Container>
		<Container elevated>Elevated</Container>
		<Container
			accent
			elevated
		>
			Accent + elevated
		</Container>
	</ContainerGroup>
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase>
	<ContainerGroup label='Group label'>
		<Container>First</Container>
		<Container>Second</Container>
		<Container>Third</Container>
	</ContainerGroup>
</ComponentShowcase></>); }
