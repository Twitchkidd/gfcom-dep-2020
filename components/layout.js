import Head from 'next/head';
import { Container } from '../components';
import Header from './Header';
import Footer from './Footer';
import { metadata } from '../siteMetadata';

const { siteDescription, siteTitle } = metadata;

export const Layout = ({ children, home }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content={siteDescription} />
				{/* <meta
					property='og:image'
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.jpg?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/> */}
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			{home ? (
				<>{children}</>
			) : (
				<Container>
					<Header />
					<main>{children}</main>
					<Footer />
				</Container>
			)}
		</>
	);
};

// can we do just {children}?

// const Header = styled.header`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	margin-bottom: 15px;
// 	text-align: center;
// `;

// const HeaderImage = styled.img`
// 	width: 6rem;
// 	height: 6rem;
// 	border-radius: 9999px;
// `;

// const HeaderTitle = styled.h1`
// 	font-size: 2.5rem;
// 	line-height: 1.2;
// 	font-weight: 800;
// 	letter-spacing: -0.05rem;
// 	margin: 1rem 0;
// `;
