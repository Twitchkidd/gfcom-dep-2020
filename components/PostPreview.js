import styled from 'styled-components';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';
import Excerpt from './Excerpt';

const PostPreviewCoverImageWrap = styled.div`
	margin-bottom: 1.25rem;
`;

const PostPreviewLinkWrapH3 = styled.h3`
	font-size: 1.875rem;
	margin-bottom: 0.75rem;
	line-height: 1.375;
`;

const PostPreviewA = styled.a`
	&:hover {
		text-decoration: underline;
	}
`;

const PostPreviewDateWrap = styled.div`
	font-size: 1.125rem;
	margin-bottom: 1rem;
`;

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => (
	<div>
		<PostPreviewCoverImageWrap>
			<CoverImage slug={slug} title={title} src={coverImage} />
		</PostPreviewCoverImageWrap>
		<PostPreviewLinkWrapH3>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<PostPreviewA>{title}</PostPreviewA>
			</Link>
		</PostPreviewLinkWrapH3>
		<PostPreviewDateWrap>
			<DateFormatter dateString={date} />
		</PostPreviewDateWrap>
		<Excerpt>{excerpt}</Excerpt>
		<Avatar />
	</div>
);

export default PostPreview;
