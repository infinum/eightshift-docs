import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { deriveDescription } from './description';

export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	if (!route.entry.data.description?.trim()) {
		route.entry.data.description = deriveDescription(route.entry.body || '');
	}
	const section = context.url.pathname.split('/')[1];

	if (!['docs', 'forms', 'components'].includes(section)) {
		route.sidebar = [];
		route.hasSidebar = false;
		return;
	}

	const prefix = `/${section}/`;
	const belongsToSection = (entry: (typeof route.sidebar)[number]): boolean => {
		if (entry.type === 'group') return entry.entries.some(belongsToSection);
		return new URL(entry.href, context.url).pathname.startsWith(prefix);
	};

	route.sidebar = route.sidebar.filter(belongsToSection);
});
