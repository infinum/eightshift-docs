import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export const postsPerPage = 9;
export const blogTitle = 'Tutorials and articles about Eightshift development kit';

export async function getPosts() {
	return (await getCollection('blog')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getTags(posts: BlogPost[]) {
	const tags = new Map<string, { label: string; permalink: string; posts: BlogPost[] }>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			const group = tags.get(tag.permalink) ?? { ...tag, posts: [] };
			group.posts.push(post);
			tags.set(tag.permalink, group);
		}
	}
	return [...tags.values()].sort((a, b) => a.label.localeCompare(b.label));
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

export function pageUrl(base: string, page: number) {
	return page === 1 ? base : `${base}/page/${page}`;
}
