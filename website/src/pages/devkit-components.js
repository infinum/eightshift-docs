import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { startPlaygroundWeb, installTheme, wpCLI } from '@wp-playground/client';

export default function DevKitComponents() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	const [isLoading, setIsLoading] = useState(true);

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
			const themeZipFilename = 'devkit-components.zip';
			const themeZipReq = await fetch(`/${themeZipFilename}`, {
				headers: {
					'Content-Type': 'application/octet-stream',
				},
				credentials: 'include'
			})
			const themeZipBlob = await themeZipReq.blob();
			const themeFile = new File([themeZipBlob], themeZipFilename);

			await installTheme(client, {
				themeZipFile: themeFile,
				options: {
					activate: true,
				},
			});

			// Install WP-CLI.
			const wpCliPath = '/wordpress/wp-cli.phar';
			const wpCliResponse = await fetch('https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar');
			const wpCli = await wpCliResponse.arrayBuffer();
			await client.writeFile(wpCliPath, new Uint8Array(wpCli));

			// Add the demo posts.
			const { text: wpCliOutput } = await wpCLI(client, {
				command: `wp post create --post_title='Welcome to Eightshift DevKit!' --post_content='<!-- wp:eightshift-boilerplate/devkit-components /-->' --post_status='publish'`,
				wpCliPath,
			});

			// WP playground currently has an issue that pollutes the WP-CLI output, so --porcelain isn't of much help here unfortunately.
			const addedPostId = wpCliOutput.substring(wpCliOutput.indexOf('Created post ') + 13, wpCliOutput.lastIndexOf('.')).trim();

			await client.goTo(`/wp-admin/post.php?post=${addedPostId}&action=edit`);

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
				<div
					style={{ position: 'fixed', top: 0, left: 0, display: 'grid', placeItems: 'center', blockSize: '100%', inlineSize: '100%' }}
				>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<div class="sk-cube-grid">
							<div class="sk-cube sk-cube1"></div>
							<div class="sk-cube sk-cube2"></div>
							<div class="sk-cube sk-cube3"></div>
							<div class="sk-cube sk-cube4"></div>
							<div class="sk-cube sk-cube5"></div>
							<div class="sk-cube sk-cube6"></div>
							<div class="sk-cube sk-cube7"></div>
							<div class="sk-cube sk-cube8"></div>
							<div class="sk-cube sk-cube9"></div>
						</div>

						<h3>Preparing docs, please wait</h3>
					</div>
				</div>
			}
		</Layout>
	);
};
