import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next();
	if (!response.headers.get('content-type')?.includes('text/html')) return response;
	let html = await response.text();
	const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/)?.[1];
	if (!description || description === 'Tools and documentation for building modern WordPress projects with Eightshift.') {
		const main = (html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '')
			.replace(/<(pre|script|style|aside)\b[^>]*>[\s\S]*?<\/\1>/g, '');
		const paragraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
			.map((match) => match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
		const text = paragraphs.find((paragraph) => paragraph.length > 30);
		if (text) {
			const summary = text.length > 160 ? `${text.slice(0, 157).replace(/\s+\S*$/, '')}…` : text;
			const escaped = summary.replace(/"/g, '&quot;').replace(/</g, '&lt;');
			if (description === undefined) {
				html = html.replace('</head>', () => `<meta name="description" content="${escaped}"><meta property="og:description" content="${escaped}"><meta name="twitter:description" content="${escaped}"></head>`);
			}
			html = html.replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*("[^>]*>)/g, `$1${escaped.replace(/\$/g, '$$$$')}$2`);
		}
	}
	return new Response(html, { status: response.status, statusText: response.statusText, headers: response.headers });
});
