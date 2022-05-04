import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Features() {

	const component = 'shift-features';

	const data = [
		{
			icon: 'red',
			title: 'Custom Block Editor blocks',
			desc: 'Build a dynamic block faster than you can say Gutenberg. With automatic block registration and top-notch attribute handling, you\'ll be shipping blocks in record time.',
		},
		{
			icon: 'purple',
			title: 'Sustainable, like code should be',
			desc: 'All our code follows battle-tested programming practices. OOP? Check. Unit tests? Check. Code docblocks, linters for coding standards and great documentation? Triple check.',
		},
		{
			icon: 'red',
			title: 'OOP: The good way to write PHP code',
			desc: 'Object-oriented programming is at the core of Eightshift Development kit, making your projects cleaner and allowing you to extend and replace functionality.',
		},
		{
			icon: 'yellow',
			title: 'wp boilerplate',
			desc: 'Include features you need, and leave out the ones you don\'t using our powerful WP-CLI tooling.',
		},
		{
			icon: 'green',
			title: 'First-class CSS variables',
			desc: 'Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code.'
		},
		{
			icon: 'red',
			title: 'A build process to love',
			desc: 'Eightshift Development kit comes with Webpack preconfigured, so you can start building your JavaScript and CSS assets from the start. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!'
		},
		{
			icon: 'purple',
			title: 'As responsive as it can get',
			desc: 'Declare breakpoints once, use them everywhere — from media queries to blocks. Override any attribute value for particular breakpoints without breaking a sweat. Need to tweak that width for tablets? Done.',
		},
		{
			icon: 'red',
			title: 'Cache busting',
			desc: 'Each time you build assets, we generate a new URL for each asset file. This means you\'ll never see the old cached version while developing or after pushing your code to production.',
		},
		{
			icon: 'green',
			title: 'Eightshift Libs',
			desc: 'Library aimed at bringing the modern development tools to your project.',
		},
		{
			icon: 'purple',
			title: 'Eightshift Frontend Libs',
			desc: 'A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.',
		},
	];

	const items = data.map((item, index) => {
		const {
			icon,
			title,
			desc,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<div className={`${component}__title ${component}__title--${icon}`}>
					{title}
				</div>
				<div className={`${component}__desc`}>
					{desc}
				</div>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
			>
				<Heading
					componentClass={component}
					title={'Unmatched developer experience'}
					align={'left'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	)
}
