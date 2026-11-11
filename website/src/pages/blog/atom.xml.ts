import { blogFeed } from '../../lib/blog-feed';
export async function GET() {
	return new Response(await blogFeed('atom'), { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
}
