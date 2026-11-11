import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Popover, TriggeredPopover, Button } from '@eightshift/ui-components';
import { pointerHand, trash } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<TriggeredPopover>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</TriggeredPopover>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<TriggeredPopover
		triggerButtonLabel='Click me'
		triggerButtonIcon={pointerHand}
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</TriggeredPopover>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<TriggeredPopover
		triggerButtonIcon={trash}
		triggerButtonProps={{ type: 'danger' }}
		className='es:p-4'
	>
		<b>Are you sure you want to delete this?</b>
		<br />
		<span>There's no going back (whoa-oh)</span>

    	<div className='es:flex es:gap-2 es:mt-3'>
    		<Button className='es:ml-auto' type='ghost'>Yup!</Button>
    		<Button>Nope</Button>
    	</div>
    </TriggeredPopover>

</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<TriggeredPopover offset={20}>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</TriggeredPopover>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<TriggeredPopover crossOffset={80}>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</TriggeredPopover>
</ComponentShowcase></>); }
