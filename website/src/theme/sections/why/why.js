import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Why() {
	const component = 'shift-why';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'small'}
				spacingBottom={'none'}
			>
				<Heading
					componentClass={component}
					title={'A WordPress boilerplate from the future'}
					subtitle={'Eightshift Development kit makes building complex WordPress themes and plugins painless. Use and extend our block and component collection to build out dynamic Gutenberg blocks. Extract commonly-used UI elements into reusable components. Forget about block registration and save callbacks. Build a REST route in minutes. You\'ll never want to go back.'}
					align={'left'}
					titleSize={'medium'}
				/>
			</Container>
			<Container
				componentClass={component}
				size={'medium'}
				spacingTop={'none'}
			>
				<div className={`${component}__content`}>
					<img className={`${component}__image ${component}__image--desktop`} src={useBaseUrl('img/img-why-boilerplate@2x.png')} />
					<img className={`${component}__image ${component}__image--mobile`} src={useBaseUrl('img/img-why-boilerplate-mobile@2x.png')} />
				</div>
			</Container>
		</div>
	)
}
