import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { seoSchema } from 'starlight-seo/schema';
import { blog } from './blog-schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: seoSchema() }) }),
	blog,
};
