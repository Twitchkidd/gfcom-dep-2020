import styled from 'styled-components';
import Link from 'next/link';
import { above } from '../utils';

const CoverImageWrap = styled.div`
	margin-right: -1.25rem;
	margin-left: -1.25rem;
	${above.sm`
    margin-right: 0;
    margin-left: 0;
  `}
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
`;

const CoverImage = ({ title, src, slug }) => {
	return (
		<CoverImageWrap>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				<Image src={src} alt={`Cover Image for ${title}`} />
			)}
		</CoverImageWrap>
	);
};

export default CoverImage;
