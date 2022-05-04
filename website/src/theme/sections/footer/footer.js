import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function Footer() {

	const component = 'shift-footer';

	const itemsData = [
		{
			icon: useBaseUrl('img/ic-boilerplate.svg'),
			label: 'Eightshift<br />Boilerplate',
			link: 'https://github.com/infinum/eightshift-boilerplate',
		},
		{
			icon: useBaseUrl('img/ic-boilerplate-plugin.svg'),
			label: 'Eightshift<br />Boilerplate Plugin',
			link: 'https://github.com/infinum/eightshift-boilerplate-plugin',
		},
		{
			icon: useBaseUrl('img/ic-frontend-libs.svg'),
			label: 'Eightshift<br />Frontend Libs',
			link: 'https://github.com/infinum/eightshift-frontend-libs',
		},
		{
			icon: useBaseUrl('img/ic-libs.svg'),
			label: 'Eightshift<br />Libs',
			link: 'https://github.com/infinum/eightshift-libs',
		}
	];

	const items = itemsData.map((item, index) => {
		const {
			icon,
			label,
			link,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<a className={`${component}__link`} href={link} target="_blank" rel="noopener noreferrer">
					<div className={`${component}__icon`}>
						<img src={icon} />
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
				size={'medium'}
				bgColor={'light'}
			>
				<Heading
					componentClass={component}
					title={'Start exploring'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	);
}
