import { ComponentShowcase } from '../../support/components/component-showcase.jsx';
import { Slider } from '@eightshift/ui-components';
import { magicAltFillTransparent } from '@eightshift/ui-components/icons';

export function Example1() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example2() { return (<><ComponentShowcase defaultValue={[20, 60]}>
	{(data, setData) => {
		return (
			<Slider
				label='My slider'
				value={data}
				onChange={setData}
				aria-label='Slider'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example3() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				markers
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example4() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				markers='dots'
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example5() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				markers={{ 0: 'start', 25: '', 50: 'middle', 75: '', 100: 'end' }}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example6() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				startPoint={50}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example7() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				noActiveHighlight
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example8() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				markers={{
					0: <span className='es:text-red-500'>R</span>,
					50: <span className='es:text-green-500'>G</span>,
					100: <span className='es:text-blue-500'>B</span>,
				}}
				startPoint={50}
				noActiveHighlight
				trackStyle={{
					backgroundImage: 'linear-gradient(to right in oklab, #ff000060, #00ff0060, #0000ff60)',
				}}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example9() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				before={magicAltFillTransparent}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example10() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				after={magicAltFillTransparent}
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example11() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				label='My slider'
				value={data}
				onChange={setData}
				aria-label='Slider'
				inputField
			/>
		);
	}}
</ComponentShowcase></>); }

export function Example12() { return (<><ComponentShowcase defaultValue={0}>
	{(data, setData) => {
		return (
			<Slider
				value={data}
				onChange={setData}
				aria-label='Slider'
				vertical
			/>
		);
	}}
</ComponentShowcase></>); }
