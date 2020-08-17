import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const name = 'Gareth Field';
const siteTitle = 'Gareth Field ... dot com!';
// ... why are we exporting siteTitle from Layout?
// The fragment was styles.container

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
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src='/images/profile.png'
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<></>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</>
	);
};

{
	/* <>
-                                               <Link href='/'>
-                                                       <a>
-                                                               <img
-                                                                       src='/images/profile.png'
-                                                                       className={`${styles.headerImage} ${utilStyles.borderCircle}`}
-                                                                       alt={name}
-                                                               />
-                                                       </a>
-                                               </Link>
-                                               <h2 className={utilStyles.headingLg}>
-                                                       <Link href='/'>
-                                                               <a className={utilStyles.colorInherit}>{name}</a>
-                                                       </Link>
-                                               </h2>
-                                       </> */
}
// utils
/*.heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
}

.headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
}

.borderCircle {
    border-radius: 9999px;
}

.colorInherit {
    color: inherit;
}

.padding1px {
    padding-top: 1px;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.listItem {
    margin: 0 0 1.25rem;
}

.lightText {
    color: #999;
}*/

// layout.module.css
/*
.container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 2rem auto 6rem;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    text-align: center;
}

.headerImage {
    width: 6rem;
    height: 6rem;
}

.headerHomeImage {
    width: 8rem;
    height: 8rem;
}

.backToHome {
    margin: 3rem 0 0;
}

.main {
    text-align: center;
}

.imageTitle {
    width: 150px;
    margin-left: 10px;
}

.title {
    color: inherit;
    display: flex;
}
*/
