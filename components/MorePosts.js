import styled from 'styled-components';
import PostPreview from './PostPreview';
import { above, light } from '../utils';

const MorePostsHeader = styled.h2`
	margin-bottom: 2rem;
	font-size: 2.75rem;
	font-weight: 700;
	letter-spacing: -0.04em;
	line-height: 1.2;
	${above.med`
		font-size: 4.5rem;
	`}
	color: ${light};
`;

const PostsWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(1, minmax(0, 1fr));
	row-gap: 2rem;
	margin-bottom: 2rem;
	${above.med`
		grid-template-rows: repeat(2, minmax(0, 1fr));
		column-gap: 4rem;
		row-gap: 8rem;
	`}
	${above.large`
		column-gap: 8rem;
	`}
`;

export const MorePosts = ({ posts }) => (
	<section>
		<MorePostsHeader>More Posts</MorePostsHeader>
		<PostsWrap>
			{posts.map(post => {
				const { title, coverImage, date, description, slug } = post;
				return (
					<PostPreview
						key={title}
						title={title}
						coverImage={
							coverImage
								? require(`../public/postCovers/${coverImage}`)
								: require('../public/sweetGradient.png')
						}
						date={date}
						description={description}
						slug={slug}
					/>
				);
			})}
		</PostsWrap>
	</section>
);
