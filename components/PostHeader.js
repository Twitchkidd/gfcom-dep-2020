import styled from 'styled-components';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';
import { above, lighter } from '../utils';

const PostTitle = styled.h1`
	font-size: 2.75rem;
	font-weight: 700;
	letter-spacing: -0.04em;
	line-height: 1.4;
	margin-bottom: 1rem;
	${above.med`
    font-size: 4.5rem;
    line-height: 1.05;
    text-align: left;
		`}
	${above.large`
    font-size: 6.25rem;
		`}
`;

const PostDescription = styled.h2`
	color: ${lighter};
	margin-top: 0;
	margin-bottom: 0.25rem;
`;

const DateWrap = styled.div`
	margin-bottom: 1.5rem;
	font-size: 1.125rem;
`;

const CoverImageWrap = styled.div`
	margin-bottom: 2rem;
	margin-left: -1.25rem;
	margin-right: -1.25rem;
	${above.small`
    margin-left: 0;
    margin-right: 0;
		`}
	${above.med`
    margin-bottom: 4rem;
		`}
	max-width: 100%;
`;

export const PostHeader = ({ title, coverImage, date, description }) => (
	<>
		<PostTitle>{title}</PostTitle>
		<PostDescription>{description}</PostDescription>
		<DateWrap>
			<DateFormatter dateString={date} />
		</DateWrap>
		<CoverImageWrap>
			<CoverImage title={title} src={coverImage} />
		</CoverImageWrap>
	</>
);

// const SmallBioAndDateWrap = styled.div`
// 	max-width: 42rem;
// 	margin-left: auto;
// 	margin-right: auto;
// `;

// const BigBioWrap = styled.div`
// 	display: none;
// 	${above.med`
//     display: block;
//     margin-bottom: 3rem;
//   `}
// `;

// const SmallBioWrap = styled.div`
// 	display: block;
// 	margin-bottom: 1.5rem;
// 	${above.med`
//     display: none;
//   `}
// `;
