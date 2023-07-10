import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import ShowcaseGrid from '../theme/sections/showcase-grid/showcase-grid';

export default function Showcase() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	return (
		<Layout
			title='Infinum showcase'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
		>
			<ShowcaseGrid privateType={true}/>
		</Layout>
	);
};
