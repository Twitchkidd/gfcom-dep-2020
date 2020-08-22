import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
	Container,
	Layout,
	PostBody,
	PostHeader,
	PostTitle,
} from '../../components';
import { metadata } from '../../siteMetadata';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib';

const Article = styled.article`
	margin-bottom: 8rem;
`;

const { siteTitle } = metadata;

export default function Post({ post, morePosts }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout>
			{/* <Container> */}
			{router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : (
				<>
					<Article>
						<Head>
							<title>
								{post.title} | {siteTitle}
							</title>
							{/* <meta property='og:image' content={post.ogImage.url} /> */}
						</Head>
						<PostHeader
							title={post.title}
							coverImage={
								post.coverImage
									? require(`../../public/${post.coverImage}`)
									: require('../../public/fortTrumbull.jpg')
							}
							date={post.date}
							description={post.description}
						/>
						<PostBody content={post.content} />
					</Article>
				</>
			)}
			{/* </Container> */}
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'description',
		'date',
		'slug',
		'content',
		'ogImage',
		'coverImage',
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
