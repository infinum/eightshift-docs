import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import GetStarted from '../theme/sections/get-started/get-started'
import Footer from '../theme/sections/footer/footer';
import Foot from '../theme/sections/foot/foot';

export default function Start() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	return (
		<Layout
			title={'Get Started'}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName={'page-get-started'}
		>
			<GetStarted />
			<Footer />
			<Foot />
		</Layout>
	);
};
