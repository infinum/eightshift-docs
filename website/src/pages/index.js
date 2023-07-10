import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { Hero, ImageAndText, CtaCards, TextCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';
import { EsOpenSource } from '../theme/sections/os-projects';
import { EsOsFreebies } from '../theme/sections/os-freebies';

export default function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-footer-white'
		>
			<Hero
				title='Eightshift Development Kit'
				subtitle='All the tools you need to start building a modern WordPress project, using all the latest front end development tools.'
				buttonLabel='Get started'
				buttonUrl='#get-started'
				imageUrl='/img/homepage/w-logo.svg'
				gray
			/>

			<ImageAndText
				title='A WordPress boilerplate from the future'
				imageUrl='/img/homepage/block-cards.svg'
				gray
			>
				Eightshift Development kit makes building complex WordPress themes and plugins painless.
				<br /> <br />
				Use and extend our block and component collection to build out dynamic Gutenberg blocks.
				Extract commonly-used UI elements into reusable components.
				Forget about block registration and save callbacks.
				Build a REST route in minutes.
				<br /> <br />
				You&apos;ll never want to go back!
			</ImageAndText>

			<div id='get-started'>
				<CtaCards
					title='Get started in minutes, not hours'
					subtitle="Boilerplate your project in a few simple steps. Get instructions for setting up an Eightshift DevKit theme or plugin, run a command (or two) and start coding. It's that easy!"
					cards={[
						{
							icon: icons.frontendDevelopment,
							text: 'I want a new WordPress theme',
							buttonLabel: 'New theme',
							buttonUrl: '/docs/theme',
						},
						{
							icon: icons.puzzleOpenJob,
							text: 'I want a new WordPress plugin',
							buttonLabel: 'New plugin',
							buttonUrl: '/docs/plugin',
						}
					]}
				/>
			</div>

			<TextCards
				title='Batteries included'
				subtitle="The DevKit is feature-packed, with a bunch of cool things making the lives of developers and end-users easier!"
				cards={[
					{
						title: 'Custom Block Editor blocks',
						subtitle: "Build a dynamic block faster than you can say Gutenberg. With automatic block registration and top-notch attribute handling, you'll be shipping blocks in record time.",
					},
					{
						title: 'Sustainable, like code should be',
						subtitle: 'All our code follows battle-tested programming practices. OOP? Check. Unit tests? Double-check. Code doc blocks, linters for coding standards and great documentation? Triple-check.'
					},
					{
						title: 'Eightshift Libs',
						subtitle: 'Library aimed at bringing the modern development tools to your project.'
					},
					{
						title: 'WP Boilerplate',
						subtitle: "Include features you need, and leave out the ones you don't using our powerful WP-CLI tooling."
					},
					{
						title: 'As responsive as it can get',
						subtitle: 'Declare breakpoints once, use them everywhere — from media queries to blocks. Override any attribute value for particular breakpoints without breaking a sweat. Need to tweak that width for tablets? Done.'
					},
					{
						title: 'A build process to love',
						subtitle: 'Eightshift Development kit comes with Webpack pre-configured, so you can start building your JavaScript and CSS assets from the start. Vendor prefixes? Polyfills? SCSS compilation? Asset minification? All taken care of!'
					},
					{
						title: 'First-class CSS variables',
						subtitle: 'Forget about conditional classnames: build out CSS variables from attribute values and scope them to a particular block with almost no code.'
					},
					{
						title: 'Cache busting',
						subtitle: "Each time you build assets, we generate a new URL for each asset file. This means you'll never see the old cached version while developing or after pushing your code to production."
					},
					{
						title: 'OOP: The good way to write PHP code',
						subtitle: 'Object-oriented programming is at the core of Eightshift Development kit, making your projects cleaner and allowing you to extend and replace functionality.'
					},
					{
						title: 'Eightshift Frontend Libs',
						subtitle: 'A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.'
					}
				]}
			/>

			<FeatureShowcase
				title='An editing experience content editors will love'
				text='Provide the ease of use and flexibility that your content editors crave for. Rely on our user-friendly default blocks or use plug&play editor components to build great experiences.'
				imageUrl='/img/homepage/block-editor.webp'
				gray
			/>

			<EsOpenSource />
			<EsOsFreebies />
		</Layout>
	);
}
