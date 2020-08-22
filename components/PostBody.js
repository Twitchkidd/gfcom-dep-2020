import styled from 'styled-components';
import { below } from '../utils';

const PostBodyWrap = styled.div`
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	${below.med`
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	`}
`;

const Markdown = styled.div`
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
`;

export const PostBody = ({ content }) => {
	return (
		<PostBodyWrap>
			<Markdown dangerouslySetInnerHTML={{ __html: content }} />
		</PostBodyWrap>
	);
};
