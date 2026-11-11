import { Highlight, themes } from 'prism-react-renderer';

export default function CodeBlock({ children, language = 'text' }) {
	const code = String(children).replace(/\n$/, '');
	return (
		<Highlight theme={themes.vsDark} code={code} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style} tabIndex={0}>
					<code>
						{tokens.map((line, lineIndex) => (
							<div key={lineIndex} {...getLineProps({ line })}>
								{line.map((token, tokenIndex) => (
									<span key={tokenIndex} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</code>
				</pre>
			)}
		</Highlight>
	);
}
