import { blogFeed } from '../../lib/blog-feed';
export async function GET() {
	return new Response(await blogFeed('rss'), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
