import styled from 'styled-components';
import { HeroPost, MorePosts, PanelWrap } from './';
import { lighter } from '../utils';

const CodingTitle = styled.h2`
	color: ${lighter};
`;

export const Coding = ({ allPosts }) => (
	<PanelWrap>
		<CodingTitle>
			Welcome to my blog! Mostly coding-related, for future reference!
		</CodingTitle>
		<HeroPost heroPost={allPosts[0]} />
		<MorePosts posts={allPosts.slice(1)} />
	</PanelWrap>
);
