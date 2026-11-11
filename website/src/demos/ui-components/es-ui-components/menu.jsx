import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Menu, MenuItem, MenuSeparator, MenuSection, SubMenuItem } from '@eightshift/ui-components';
import { bold, emptyCircle, emptyRect } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<Menu>
		<MenuItem>First item</MenuItem>
		<MenuItem>Second item</MenuItem>
		<MenuItem>Third item</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<Menu>
		<MenuItem>Item 1</MenuItem>
		<MenuItem>Item 2</MenuItem>
		<MenuSeparator />
		<MenuItem>Item 3</MenuItem>
		<MenuItem>Item 4</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<Menu>
		<MenuSection label='Section 1'>
			<MenuItem>Item 1</MenuItem>
			<MenuItem>Item 2</MenuItem>
		</MenuSection>
		<MenuSection label='Section 2'>
			<MenuItem>Item 3</MenuItem>
			<MenuItem>Item 4</MenuItem>
		</MenuSection>
	</Menu>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase>
	<Menu>
		<MenuItem>Item 1</MenuItem>
		<MenuItem>Item 2</MenuItem>
		<SubMenuItem trigger={<MenuItem>Submenu</MenuItem>}>
			<MenuItem>Subitem 1</MenuItem>
			<MenuItem>Subitem 2</MenuItem>
		</SubMenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase>
	<Menu>
		<MenuSection label='Icon'>
			<MenuItem icon={emptyCircle}>First item</MenuItem>
		</MenuSection>
		<MenuSection label='End icon'>
			<MenuItem endIcon={emptyRect}>First item</MenuItem>
		</MenuSection>
		<MenuSection label='Additional text'>
			<MenuItem shortcut='Ctrl + Z'>Second item</MenuItem>
		</MenuSection>
		<MenuSection label='Disabled'>
			<MenuItem disabled>First item</MenuItem>
			<MenuItem>Second item</MenuItem>
		</MenuSection>
	</Menu>
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase defaultValue={{ checked: ['a'], selected: 'a' }}>
	{(data, setData) => (
		<Menu keepOpen>
			<MenuSection label='Radio buttons (single-select)'>
				<MenuItem
					selected={data.selected === 'a'}
					onClick={() => setData({ ...data, selected: 'a' })}
				>
					First item
				</MenuItem>
				<MenuItem
					selected={data.selected === 'b'}
					onClick={() => setData({ ...data, selected: 'b' })}
				>
					Second item
				</MenuItem>
			</MenuSection>
			<MenuSection label='Checkboxes (multi-select)'>
				<MenuItem
					checked={data.checked.includes('a')}
					onClick={() =>
						setData({
							...data,
							checked: data.checked.includes('a') ? data.checked.filter((i) => i !== 'a') : [...data.checked, 'a'],
						})
					}
				>
					First item
				</MenuItem>
				<MenuItem
					checked={data.checked.includes('b')}
					onClick={() =>
						setData({
							...data,
							checked: data.checked.includes('b') ? data.checked.filter((i) => i !== 'b') : [...data.checked, 'b'],
						})
					}
				>
					Second item
				</MenuItem>
			</MenuSection>
		</Menu>
	)}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase>
	<Menu triggerLabel='Menu'>
		<MenuItem>First item</MenuItem>
		<MenuItem>Second item</MenuItem>
		<MenuItem>Third item</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase>
	<Menu
		triggerLabel='Menu'
		triggerIcon={emptyCircle}
	>
		<MenuItem>First item</MenuItem>
		<MenuItem>Second item</MenuItem>
		<MenuItem>Third item</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase>
	<Menu triggerProps={{ size: 'small' }}>
		<MenuItem>First item</MenuItem>
		<MenuItem>Second item</MenuItem>
		<MenuItem>Third item</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example10() { return (<><ComponentShowcase>
	{(data, setData) => (
		<Menu keepOpen>
			<MenuItem
				selected={data === 'a'}
				onClick={() => setData('a')}
			>
				First item
			</MenuItem>
			<MenuItem
				selected={data === 'b'}
				onClick={() => setData('b')}
			>
				Second item
			</MenuItem>
			<MenuItem
				selected={data === 'c'}
				onClick={() => setData('c')}
			>
				Third item
			</MenuItem>
		</Menu>
	)}
</ComponentShowcase></>); }

export function Example11() { return (<><ComponentShowcase>
	<Menu openOnLongPress>
		<MenuItem>First item</MenuItem>
		<MenuItem>Second item</MenuItem>
		<MenuItem>Third item</MenuItem>
	</Menu>
</ComponentShowcase></>); }

export function Example12() { return (<><ComponentShowcase
	defaultValue='400'
	preContent={(data) => (
		<p className='es:text-base'>
			Font weight
			<br />
			<span className='es:font-mono'>{data}</span>
		</p>
	)}
>
	{(data, setData) => (
		<Menu
			triggerIcon={bold}
			tooltip='Font weight'
			triggerProps={{
				type: data === '700' ? 'selected' : 'default',
				onPress: () => setData(data === '700' ? '400' : '700'),
			}}
			openOnLongPress
		>
			<MenuItem
				selected={data === '300'}
				onClick={() => setData('300')}
			>
				Light
			</MenuItem>
			<MenuItem
				selected={data === '400'}
				onClick={() => setData('400')}
			>
				Regular
			</MenuItem>
			<MenuItem
				selected={data === '500'}
				onClick={() => setData('500')}
			>
				Medium
			</MenuItem>
			<MenuItem
				selected={data === '700'}
				onClick={() => setData('700')}
			>
				Bold
			</MenuItem>
		</Menu>
	)}
</ComponentShowcase></>); }
