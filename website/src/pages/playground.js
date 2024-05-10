import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { startPlaygroundWeb, installTheme, wpCLI } from '@wp-playground/client';
import introPost from './intro-post.txt';

export default function Playground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	const [iframeUrl, setIframeUrl] = useState('');

	const [isLoading, setIsLoading] = useState(true);
	const [loadingStep, setLoadingStep] = useState('Initializing');
	const [loadingProgress, setLoadingProgress] = useState(null);

	useEffect(() => {
		const init = async () => {
			const client = await startPlaygroundWeb({
				iframe: iframeRef.current,
				remoteUrl: 'https://playground.wordpress.net/remote.html',
				blueprint: {
					preferredVersions: {
						php: '8.3',
						wp: '6.5',
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
				onClientConnected: (playground) => {
					window.playground = playground;
				},
			});

			client.onNavigation((url) => {
				setIframeUrl(url);
			});

			// Fetch theme.
			setLoadingStep('Loading theme');
			setLoadingProgress(25);
			const themeZipFilename = 'devkittest.zip';
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

			// Add the demo post.
			setLoadingProgress(75);
			setLoadingStep('Adding demo posts');

			const welcomePostContent = introPost.split("\n").map((line) => line.trim()).join('');
			await client.writeFile(`/wordpress/initial-post.txt`, welcomePostContent);

			const { text: wpCliOutput } = await wpCLI(client, {
				command: `wp post create /wordpress/initial-post.txt --post_title='Welcome to Eightshift DevKit!' --post_type='page' --post_status='publish'`,
				wpCliPath,
			});

			// WP playground currently has an issue that pollutes the WP-CLI output, so --porcelain isn't of much help here unfortunately.
			const addedPostId = wpCliOutput.substring(wpCliOutput.indexOf('Created post ') + 13, wpCliOutput.lastIndexOf('.')).trim();

			setLoadingProgress(95);
			setLoadingStep('Finalizing');
			await client.goTo(`/wp-admin/post.php?post=${addedPostId}&action=edit`);

			setLoadingProgress(100);
			// Add demo posts.
			await wpCLI(client, {
				command: 'wp post generate --count=10 --post_status=publish',
				wpCliPath,
			});

			setIsLoading(false);
		};

		init();
	}, []);

	const iframeRef = useRef(null);

	const handleUrlSubmit = (e) => {
		e.preventDefault();
		window?.playground?.goTo(iframeUrl);
	}

	return (
		<Layout
			title='Playground'
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName='es-single-full-screen-child es-has-t-border'
		>
			<div
				className='es-full-size'
				style={{
					visibility: isLoading ? 'hidden' : 'visible'
				}}
			>
				<div
					className='flex flex-col desktop:flex-row items-center gap-8 desktop:justify-between bg-grey-100'
					style={{
						borderBottom: '1px solid rgb(228 235 245)',
						padding: '0.5rem',
					}}
				>
					<form className='w-full' onSubmit={handleUrlSubmit}>
						<input
							className='w-full border text-12'
							value={iframeUrl}
							onChange={({ target }) => setIframeUrl(target?.value)}
							type='text'
							style={{
								fontFamily: 'var(--ifm-font-family-monospace)',
								borderColor: 'rgb(228 235 245)',
								borderRadius: '0.5rem',
								padding: '0.5rem',
							}}
						/>
					</form>
				</div>
				<iframe
					className='es-full-size border-t border-t-grey-200'
					allow='clipboard-read; clipboard-write'
					ref={iframeRef}
				/>
			</div>

			{isLoading &&
				<div className='es-full-size flex flex-col items-center justify-center gap-1.5 esd-full-fixed'>
					<progress value={loadingProgress} max={100}></progress>
					<h3>Preparing playground</h3>
					<span className='text-12'>{loadingStep}</span>
				</div>
			}
		</Layout>
	);
};
