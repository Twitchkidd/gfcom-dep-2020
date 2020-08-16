import styled from 'styled-components';
import Link from 'next/link';
import Avatar from './Avatar';
import CoverImage from './CoverImage';
import DateFormater from './DateFormater';
import { above } from '../utils';

const CoverImageWrap = styled.div`
	margin-bottom: 2rem;
	${above.med`
		margin-bottom: 4rem;
	`}
`;

const HeroPostWrap = styled.div`
	margin-bottom: calc(20rem / 4);
	${above.med`
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4rem;
		margin-bottom: 7rem;
	`}
	${above.large`
		gap: 2rem;
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

const A = styled.a`
	&:hover {
		text-decoration: underline;
	}
`;

const DateWrapper = styled.div`
	margin-bottom: 1rem;
	font-size: 1.125rem;
	${above.med`
		margin-bottom: 0;
	`}
`;

const Excerpt = styled.p`
	font-size: 1.125rem;
	line-height: 1.625;
	margin-bottom: 1rem;
`;

export const HeroPost = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) => (
	<section>
		<CoverImageWrap>
			<CoverImage title={title} src={coverImage} slug={slug} />
		</CoverImageWrap>
		<HeroPostWrap>
			<div>
				<TitleH3>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<A>{title}</A>
					</Link>
				</TitleH3>
				<DateWrapper>
					<DateFormater dateString={date} />
				</DateWrapper>
			</div>
			<div>
				<Excerpt>{excerpt}</Excerpt>
				<Avatar name={author.name} picture={author.picture} />
			</div>
		</HeroPostWrap>
	</section>
);
