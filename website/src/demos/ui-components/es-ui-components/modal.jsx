import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Modal, Button } from '@eightshift/ui-components';
import { experiment, pointerHand, trash } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<Modal>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<Modal
		triggerLabel='Click me'
		triggerIcon={pointerHand}
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<Modal
		triggerIcon={trash}
		triggerProps={{ type: 'danger' }}
		contentClassName='es:p-4'
		noCloseButton
	>
		<b>Are you sure you want to delete this?</b>
		<br />
		<span>There's no going back (whoa-oh)</span>

		<div className='es:flex es:gap-2 es:mt-3'>
			<Button className='es:ml-auto' type='ghost'>Yup!</Button>
			<Button slot='close'>Nope</Button>
		</div>
	</Modal>

</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<Modal title='This is a title'>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<Modal
		title='Message'
		actions={
			<>
				<Button type='ghost' slot='close'>Cancel</Button>
				<Button type='selected' onPress={() => alert('OK clicked')} slot='close'>OK</Button>
			</>
		}
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase>
	<Modal
		title='Message'
		headerActions={
			<Button
				type='selectedGhost'
				size='small'
				icon={experiment}
				aria-label='Demo button'
				onPress={() => alert('Demo button clicked')}
			/>
		}
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase>
	<Modal
		title='Message'
		actions={
			<Button type='ghost' slot='close'>Close</Button>
		}
		noCloseButton
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase>
	<Modal
		customTrigger={
			<Button type='ghost' icon={pointerHand}>Click me</Button>
		}
	>
		<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
			<span>This is demo content</span>
		</div>
	</Modal>
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase defaultValue={{ open: false }}>
	{(data, setData) => (
		<>
			<button className='es:bg-secondary-100 es:px-4 es:py-2' onClick={() => setData({open: true})}>Click to open</button>

			<Modal
				open={data.open}
				onOpenChange={(isOpen) => setData({ open: isOpen })}
				triggerLabel='Click me'
			>
				<div className='es:w-full es:rounded-xl es:bg-gray-100 es:text-sm es:p-4 es:min-h-40'>
					<span>This is demo content</span>
				</div>
			</Modal>
		</>
	)}
</ComponentShowcase></>); }
