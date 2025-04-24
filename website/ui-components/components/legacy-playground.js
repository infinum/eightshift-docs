import React, { useEffect, useRef, useState } from 'react';
import { startPlaygroundWeb, installTheme, wpCLI } from '@wp-playground/client';
import { icons } from '@eightshift/ui-components/icons';

export const LegacyComponentShowcase = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadingStep, setLoadingStep] = useState('Initializing');

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
					phpExtensionBundles: ['kitchen-sink'],
					features: {
						networking: true,
					},
					landingPage: '/wp-admin',
					steps: [
						{
							step: 'login',
							username: 'admin',
							password: 'password',
						},
					],
				},
				sapiName: 'cli',
			});

			// Fetch theme.
			setLoadingStep('Loading theme');

			const themeZipFilename = 'devkit-components.zip';
			const themeZipReq = await fetch(`/${themeZipFilename}`, {
				headers: {
					'Content-Type': 'application/octet-stream',
				},
				credentials: 'include',
			});

			setLoadingStep('Unpacking theme');

			const themeZipBlob = await themeZipReq.blob();
			const themeFile = new File([themeZipBlob], themeZipFilename);

			setLoadingStep('Installing theme');
			await installTheme(client, {
				themeZipFile: themeFile,
				options: {
					activate: true,
				},
			});

			// Install WP-CLI.
			setLoadingStep('Setting up WP-CLI');

			const wpCliPath = '/wordpress/wp-cli.phar';
			const wpCliResponse = await fetch('https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar');
			const wpCli = await wpCliResponse.arrayBuffer();
			await client.writeFile(wpCliPath, new Uint8Array(wpCli));

			// Add the demo posts.
			setLoadingStep('Initializing block');

			const { text: wpCliOutput } = await wpCLI(client, {
				command: `wp post create --post_title='Welcome to Eightshift DevKit!' --post_content='<!-- wp:eightshift-boilerplate/devkit-components /-->' --post_status='publish'`,
				wpCliPath,
			});

			// WP playground currently has an issue that pollutes the WP-CLI output, so --porcelain isn't of much help here unfortunately.
			const addedPostId = wpCliOutput
				.substring(wpCliOutput.indexOf('Created post ') + 13, wpCliOutput.lastIndexOf('.'))
				.trim();

			setLoadingStep('Finalizing');

			await client.goTo(`/wp-admin/post.php?post=${addedPostId}&action=edit`);

			await new Promise((resolve) => setTimeout(resolve, 1500));

			setIsLoading(false);
		};

		init();
	}, []);

	const iframeRef = useRef(null);

	return (
		<div className='es:size-full'>
			{isLoading && (
				<div className='es:flex es:gap-4'>
					<div className='es:mt-2 es:py-1 [&>svg]:es:size-6 text-infinum'>{icons.componentGeneric}</div>
					<div className='es:flow-root'>
						<h3 className='!es:mt-2'>Preparing component docs</h3>
						<span className='text-12'>{loadingStep}</span>
					</div>
				</div>
			)}

			<iframe
				className='es:size-full es:aspect-video esd-legacy-docs-iframe'
				allow='clipboard-read; clipboard-write'
				ref={iframeRef}
				style={{
					visibility: isLoading ? 'hidden' : 'visible',
				}}
			/>
		</div>
	);
};
