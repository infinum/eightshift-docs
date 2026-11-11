export function deriveDescription(body: string): string {
	const prose = body
		.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '')
		.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, '')
		.replace(/^import\s[\s\S]*?;\s*$/gm, '')
		.replace(/<!--[^]*?-->/g, '')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]*>/g, '')
		.replace(/\{[^}]*\}/g, '')
		.replace(/^\s*(?:#{1,6}\s.*|:::\S*.*|\|.*|\[.*\]:.*)$/gm, '')
		.replace(/[`*_]/g, '')
		.split(/\n\s*\n/)
		.map((paragraph) => paragraph.replace(/^\s*[-+>]\s/gm, '').replace(/\s+/g, ' ').trim())
		.filter((paragraph) => paragraph.length > 30);
	const text = prose[0] || '';
	if (text.length <= 160) return text;
	return `${text.slice(0, 157).replace(/\s+\S*$/, '').replace(/[,:;.]$/, '')}…`;
}
