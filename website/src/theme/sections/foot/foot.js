import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from './../../components/container/container';

function Foot() {

	const component = 'shift-foot';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				spacingBottom={'small'}
				spacingTop={'none'}
				bgColor={'light'}
			>
				<div className={`${component}__columns`}>
					<div className={`${component}__column ${component}__column--left`}>
						Made with &hearts; by &nbsp;
						<a href="https://eightshift.com/" target="_blank" rel="noopener noreferrer" className={`${component}__link`}>
							{'Eightshift'}
						</a>
						{' team | '}
						<a href={useBaseUrl('/sitemap.xml')} target="_blank" rel="noopener noreferrer" className={`${component}__link`}>
							{'Sitemap'}
						</a>
					</div>
					<div className={`${component}__column ${component}__column--right`}>
						<span className={`${component}__copy`}>
							{'© Eightshift. All rights reserved.'}
						</span>
						<span className={`${component}__logo-wrap`}>
							{'Part of '}
							<a href="https://infinum.com/" target="_blank" rel="noopener noreferrer" rel="nofollow" className={`${component}__logo`}>
								<img src={useBaseUrl('img/ic-infinum-logo.svg')} />
							</a>
						</span>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Foot;
