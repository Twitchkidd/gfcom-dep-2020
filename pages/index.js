import styled from 'styled-components';

// const Title = styled.h1`
// 	font-size: 50px;
// 	color: ${({ theme }) => theme.colors.primary};
// `;

// export default function Home() {
// 	return <Title>My page</Title>;
// }

import Head from 'next/head';
import { Container, MoreStories, HeroPost, Intro, Layout } from '../components';
import { getAllPosts } from '../lib';

export default function Index({ allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout>
				<Head>
					<title>Next.js Blog Example with Markdown</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
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
