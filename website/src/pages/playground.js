import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Playground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	// Temporary URL - will be replaced with the real one once the repo is pushed. Needs to be a direct link to the zip file.
	const themeZipUrl =
		'https://raw.githubusercontent.com/goranalkovic-infinum/fe-libs-theme-playground-test/main/es-wp-playground.zip';

	return (
		<Layout
			title='Playground'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-single-full-screen-child es-has-t-border'
		>
			<iframe
				className='es-full-size border-t border-t-grey-200'
				sandbox='allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation'
				src={`https://playground.wordpress.net?php=8.3&wp=6.5&networking=yes&mode=browser-full-screen&import-site=${themeZipUrl}`}
			/>
		</Layout>
	);
}
