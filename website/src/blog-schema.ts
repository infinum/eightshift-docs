import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	permalink: z.string(),
	date: z.coerce.date(),
	summary: z.string(),
	readingTime: z.number(),
	authors: z.array(z.object({
		key: z.string(),
		name: z.string(),
		title: z.string().optional(),
		url: z.string().url().optional(),
		imageURL: z.string().url().optional(),
	})),
	tags: z.array(z.object({ label: z.string(), permalink: z.string() })),
});

export const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: blogSchema,
});
