import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { HStack, VStack, Button, Checkbox } from '@eightshift/ui-components';
import {
	bot,
	componentGeneric,
	cookieAlt,
	design,
	edit,
	experiment,
	gridAlt,
	group,
	magicAlt,
	num1Circle,
	num2Circle,
	num3Circle,
	num4Circle,
	wrench,
} from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase>
	<HStack>
		<Button icon={experiment} />
		<Button icon={magicAlt} />
		<Button icon={wrench} />
		<Button icon={bot} />
	</HStack>
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase>
	<VStack>
		<Button icon={experiment} />
		<Button icon={magicAlt} />
		<Button icon={wrench} />
		<Button icon={bot} />
	</VStack>
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase>
	<HStack>
		<Button icon={experiment} />
		<Button icon={magicAlt} />
		<VStack>
			<Button icon={num1Circle} />
			<Button icon={num2Circle} />
			<Button icon={num3Circle} />
			<Button icon={num4Circle} />
		</VStack>
		<Button icon={wrench} />
		<Button icon={bot} />
	</HStack>
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase
	defaultValue={true}
	preContent={(data, setData) => (
		<Checkbox
			label='Wrap items'
			checked={data}
			onChange={setData}
		/>
	)}
>
	{(data) => (
		<HStack noWrap={!data}>
			<Button icon={experiment} />
			<Button icon={magicAlt} />
			<Button icon={wrench} />
			<Button icon={bot} />
			<Button icon={edit} />
			<Button icon={componentGeneric} />
			<Button icon={group} />
			<Button icon={design} />
			<Button icon={cookieAlt} />
			<Button icon={gridAlt} />
		</HStack>
	)}
</ComponentShowcase></>); }
