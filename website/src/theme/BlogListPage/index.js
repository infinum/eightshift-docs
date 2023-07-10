import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
	PageMetadata,
	HtmlClassNameProvider,
	ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import { EsOpenSource } from '../sections/os-projects';
import { EsOsFreebies } from '../sections/os-freebies';

function BlogListPageMetadata(props) {
	const { metadata } = props;
	const {
		siteConfig: { title: siteTitle },
	} = useDocusaurusContext();
	const { blogDescription, blogTitle, permalink } = metadata;
	const isBlogOnlyMode = permalink === '/';
	const title = isBlogOnlyMode ? siteTitle : blogTitle;
	return (
		<>
			<PageMetadata title={title} description={blogDescription} />
			<SearchMetadata tag='blog_posts_list' />
		</>
	);
}

function BlogListPageContent(props) {
	const { metadata, items } = props;

	return (
		<BlogLayout>
			<h1 className='es-big-title'>Typing as <wbr /> we code</h1>

			<div className='es-blog-grid'>
				<BlogPostItems items={items} />
			</div>

			<BlogListPaginator metadata={metadata} />
			<EsOpenSource gray />
			<EsOsFreebies gray />
		</BlogLayout>
	);
}

export default function BlogListPage(props) {
	return (
		<HtmlClassNameProvider
			className={clsx(
				ThemeClassNames.wrapper.blogPages,
				ThemeClassNames.page.blogListPage,
			)}>
			<BlogListPageMetadata {...props} />
			<BlogListPageContent {...props} />
		</HtmlClassNameProvider>
	);
}
