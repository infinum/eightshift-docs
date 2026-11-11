import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import sidebar from './sidebar.mjs';
import UnoCSS from '@unocss/astro';
import { presetIcons } from 'unocss';
import { starlightIconsPlugin } from 'starlight-plugin-icons';
import starlightUITweaks from 'starlight-ui-tweaks';
import starlightMdTxt from 'starlight-md-txt';
import starlightSeo from 'starlight-seo';
import scopeDemoCss from './src/styles/scope-demo-css.mjs';

export default defineConfig({
	site: 'https://eightshift.com',
	output: 'static',
	outDir: './build',
	publicDir: './static',
	trailingSlash: 'ignore',
	build: { format: 'directory' },
	markdown: { processor: unified() },
	vite: {
		plugins: [tailwindcss()],
		css: { postcss: { plugins: [scopeDemoCss()] } },
	},
	integrations: [
		UnoCSS({ presets: [presetIcons()], safelist: ['i-mdi-file-document-outline'] }),
		react(),
		starlight({
			title: 'Eightshift Development Kit',
			description: 'Tools and documentation for building modern WordPress projects with Eightshift.',
			favicon: '/img/favicon.png',
			components: {
				Header: './src/components/Header.astro',
				SkipLink: './src/components/SkipLink.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				SocialIcons: './src/components/NavbarLinks.astro',
				Sidebar: './src/components/Sidebar.astro',
				Footer: '@astrojs/starlight/components/Footer.astro',
				PageFrame: './src/components/PageFrame.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'search', type: 'application/opensearchdescription+xml', title: 'Eightshift', href: '/opensearch.xml' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://eightshift.com/img/social-preview.png' } },
				{ tag: 'script', content: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P5GG5DH');" },
			],
			social: [],
			sidebar,
			routeMiddleware: './src/sidebar-middleware.ts',
			plugins: [
				starlightIconsPlugin({ sidebar: false }),
				starlightUITweaks({ navbarLinks: [
					{ label: 'DevKit', href: '/docs/welcome' },
					{ label: 'Forms', href: '/forms/welcome' },
					{ label: 'Components', href: '/components/welcome' },
				] }),
				starlightMdTxt({ format: '.md.txt', alternateLink: false, absoluteLinks: false }),
				starlightSeo({ audit: false, image: '/img/social-preview.png' }),
			],
			customCss: ['./src/styles/global.css', './src/styles/demos.css'],
		}),
	],
});
