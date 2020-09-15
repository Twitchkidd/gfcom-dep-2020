import styled from 'styled-components';
import Link from 'next/link';
import { above, purple } from '../utils';

const CoverImageWrap = styled.div`
	margin-right: -1.25rem;
	margin-left: -1.25rem;
	${above.small`
    margin-right: 0;
    margin-left: 0;
  `}
	width: 100%;
`;

const ImageLink = styled.a`
	background-image: none;
	&:hover {
		cursor: pointer;
		border-bottom: 1px solid ${purple};
	}
`;

const Image = styled.img`
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
	${props =>
		props.slug
			? `
    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    transition-property: box-shadow;
    transition-duration: 200ms;
  `
			: null}
	width: 100%;
`;

const CoverImage = ({ title, src, slug, loading }) => {
	return (
		<CoverImageWrap>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<ImageLink aria-label={title}>
						<Image src={src} alt={title} loading={loading} />
					</ImageLink>
				</Link>
			) : (
				<Image src={src} alt={`Cover Image for ${title}`} />
			)}
		</CoverImageWrap>
	);
};

export default CoverImage;
