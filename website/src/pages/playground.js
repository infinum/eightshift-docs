import React, { useEffect, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { startPlaygroundWeb, installTheme, wpCLI } from '@wp-playground/client';
import introPost from './intro-post.txt';

export default function Playground() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

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
			const themeZipFilename = 'devkittest.zip';
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

			// Add the demo post.
			const welcomePostContent = introPost.split("\n").map((line) => line.trim()).join('');
			await client.writeFile(`/wordpress/initial-post.txt`, welcomePostContent);

			const {text: wpCliOutput} = await wpCLI(client, {
				command: `wp post create /wordpress/initial-post.txt --post_title='Welcome to Eightshift DevKit!' --post_type='page' --post_status='publish'`,
				wpCliPath,
			});

			// WP playground currently has an issue that pollutes the WP-CLI output, so --porcelain isn't of much help here unfortunately.
			const addedPostId = wpCliOutput.substring(wpCliOutput.indexOf('Created post ') + 13, wpCliOutput.lastIndexOf('.')).trim();

			await client.goTo(`/wp-admin/post.php?post=${addedPostId}&action=edit`);

			// Add demo posts.
			await wpCLI(client, {
				command: 'wp post generate --count=10 --post_status=publish',
				wpCliPath,
			});
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
			/>
		</Layout>
	);
};
