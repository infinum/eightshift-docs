const packageStyles = /[/\\]@eightshift[/\\]ui-components[/\\]dist[/\\]assets[/\\]style(?:-editor|-admin)?\.css$/;
const boundary = ':where(.esd-demo-island, [class*="es:"], .esd-demo-island *, [class*="es:"] *)';

/** Keep the library's unscoped preflight out of the documentation shell. */
export default function scopeDemoCss() {
	return {
		postcssPlugin: 'eightshift-demo-css-boundary',
		Rule(rule) {
			if (!packageStyles.test(rule.source?.input?.file ?? '')) return;
			if (rule.selector.includes(boundary)) return;
			if (rule.parent?.type === 'atrule' && /keyframes$/.test(rule.parent.name)) return;
			// Tokens are prefixed and must also be inherited by body-mounted portals.
			if (rule.nodes?.every((node) => node.type !== 'decl' || node.prop.startsWith('--es-'))) return;
			if (rule.selector.includes('es\\:') || rule.selector.includes('es-uic-')) return;
			rule.selectors = rule.selectors.map((selector) => {
				if (selector === 'html' || selector === ':host' || selector === ':root') {
					return ':where(.esd-demo-island, [class*="es:"])';
				}
				// A compound boundary also covers the portal root itself and pseudo-elements.
				return selector.replace(/^([a-z][\w-]*|\*)?/i, `$1${boundary}`);
			});
		},
	};
}
