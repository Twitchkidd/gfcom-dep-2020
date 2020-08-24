import { HeroPost, MorePosts, PanelWrap } from './';

export const Coding = ({ allposts }) => (
	<PanelWrap>
		<HeroPost heroPost={allPosts[0]} />
		<MorePosts posts={allPosts.slice(1)} />
	</PanelWrap>
);
