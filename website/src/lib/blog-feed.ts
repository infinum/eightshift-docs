import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { getPosts } from './blog';

const site = 'https://eightshift.com';
const title = 'Eightshift Development kit Blog';
const xml = (value: string) => value.replace(/[<>&"']/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]!);

export async function blogFeed(format: 'rss' | 'atom') {
	const posts = await getPosts();
	const markdown = await createMarkdownProcessor();
	const entries = await Promise.all(posts.map(async (post) => {
		// Feeds use the same content, with absolute links for external readers.
		const body = (post.body ?? '').replace(/^:::\w+(?:\[([^\]]+)\])?\s*$/gm, (_match, label) => label ? `**${label}**\n` : '').replace(/^:::\s*$/gm, '');
		const html = (await markdown.render(body)).code.replace(/(href|src)="\/(?!\/)/g, `$1="${site}/`);
		const url = `${site}${post.data.permalink}`;
		const authors = post.data.authors;
		if (format === 'atom') return `<entry><title>${xml(post.data.title)}</title><id>${xml(url)}</id><link href="${xml(url)}"/><updated>${post.data.date.toISOString()}</updated><published>${post.data.date.toISOString()}</published><summary>${xml(post.data.description)}</summary><content type="html">${xml(html)}</content>${authors.map((author) => `<author><name>${xml(author.name)}</name>${author.url ? `<uri>${xml(author.url)}</uri>` : ''}</author>`).join('')}${post.data.tags.map((tag) => `<category term="${xml(tag.label)}"/>`).join('')}</entry>`;
		return `<item><title>${xml(post.data.title)}</title><link>${xml(url)}</link><guid>${xml(url)}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><description>${xml(post.data.description)}</description><content:encoded>${xml(html)}</content:encoded>${authors.map((author) => `<dc:creator>${xml(author.name)}</dc:creator>`).join('')}${post.data.tags.map((tag) => `<category>${xml(tag.label)}</category>`).join('')}</item>`;
	}));
	const updated = posts[0].data.date;
	if (format === 'atom') return `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>${title}</title><subtitle>${title}</subtitle><id>${site}/blog</id><link href="${site}/blog"/><link href="${site}/blog/atom.xml" rel="self"/><updated>${updated.toISOString()}</updated>${entries.join('')}</feed>`;
	return `<?xml version="1.0" encoding="utf-8"?><rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>${title}</title><link>${site}/blog</link><description>${title}</description><language>en</language><lastBuildDate>${updated.toUTCString()}</lastBuildDate>${entries.join('')}</channel></rss>`;
}
