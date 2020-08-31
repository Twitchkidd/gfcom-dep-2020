import styled from 'styled-components';
import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

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
		cursor: pointer;
	}
`;

const PostPreviewDateWrap = styled.div`
	font-size: 1.125rem;
	margin-bottom: 1rem;
`;

const Description = styled.p`
	font-size: 1.125rem;
	line-height: 1.625;
	margin-bottom: 1rem;
`;

const PostPreview = ({ title, coverImage, date, description, slug }) => (
	<div>
		<PostPreviewLinkWrapH3>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<PostPreviewA>{title}</PostPreviewA>
			</Link>
		</PostPreviewLinkWrapH3>
		{/* <Description>{description}</Description> */}
		<PostPreviewDateWrap>
			<DateFormatter dateString={date} />
		</PostPreviewDateWrap>
		<PostPreviewCoverImageWrap>
			<CoverImage title={title} src={coverImage} slug={slug} />
		</PostPreviewCoverImageWrap>
	</div>
);

export default PostPreview;
