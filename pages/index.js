import { useState, useEffect, useRef } from 'react';
import { Tabs, usePanelState } from '@bumaga/tabs';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import {
	MorePosts,
	HeroPost,
	Layout,
	TabLinks,
	Running,
	Coding,
	Coffee,
	Dog,
} from '../components';
import { above, socials, quotes } from '../utils';
import { scale } from '../Typography';
import { getAllPosts, randomQuote } from '../lib';
import { metadata } from '../../siteMetadata';

const { siteTitle, blurb } = metadata;

const tabs = ['Running', 'Coding', 'Coffee', 'Dog'];

const pages = [
	{
		name: 'Virtual Garage Sale',
		url: '/virtual-garage-sale',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: 'Credits',
		url: '/credits',
	},
];

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

const MainWrap = styled.div`
	height: 100%;
	flex: 1;
	overflow: scroll;
	padding: 1rem 1rem 1rem 2.5rem;
`;

const Nav = styled.nav`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 10rem;
`;

const Tab = React.forwardRef((props, ref) => {
	const { onClick } = useTabState();
	return (
		<Button ref={ref} onClick={onClick} type={props.type}>
			<ButtonContentsWrapper type={props.type}>
				{props.children}
			</ButtonContentsWrapper>
		</Button>
	);
});

const Button = styled.button`
	display: block;
	position: relative;
	flex: 1;
	text-decoration: none;
	border: none;
	outline: none;
	padding: 0;
	background: ${white};
	cursor: pointer;
	text-align: center;
	transition: background 250ms ease-in-out, transform 150ms ease;
	-webkit-appearance: none;
	-moz-appearance: none;
	&:hover {
		${({ type }) =>
			type === 'running'
				? `background: ${lighterPurple};`
				: type === 'coding'
				? `background: ${lighterBlue};`
				: type === 'coffee'
				? `background: ${lighterPink};`
				: type === 'dog'
				? `background: ${lighterPurple};`
				: null}
		& span {
			color: ${white} !important;
		}
	}
	&:focus {
		${({ type }) =>
			type === 'running'
				? `background: ${lightPurple};`
				: type === 'coding'
				? `background: ${lightBlue};`
				: type === 'coffee'
				? `background: ${lightPink};`
				: type === 'dog'
				? `background: ${lightPurple};`
				: null}
		& span {
			color: ${white} !important;
		}
		& img {
			filter: invert(100%) sepia(51%) saturate(5%) hue-rotate(270deg)
				brightness(112%) contrast(87%) !important;
		}
	}
	&:active {
		transform: scale(0.95);
	}
`;

const IconSVG = styled.img`
	display: inline-block;
	height: 2rem;
	width: 2rem;
	margin-bottom: 0;
	&#running {
		${pinkFilter}
	}
	&#coding {
		${purpleFilter}
	}
	&#coffee {
		${blueFilter}
	}
	&#dog {
		${pinkFilter}
	}
`;

const ButtonText = styled.span`
	display: inline-block;
`;

const ButtonContentsWrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${({ type }) =>
		type === 'running'
			? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightPink};
  }`
			: type === 'coding'
			? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightPurple};
  }`
			: type === 'coffee'
			? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightBlue};
  }`
			: null}
`;

const Panel = ({ children }) => {
	const isActive = usePanelState();
	return isActive ? children : null;
};

