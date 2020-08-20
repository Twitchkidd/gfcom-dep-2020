import styled from 'styled-components';
import Avatar from './Avatar';
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import { PostTitle } from './';
import { above } from '../utils';

const BigAvatarWrap = styled.div`
	display: none;
	${above.med`
    display: block;
    margin-bottom: 3rem;
  `}
`;

const SmallAvatarWrap = styled.div`
	display: block;
	margin-bottom: 1.5rem;
	${above.med`
    display: none;
  `}
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

const DateWrap = styled.div`
	margin-bottom: 1.5rem;
	font-size: 1.125rem;
`;

const SmallAvatarAndDateWrap = styled.div`
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
`;

export const PostHeader = ({ title, coverImage, date }) => (
	<>
		<PostTitle>{title}</PostTitle>
		<BigAvatarWrap>
			<Avatar />
		</BigAvatarWrap>
		<CoverImageWrap>
			<CoverImage title={title} src={coverImage} />
		</CoverImageWrap>
		<SmallAvatarAndDateWrap>
			<SmallAvatarWrap>
				<Avatar />
			</SmallAvatarWrap>
			<DateWrap>
				<DateFormatter dateString={date} />
			</DateWrap>
		</SmallAvatarAndDateWrap>
	</>
);
