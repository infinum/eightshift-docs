import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Expandable, Button } from '@eightshift/ui-components';
import { arrowDown, arrowUp, emptyCircle, emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={false}>
	<Expandable
		icon={emptyRect}
		label='Expandable'
		subtitle='Subtitle'
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Expandable>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={false}>
	<Expandable
		icon={emptyRect}
		label='Expandable'
		subtitle='Subtitle'
		actions={
			<Button
				size='small'
				icon={emptyCircle}
			/>
		}
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Expandable>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={false}>
	<Expandable
		icon={emptyRect}
		label='Expandable'
		subtitle='Subtitle'
		actions={
			<Button
				size='small'
				icon={emptyCircle}
			/>
		}
		keepActionsOnExpand
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Expandable>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={false}>
	<Expandable
		icon={emptyRect}
		label='Expandable'
		customOpenButton={({ open, toggleOpen, tooltip, disabled }) => (
		<Button
			size='small'
			icon={open ? arrowUp : arrowDown}
			type='ghost'
			onPress={toggleOpen}
			disabled={disabled}
			aria-label={tooltip}
			tooltip
		/>
	)
	}
	>
		<div className='es:w-full es:rounded-lg es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Expandable>
</ComponentShowcase></>); }
