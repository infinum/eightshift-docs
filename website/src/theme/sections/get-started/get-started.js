import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function GetStarted() {

	const component = 'shift-get-started';

	const itemsData = [
		{
			bg: useBaseUrl('img/ic-theme-bg.svg'),
			icon: useBaseUrl('img/ic-theme.svg'),
			type: 'theme',
			label: `I want a new WordPress <span class="${component}__label-highlight">theme</span>`,
			link: useBaseUrl('/docs/theme'),
		},
		{
			bg: useBaseUrl('img/ic-plugin-bg.svg'),
			icon: useBaseUrl('img/ic-plugin.svg'),
			type: 'plugin',
			label: `I want a new WordPress <span class="${component}__label-highlight">plugin</span>`,
			link: useBaseUrl('/docs/plugin'),
		},
	];

	const items = itemsData.map((item, index) => {
		const {
			bg,
			icon,
			type,
			label,
			link,
		} = item;

		return (
			<div className={`${component}__item ${component}__item--${type}`} key={index}>
				<a className={`${component}__link`} href={link}>
					<div className={`${component}__icon`}>
						<img className={`${component}__icon-bg`} src={bg} />
						<img className={`${component}__icon-img`} src={icon} />
					</div>
					<div className={`${component}__label`} dangerouslySetInnerHTML={{__html: label}}></div>
					<Arrow componentClass={component} />
				</a>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'small'}
			>
				<Heading
					componentClass={component}
					title={'Get started in minutes, not hours'}
					subtitle={'Boilerplate your project in a few simple steps. Get instructions for setting up an Eightshift Development kit theme or plugin, run a command (or two) and start coding. It\'s that easy!'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	);
};
