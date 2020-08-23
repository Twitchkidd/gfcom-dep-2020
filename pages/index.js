import { useState, useEffect } from 'react';
import { Tabs } from '@bumaga/tabs';
import styled from 'styled-components';
import Head from 'next/head';
import { MorePosts, HeroPost, Layout, TabLinks } from '../components';
import { above } from '../utils';
import { getAllPosts } from '../lib';

const Grid = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: minmax(20%, 10rem) minmax(80%, 1fr);
	grid-template-columns: 100%;
	${above.small`
		grid-template-rows: then again like two?; (4)
		grid-template-columns: like two, right?; (3)
	`}
`;

const MoreLessButton = styled.button`
	position: absolute;
`;

const Sidebar = styled.div``;

const Header1 = styled.header``;
const Header2 = styled.header``;
const Header3 = styled.header``;
const PageLinks = styled.div``;
const Socials = styled.div``;

const Nav = styled.nav``;

const MainWrap = styled.div`
	height: 100%;
	flex: 1;
	overflow: scroll;
	padding: 1rem 1rem 1rem 2.5rem;
`;

export default function Index({ allPosts }) {
	const [index, setIndex] = useState(1);
	let mobile;
	useEffect(() => {
		win;
	}, []);
	return (
		<>
			<Layout>
				<Head>
					<title>Gareth Field ... dot com!</title>
				</Head>
				<Grid>
					<MoreLessButton>
						<MoreLessIcon />
						<MoreLessText>{/* Todo: more, less */}</MoreLessText>
					</MoreLessButton>
					<Tabs state={[index, setIndex]}>
						<Sidebar>
							<Header1 />
							<Nav>
								<TabLinks />
								<PageLinks />
								<Socials />
							</Nav>
						</Sidebar>
						<Header2 />
						<Header3 />
						<MainWrap>
							<Panel>
								<Running />
							</Panel>
							<Panel>
								<Coding data={data} />
							</Panel>
							<Panel>
								<Coffee />
							</Panel>
							<Panel>
								<Dog />
							</Panel>
						</MainWrap>
						<HeroPost heroPost={allPosts[0]} />
						{morePosts.length > 0 && <MorePosts posts={allPosts.slice(1)} />}
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
