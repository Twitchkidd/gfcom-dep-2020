import styled from 'styled-components';
import PostPreview from './PostPreview';
import { above } from '../utils';

const MoreStoriesHeader = styled.h2`
	margin-bottom: 2rem;
	font-size: 2.75rem;
	font-weight: 700;
	letter-spacing: -0.04em;
	line-height: 1.2;
	${above.med`
		font-size: 4.5rem;
	`}
`;

const PostsWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(1, minmax(0, 1fr));
	row-gap: 5rem;
	margin-bottom: 8rem;
	${above.med`
		grid-template-rows: repeat(2, minmax(0, 1fr));
		column-gap: 4rem;
		row-gap: 8rem;
	`}
	${above.large`
		column-gap: 8rem;
	`}
`;

export const MoreStories = ({ posts }) => (
	<section>
		<MoreStoriesHeader>More Stories</MoreStoriesHeader>
		<PostsWrap>
			{posts.map(post => (
				<PostPreview
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					excerpt={post.excerpt}
				/>
			))}
		</PostsWrap>
	</section>
);