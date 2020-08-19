import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const name = 'Gareth Field';
const siteTitle = 'Gareth Field ... dot com!';

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
	text-align: center;
`;

const HeaderImage = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 9999px;
`;

const HeaderTitle = styled.h1`
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 800;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`;

const BackHomeWrap = styled.div`
	margin: 3rem 0 0;
`;

export const Layout = ({ children, home }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.jpg?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header>
				{home ? (
					<>
						<HeaderImage src='/images/profile.png' alt={name} />
						<HeaderTitle>{name}</HeaderTitle>
					</>
				) : (
					<></>
				)}
			</Header>
			<main>{children}</main>
			{!home && (
				<BackHomeWrap>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</BackHomeWrap>
			)}
		</>
	);
};