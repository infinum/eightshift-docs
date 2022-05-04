import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '../../components/heading/heading';
import Container from '../../components/container/container';

export default function Panels() {
	const component = 'panels';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'small'}
				spacingBottom={'none'}
			>
				<Heading
					componentClass={component}
					title={'An editing experience content editors will love'}
					subtitle={'Provide the ease of use and flexibility that your content editors crave for. Rely on our user-friendly default blocks or use plug&play editor components to build great experiences. '}
					titleSize={'medium'}
				/>
			</Container>
			<Container
				componentClass={component}
				size={'medium'}
				spacingTop={'none'}
			>
				<div className={`${component}__content`}>
					<img className={`${component}__image`} src={useBaseUrl('img/img-panels@2x.png')} />
				</div>
			</Container>
		</div>
	)
}
