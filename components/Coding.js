import { HeroPost, MorePosts, PanelWrap } from './';

export const Coding = ({ allPosts }) => (
	<PanelWrap>
		<p>Please put content here</p>
		<HeroPost heroPost={allPosts[0]} />
		<MorePosts posts={allPosts.slice(1)} />
	</PanelWrap>
);
