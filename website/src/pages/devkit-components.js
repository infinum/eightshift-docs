import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { startPlaygroundWeb, installTheme, wpCLI } from '@wp-playground/client';

export default function DevKitComponents() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	const [isLoading, setIsLoading] = useState(true);
	const [loadingStep, setLoadingStep] = useState('Initializing');
	const [loadingProgress, setLoadingProgress] = useState(null);

	useEffect(() => {
		const init = async () => {
			const client = await startPlaygroundWeb({
				iframe: iframeRef.current,
				remoteUrl: `https://playground.wordpress.net/remote.html`,
				blueprint: {
					preferredVersions: {
						php: '8.3',
						wp: '6.4',
					},
					phpExtensionBundles: [
						'kitchen-sink'
					],
					features: {
						networking: true,
					},
					landingPage: '/wp-admin',
					steps: [
						{
							step: 'login',
							username: 'admin',
							password: 'password'
						},
					]
				},
				sapiName: 'cli',
			});

			// Fetch theme.
			setLoadingStep('Loading theme');
			setLoadingProgress(25);

			const themeZipFilename = 'devkit-components.zip';
			const themeZipReq = await fetch(`/${themeZipFilename}`, {
				headers: {
					'Content-Type': 'application/octet-stream',
				},
				credentials: 'include'
			})

			setLoadingProgress(33);
			setLoadingStep('Unpacking theme');

			const themeZipBlob = await themeZipReq.blob();
			const themeFile = new File([themeZipBlob], themeZipFilename);

			setLoadingProgress(50);
			setLoadingStep('Installing theme');
			await installTheme(client, {
				themeZipFile: themeFile,
				options: {
					activate: true,
				},
			});

			// Install WP-CLI.
			setLoadingProgress(60);
			setLoadingStep('Setting up WP-CLI');

			const wpCliPath = '/wordpress/wp-cli.phar';
			const wpCliResponse = await fetch('https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar');
			const wpCli = await wpCliResponse.arrayBuffer();
			await client.writeFile(wpCliPath, new Uint8Array(wpCli));

			// Add the demo posts.
			setLoadingStep('Initializing block');
			setLoadingProgress(80);

			const { text: wpCliOutput } = await wpCLI(client, {
				command: `wp post create --post_title='Welcome to Eightshift DevKit!' --post_content='<!-- wp:eightshift-boilerplate/devkit-components /-->' --post_status='publish'`,
				wpCliPath,
			});

			// WP playground currently has an issue that pollutes the WP-CLI output, so --porcelain isn't of much help here unfortunately.
			const addedPostId = wpCliOutput.substring(wpCliOutput.indexOf('Created post ') + 13, wpCliOutput.lastIndexOf('.')).trim();

			setLoadingStep('Finalizing');
			setLoadingProgress(92);

			await client.goTo(`/wp-admin/post.php?post=${addedPostId}&action=edit`);

			setLoadingProgress(100);
			await new Promise((resolve) => setTimeout(resolve, 1500));

			setIsLoading(false);
		};

		init();
	}, []);

	const iframeRef = useRef(null);

	return (
		<Layout
			title='Playground'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-single-full-screen-child es-has-t-border'
		>
			<iframe
				className='es-full-size'
				allow='clipboard-read; clipboard-write'
				ref={iframeRef}
				style={{
					visibility: isLoading ? 'hidden' : 'visible'
				}}
			/>

			{isLoading &&
				<div className='es-full-size flex flex-col items-center justify-center gap-1.5 esd-full-fixed'>
					<progress value={loadingProgress} max={100}></progress>
					<h3>Preparing component docs</h3>
					<span className='text-12'>{loadingStep}</span>
				</div>
			}
		</Layout>
	);
};
