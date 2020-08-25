import { HeroPost, MorePosts, PanelWrap } from './';

export const Coding = ({ allPosts }) => (
	<PanelWrap>
		<HeroPost heroPost={allPosts[0]} />
		<MorePosts posts={allPosts.slice(1)} />
	</PanelWrap>
);
