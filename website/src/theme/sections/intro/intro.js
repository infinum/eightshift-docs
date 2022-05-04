import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from './../../components/container/container';
import Button from './../../components/button/button';

export default function Intro() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	const component = 'shift-intro';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
				bgColor={'light'}
			>
				<div className={`${component}__title`} dangerouslySetInnerHTML={{__html: 'Eightshift<br/>Development<br/>kit'}}></div>
				<div className={`${component}__image`}>
					<img className={`${component}__image-bg`} src={useBaseUrl('img/ic-intro.svg')} />
					<img className={`${component}__image-img`} src={useBaseUrl('img/img-boilerplate-intro@2x.png')} />
				</div>
				<div className={`${component}__content`}>
					{siteConfig.tagline}
				</div>
				<Button 
					componentClass={component}
					label={'Get Started'}
					href={useBaseUrl('/get-started')}
				/>
			</Container>
		</div>
	);
}
