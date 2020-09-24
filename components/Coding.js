import styled from 'styled-components';
import { FrequencyGraphic, HeroPost, MorePosts, PanelWrap } from './';
import { lighter } from '../utils';

const TitleWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	/* justify-content: space-between; */
`;

const CodingTitle = styled.h2`
	color: ${lighter};
	max-width: 40rem;
	text-align: right;
`;

export const Coding = ({ allPosts }) => (
	<PanelWrap>
		<TitleWrap>
			{/* <FrequencyGraphic posts={allPosts} /> */}
			<CodingTitle>
				Welcome to my blog! Answer to the question, "Where's he at?" Mostly
				coding-related, mostly for future reference!
			</CodingTitle>
		</TitleWrap>
		<HeroPost heroPost={allPosts[0]} />
		<MorePosts posts={allPosts.slice(1)} />
	</PanelWrap>
);
