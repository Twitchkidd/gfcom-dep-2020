import styled from 'styled-components';
import { below } from '../utils';
import ReactMarkdown from 'react-markdown/with-html';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import Highlight from 'react-highlight';

// const CodeBlock = ({ language, value }) => {
// 	return (
// 		<SyntaxHighlighter language={language} style={dark}>
// 			{value}
// 		</SyntaxHighlighter>
// 	);
// };

// const CodeBlock = ({ language, value }) => {
// 	return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
// };

// const CodeBlock = ({ value }) => {
// 	return <Highlight>{value}</Highlight>;
// };

const PostBodyWrap = styled.div`
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	${below.med`
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	`}
	.post {
		font-size: 1.125rem;
		line-height: 1.625;
		p,
		ul,
		ol,
		blockquote {
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
		}
		h2 {
			font-size: 1.875rem;
			margin-top: 3rem;
			margin-bottom: 1rem;
			line-height: 1.375;
		}
		h3 {
			font-size: 1.5rem;
			margin-top: 2rem;
			margin-bottom: 1rem;
			line-height: 1.375;
		}
	}
`;

const Markdown = styled.div``;

// export const PostBody = ({ content }) => {
// 	return (
// 		<PostBodyWrap>
// 			<Markdown dangerouslySetInnerHTML={{ __html: content }} />
// 		</PostBodyWrap>
// 	);
// };

export const PostBody = ({ content }) => {
	return (
		<PostBodyWrap>
			<ReactMarkdown
				escapeHtml={false}
				source={content}
				className='post'
				// renderers={{ code: CodeBlock }}
			/>
		</PostBodyWrap>
	);
};

// ```javascript
// const fs = require('fs');
// const readline = require('readline');
// const figlet = require('figlet');

// const readInterface = readline.createInterface({
// 	input: fs.createReadStream('./fonts.txt'),
// 	output: process.stdout,
// 	console: false,
// });

// readInterface.on('line', line => {
// 	console.log(
// 		figlet.textSync('New Blog Post!', {
// 			font: line,
// 			width: 80,
// 		})
// 	);
// });
// ```
