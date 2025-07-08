import React from 'react';
import { IconLinkCards, osProjectIcons } from '@infinum/docusaurus-theme';

export const EsOpenSource = (props) => {

	const frontendLibsTwIcon = (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80' fill='none'><path d='M44.11 14v15.36h15.35' stroke='#D92327' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' fill='none'/><path d='M60.46 66.75H19V13h26.11l15.35 15.36v38.39Z' stroke='#D92327' strokeWidth='4' strokeMiterlimit='10' strokeLinecap='square' fill='none'/><path clip-rule='evenodd' fillRule='evenodd' d='M39.28 42c-3.275 0-5.322 1.592-6.14 4.776 1.227-1.592 2.66-2.19 4.297-1.791.934.226 1.602.885 2.34 1.615 1.205 1.188 2.599 2.563 5.642 2.563 3.274 0 5.32-1.592 6.14-4.775-1.228 1.592-2.661 2.188-4.298 1.79-.935-.227-1.603-.886-2.341-1.615C43.716 43.374 42.323 42 39.28 42Zm-6.14 7.163c-3.275 0-5.321 1.592-6.14 4.775 1.228-1.592 2.66-2.188 4.297-1.79.935.226 1.603.885 2.341 1.615 1.205 1.188 2.598 2.563 5.641 2.563 3.274 0 5.321-1.592 6.14-4.776-1.228 1.592-2.66 2.19-4.298 1.792-.934-.228-1.602-.887-2.34-1.616-1.205-1.188-2.598-2.563-5.642-2.563Z' fill='#D92327' stroke='#D92327' strokeMiterlimit='3.8637' strokeLinejoin='bevel'/></svg>
	);

	return (
		<IconLinkCards
			{...props}
			title='Start exploring'
			osProjectIcons
			cards={[
				{
					icon: osProjectIcons.boilerplate,
					text: 'Eightshift Boilerplate',
					url: 'https://github.com/infinum/eightshift-boilerplate'
				},
				{
					icon: osProjectIcons.boilerplate,
					text: 'Eightshift Boilerplate Plugin',
					url: 'https://github.com/infinum/eightshift-boilerplate-plugin'
				},
				{
					icon: osProjectIcons.eightshiftLibs1,
					text: 'Eightshift Libs',
					url: 'https://github.com/infinum/eightshift-libs'
				},
				{
					icon: frontendLibsTwIcon,
					text: 'Eightshift Frontend Libs (Tailwind)',
					url: 'https://github.com/infinum/eightshift-frontend-libs-tailwind'
				},
				{
					icon: osProjectIcons.eightshiftFrontendLibs,
					text: 'Eightshift Frontend Libs (legacy)',
					url: 'https://github.com/infinum/eightshift-frontend-libs'
				},
				{
					icon: osProjectIcons.eightshiftForms,
					text: 'Eightshift Forms',
					url: 'https://github.com/infinum/eightshift-forms'
				},
				{
					icon: osProjectIcons.eightshiftDocs,
					text: 'Eightshift Docs',
					url: 'https://github.com/infinum/eightshift-docs'
				},
				{
					icon: osProjectIcons.storybook,
					text: 'Eightshift Storybook (legacy)',
					url: 'https://github.com/infinum/eightshift-storybook'
				},
				{
					icon: osProjectIcons.eightshiftCodingStandard,
					text: 'Eightshift Coding Standards for WordPress',
					url: 'https://github.com/infinum/eightshift-coding-standards'
				},
			]}
		/>
	);
};
