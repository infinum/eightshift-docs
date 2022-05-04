import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Iframe from '../theme/sections/iframe/iframe';

export default function Sass() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	return (
		<Layout
			title={'Scss'}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName={'page-sass'}
		>
			<Iframe
				src="https://infinum.github.io/eightshift-frontend-libs/sassdocs/"
			/>
		</Layout>
	);
};
