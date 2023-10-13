import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Sass() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	return (
		<Layout
			title='SCSS'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-single-full-screen-child es-has-t-border'
		>
			<iframe
				className='es-full-size'
				src='https://infinum.github.io/eightshift-frontend-libs/sassdocs/'
				allow='clipboard-read; clipboard-write'
			/>
		</Layout>
	);
};
