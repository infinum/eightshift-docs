export function reformatCode(str) {
	const allLines = str.split(/\n/g);
	while(allLines[0]?.replace(/\s/g, '').length === 0) {
		allLines.shift();
	}

	while(allLines[allLines.length - 1]?.replace(/\s/g, '').length === 0) {
		allLines.pop();
	}

	const relevantLines = str.split(/\n/g).filter((line) => line.replace(/\s/g, '').length > 0);
	const indents = relevantLines.map((line) => line.match(/^\s*/)?.[0]?.length ?? 0);
	const minIndent = Math.min(...indents);

	return allLines.map((line) => line.slice(minIndent)).join('\n');
}
