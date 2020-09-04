import styled from 'styled-components';
import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';
import { above } from '../utils';

const CoverImageWrap = styled.div`
	margin-bottom: 2rem;
	${above.med`
		margin-bottom: 4rem;
	`}
	max-width: 100%;
`;

const PostWrap = styled.div`
	margin-bottom: 5rem;
	${above.med`
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 4rem;
		margin-bottom: 1.625rem;
	`}
	${above.large`
		column-gap: 2rem;
	`}
`;

const TitleH3 = styled.h3`
	margin-bottom: 1rem;
	line-height: 1.25;
	font-size: 2.25rem;
	${above.large`
		font-size: 2.75rem;
	`}
`;

const Description = styled.p`
	font-size: 1.125rem;
	line-height: 1.625;
	margin-bottom: 1rem;
`;

const A = styled.a`
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	hyphens: manual;
`;

const DateWrapper = styled.div`
	margin-bottom: 1rem;
	font-size: 1.125rem;
	${above.med`
		margin-bottom: 0;
	`}
`;

export const HeroPost = ({ heroPost }) => {
	const { coverImage, date, description, title, slug } = heroPost;
	let useSuperSecret = false;
	if (title === 'Happy Thirdsday!') {
		useSuperSecret = true;
	}
	return (
		<section>
			<PostWrap>
				<div>
					<TitleH3>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<A>
								{useSuperSecret
									? `Happy Thirds${String.fromCharCode(173)}day!`
									: title}
							</A>
						</Link>
					</TitleH3>
					{/* <Description>{description}</Description> */}
					<DateWrapper>
						<DateFormatter dateString={date} />
					</DateWrapper>
				</div>
			</PostWrap>
			<CoverImageWrap>
				<CoverImage
					title={title}
					src={
						coverImage
							? require(`../public/postCovers/${coverImage}`)
							: require('../public/sweetGradient.png')
					}
					slug={slug}
				/>
			</CoverImageWrap>
		</section>
	);
};