export default function Index({ allPosts }) {
	const [initialState, setInitialState] = useState({
		mobile: null,
		quote: {
			quote: '',
			attribution: '',
		},
	});
	const [index, setIndex] = useState(1);
	const [moreLess, setMoreLess] = useState('More');
	const [socialsModalOpen, setSocialsModalOpen] = useState(false);
	const codingRef = useRef();
	useEffect(() => {
		const quote = randomQuote(quotes);
		if (!typeof window === 'undefined') {
			if (window.innerWidth <= 640) {
				setInitialState({
					mobile: true,
					quote: { quote: quote.quote, attribution: quote.attribution },
				});
			} else {
				setInitialState({
					mobile: false,
					quote: { quote: quote.quote, attribution: quote.attribution },
				});
			}
		}
	}, []);
	useEffect(() => {
		codingRef.current.focus();
	}, [initialState.mobile]);
	// This needs to return a fragment until (initialState.!) mobile isn't null, then either one layout or the other
	return (
		<>
			<Layout>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<Grid>
					<MoreLessButton>
						<MoreLessIcon />
						<MoreLessText>{moreLess}</MoreLessText>
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

// * The above was a magical moment, please don't delete for a bit, thx;

// * Back to biz.

// >> Mobile

<AppWrap>
	<MoreLessButton>
		<MoreLessIcon />
		<MoreLessText>{moreLess}</MoreLessText>
	</MoreLessButton>
	<SocialsModal>
		{socials.map(social => {
			if (social.name === 'App Store') {
				return (
					<Link href='/run-club'>
						<SocialsModalIcon
							src={require(`../public/${social.fileName}.svg`)}
						/>
						<SocialsModalLinkName>{social.name}</SocialsModalLinkName>
					</Link>
				);
			}
			if (social.name === 'RSS Feed') {
				return (
					<Link href='/rss'>
						<SocialsModalIcon
							src={require(`../public/${social.fileName}.svg`)}
						/>
						<SocialsModalLinkName>{social.name}</SocialsModalLinkName>
					</Link>
				);
			}
			return (
				<SocialsModalLink href={social.url}>
					<SocialsModalIcon src={require(`../public/${social.fileName}.svg`)} />
					<SocialsModalLinkName>{social.name}</SocialsModalLinkName>
				</SocialsModalLink>
			);
		})}
	</SocialsModal>
	<Header1>
		<BioImage src={require('../public/profile-pic.jpg')} alt={'Gareth Field'} />
		<Title>{siteTitle}</Title>
		<MoreLessShadowElement />
	</Header1>
	<Nav>
		<TabsWrap>
			<Tab type='running'>
				<IconSVG src={require('../public/running.svg')} alt='' id='running' />
				<ButtonText style={{ ...scale(3 / 4) }}>Running</ButtonText>
			</Tab>
			<Tab type='coding' ref={codingRef}>
				<IconSVG src={require('../public/coding.svg')} alt='' id='coding' />
				<ButtonText style={{ ...scale(3 / 4) }}>Coding</ButtonText>
			</Tab>
			<Tab type='coffee'>
				<IconSVG src={require('../public/coffee.svg')} alt='' id='coffee' />
				<ButtonText style={{ ...scale(3 / 4) }}>Coffee</ButtonText>
			</Tab>
			<Tab type='dog'>
				<IconSVG src={require('../public/dog')} alt='' id='dog' />
				<ButtonText style={{ ...scale(3 / 4) }}>Dog</ButtonText>
			</Tab>
		</TabsWrap>
		<PagesWrap>
			{pages.map(page => (
				<Link href={page.url}>{page.name}</Link>
			))}
		</PagesWrap>
		<SocialsButton onClick={handleSocialsButton}>
			<SocialsButtonIcon src={require('../public/socialsIcon.png')} />
		</SocialsButton>
		<NavToggleButton>
			<NavToggleButtonIcon />
			<NavToggleButtonText>+</NavToggleButtonText>
		</NavToggleButton>
	</Nav>
	<Header2>
		<Blurb>{blurb}</Blurb>
		<MoreLessShadowElement />
	</Header2>
	<Header3>
		<QotD>Thence and whence the well-traveled quail, hi ho!</QotD>
		<DelightButton onClick={handleDelightButton}>
			<DelightButtonIcon src={require('../public/delightButton.svg')} />
			<DelightButtonText>Delight Button</DelightButtonText>
		</DelightButton>
		<MoreLessShadowElement />
	</Header3>
	<NavIndicator>
		<NavIndicatorIcon src={require('../public/navIndicator.svg')} />
		<NavIndicatorText>{tabs[index]}</NavIndicatorText>
	</NavIndicator>
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
</AppWrap>;
