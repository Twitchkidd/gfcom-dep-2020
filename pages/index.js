import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { MoreStories, HeroPost, Layout } from '../components';
import { above } from '../utils';
import { getAllPosts } from '../lib';

const Grid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: fermf;
	grid-template-columns: fermf;
	${above.small`
		grid-template-rows: fermf;
		grid-template-columns: fermf;
	`}
`;

const Sidebar = styled.div``;

const Header1 = styled.header``;

const Nav = styled.nav``;

export default function Index({ allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	const [index, setIndex] = useState(1);
	return (
		<>
			<Layout>
				<Head>
					<title>Gareth Field ... dot com!</title>
				</Head>
				<Grid>
					<Tabs state={[index, setIndex]}>
						<Sidebar>
							<Header1 />
							<Nav>
								<Tabs />
								<Links />
								<Socials />
							</Nav>
						</Sidebar>
						<Header2 />
						<Header3 />
						<HeroPost
							title={heroPost.title}
							// coverImage={heroPost.coverImage}
							coverImage={require('../public/fortTrumbull.jpg')}
							date={heroPost.date}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</Tabs>
				</Grid>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	]);

	return {
		props: { allPosts },
	};
}

// const Title = styled.h1`
// 	font-size: 50px;
// 	color: ${({ theme }) => theme.colors.primary};
// `;
