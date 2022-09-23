import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import ShowcaseGrid from '../theme/sections/showcase-grid/showcase-grid';
import Footer from '../theme/sections/footer/footer';
import Foot from '../theme/sections/foot/foot';

export default function Showcase() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	return (
		<Layout
			title={'Showcase Infinum'}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName={'page-showcase'}
		>
			<ShowcaseGrid privateType={true}/>
			<Footer />
			<Foot />
		</Layout>
	);
};
