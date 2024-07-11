import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Playground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	const [supportsServiceWorkers, setSupportsServiceWorkers] = useState(false);

	useEffect(() => {
		setSupportsServiceWorkers('serviceWorker' in navigator);
	}, []);

	const themeZipUrl =
		'https://raw.githubusercontent.com/infinum/eightshift-docs/main/playground-files/es-wp-playground.zip';

	return (
		<Layout
			title='Playground'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-single-full-screen-child es-has-t-border'
		>
			{!supportsServiceWorkers && (
				<div className='es-full-size flex flex-col items-center justify-center gap-3 esd-full-fixed'>
					<h2 className='text-infinum'>Something's not right</h2>
					<span className='text-16 text-center'>
						Your browser does not support{' '}
						<a
							className='text-infinum'
							href='https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'
							target='_blank'
							rel='noopener noreferrer'
						>
							Service workers
						</a>
						,
						<br />
						which are required to run the Playground.
					</span>
					<span className='text-12 text-grey-400 text-center'>
						This may be due to browser settings
						<br />
						or using a private/incognito mode
					</span>
				</div>
			)}
			{supportsServiceWorkers && (
				<iframe
					className='es-full-size border-t border-t-grey-200'
					sandbox='allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-downloads'
					src={`https://playground.wordpress.net?php=8.3&wp=6.5&networking=yes&mode=browser-full-screen&import-site=${themeZipUrl}`}
				/>
			)}
		</Layout>
	);
}
