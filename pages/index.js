import { useState, useEffect, useRef } from 'react';
import { Tabs, usePanelState, useTabState } from '@bumaga/tabs';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Running, Coding, Coffee, Dog } from '../components';
import {
	above,
	socials,
	quotes,
	white,
	light,
	veryLight,
	pinkFilter,
	purpleFilter,
	blueFilter,
	lighterPink,
	lighterPurple,
	lighterBlue,
	lightPink,
	lightPurple,
	lightBlue,
	darkerBlue
} from '../utils';
import { scale } from '../Typography';
import { getAllPosts } from '../lib';
import { metadata } from '../siteMetadata';

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

const AppWrap = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: minmax(20%, 10rem) minmax(80%, 1fr);
	grid-template-columns: 100%;
	${above.small`
		grid-template-rows: minmax(10rem, 20%) 1fr;
		grid-template-columns: manmax(20%, 40%) minmax(60%, 1fr);
	`}
`;

const Title = styled.h1`
	color: blue;
`;

const TabsWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const PagesWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const SocialsWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const SocialsLink = styled.a`
	display: inline-block;
	width: 24px;
	height: 24px;
`;

const MoreLessButton = styled.button`
	position: absolute;
	width: 40px;
	height: 40px;
`;

const MoreLessShadowElement = styled.div`
	width: 40px;
	height: 40px;
	background: ${veryLight};
`;

const MoreLessIcon = styled.img`
	width: 2rem;
	height: 2rem;
	background: hotPink;
`;

const SocialsIcon = styled.img`
	width: 2rem;
	height: 2rem;
	background: hotPink;
`;

const SocialsLinkName = styled.span`
	font-size: 0.5rem;
`;

const MoreLessText = styled.span`
	display: inline-block;
`;

const BioImage = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 9999px;
	margin-right: 1rem;
`;

const SideBar = styled.div``;

const Header1 = styled.header``;
const Header2 = styled.header``;
const Header3 = styled.header``;

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

const NavIndicator = styled.div`
	position: absolute;
	text-align: center;
`;

const NavIndicatorText = styled.p`
	color: red;
`;

const Blurb = styled.p`
	font-size: 1.125rem;
`;

const QotDWrap = styled.blockquote`
	max-width: 40rem;
	text-align: left;
`;

const QuoteText = styled.p`
	color: ${darkerBlue};
	font-size: 1.125rem;
`;

const QuoteAttribution = styled.footer`
	color: ${light};
	font-size: 1rem;
`;

const QotD = ({ quote, attribution }) => (
	<QotDWrap>
		<QuoteText>{quote}</QuoteText>
		<QuoteAttribution><cite>{attribution}</cite></QuoteAttribution>
	</QotDWrap>
)

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

const DelightButton = styled.button`
	min-width: 40px;
	height: 60px;
	background: ${lightPink};
	display: flex;
	flex-direction: column;
`;

const DelightButtonIcon = styled.img`
	width: 40px;
	height: 40px;
	background: ${lightPurple};
`;

const DelightButtonText = styled.p`
	color: ${lightBlue};
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
	const handleSocialsButton = () => {
		setSocialsModalOpen(!socialModalOpen);
	};
	const handleDelightButton = () => {
		window.alert('Hi!');
	};
	useEffect(() => {
		if (initialState.mobile !== null) {
			codingRef.current.focus();
		}
	}, [initialState.mobile]);
	useEffect(() => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		if (typeof window !== 'undefined') {
			if (initialState.mobile === null) {
				if (window.innerWidth <= 640) {
					setInitialState({
						mobile: true,
						quote: {
							quote: randomQuote.quote,
							attribution: randomQuote.attribution,
						},
					});
				} else {
					setInitialState({
						mobile: false,
						quote: {
							quote: randomQuote.quote,
							attribution: randomQuote.attribution,
						},
					});
				}
			}
		}
	}, []);
	if (initialState.mobile === null) {
		return <>Loading ...</>;
	} else if (initialState.mobile === false) {
		return (
			<Layout>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<AppWrap>
					<MoreLessButton>
						<MoreLessIcon />
						<MoreLessText>{moreLess}</MoreLessText>
					</MoreLessButton>
					<Tabs state={[index, setIndex]}>
						<SideBar>
							<Header1>
								<BioImage
									src={require('../public/profile-pic.jpg')}
									alt={'Gareth Field'}
								/>
								<Title>{siteTitle}</Title>
							</Header1>
							<Nav>
								<TabsWrap>
									<Tab type='running'>
										<IconSVG
											src={require('../public/running.svg')}
											alt=''
											id='running'
										/>
										<ButtonText style={{ ...scale(3 / 4) }}>Running</ButtonText>
									</Tab>
									<Tab type='coding' ref={codingRef}>
										<IconSVG
											src={require('../public/coding.svg')}
											alt=''
											id='coding'
										/>
										<ButtonText style={{ ...scale(3 / 4) }}>Coding</ButtonText>
									</Tab>
									<Tab type='coffee'>
										<IconSVG
											src={require('../public/coffee.svg')}
											alt=''
											id='coffee'
										/>
										<ButtonText style={{ ...scale(3 / 4) }}>Coffee</ButtonText>
									</Tab>
									<Tab type='dog'>
										<IconSVG
											src={require('../public/dog.svg')}
											alt=''
											id='dog'
										/>
										<ButtonText style={{ ...scale(3 / 4) }}>Dog</ButtonText>
									</Tab>
								</TabsWrap>
								<PagesWrap>
									{pages.map(page => (
										<Link href={page.url}>{page.name}</Link>
									))}
								</PagesWrap>
								<SocialsWrap>
									{socials.map(social => {
										if (social.name === 'App Store') {
											return (
												<Link href='/run-club'>
													<a><SocialsIcon
														src={require(`../public/${social.fileName}.svg`)}
													/>
													<SocialsLinkName>{social.name}</SocialsLinkName></a>
												</Link>
											);
										}
										if (social.name === 'RSS Feed') {
											return (
												<Link href='/rss'>
													<a>
													<SocialsIcon
														src={require(`../public/${social.fileName}.svg`)}
													/>
													<SocialsLinkName>{social.name}</SocialsLinkName></a>
												</Link>
											);
										}
										return (
											<SocialsLink href={social.url}>
												<SocialsIcon
													src={require(`../public/${social.fileName}.svg`)}
												/>
												<SocialsLinkName>{social.name}</SocialsLinkName>
											</SocialsLink>
										);
									})}
								</SocialsWrap>
							</Nav>
						</SideBar>
						<Header2>
							<Blurb>{blurb}</Blurb>
							<QotD
								quote={initialState.quote.quote}
								attribution={initialState.quote.attribution}
							/>
							<DelightButton onClick={handleDelightButton}>
								<DelightButtonIcon
									src={require('../public/delightButton.svg')}
								/>
								<DelightButtonText>Delight Button</DelightButtonText>
							</DelightButton>
							<MoreLessShadowElement />
						</Header2>
						<MainWrap>
							<NavIndicator>
								<NavIndicatorText>{tabs[index]}</NavIndicatorText>
							</NavIndicator>
							<Panel>
								<Running />
							</Panel>
							<Panel>
								<Coding allPosts={allPosts} />
							</Panel>
							<Panel>
								<Coffee />
							</Panel>
							<Panel>
								<Dog />
							</Panel>
						</MainWrap>
					</Tabs>
				</AppWrap>
			</Layout>
		);
	} else {
		return (
			<Layout>
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
									<SocialsModalIcon
										src={require(`../public/${social.fileName}.svg`)}
									/>
									<SocialsModalLinkName>{social.name}</SocialsModalLinkName>
								</SocialsModalLink>
							);
						})}
					</SocialsModal>
					<Header1>
						<BioImage
							src={require('../public/profile-pic.jpg')}
							alt={'Gareth Field'}
						/>
						<Title>{siteTitle}</Title>
						<MoreLessShadowElement />
					</Header1>
					<Nav>
						<TabsWrap>
							<Tab type='running'>
								<IconSVG
									src={require('../public/running.svg')}
									alt=''
									id='running'
								/>
								<ButtonText style={{ ...scale(3 / 4) }}>Running</ButtonText>
							</Tab>
							<Tab type='coding' ref={codingRef}>
								<IconSVG
									src={require('../public/coding.svg')}
									alt=''
									id='coding'
								/>
								<ButtonText style={{ ...scale(3 / 4) }}>Coding</ButtonText>
							</Tab>
							<Tab type='coffee'>
								<IconSVG
									src={require('../public/coffee.svg')}
									alt=''
									id='coffee'
								/>
								<ButtonText style={{ ...scale(3 / 4) }}>Coffee</ButtonText>
							</Tab>
							<Tab type='dog'>
								<IconSVG src={require('../public/dog.svg')} alt='' id='dog' />
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
						<QotD
							quote={initialState.quote.quote}
							attribution={initialState.quote.attribution}
						/>
						<DelightButton onClick={handleDelightButton}>
							<DelightButtonIcon src={require('../public/delightButton.svg')} />
							<DelightButtonText>Delight Button</DelightButtonText>
						</DelightButton>
						<MoreLessShadowElement />
					</Header3>
					<NavIndicator>
						<NavIndicatorText>{tabs[index]}</NavIndicatorText>
					</NavIndicator>
					<MainWrap>
						<Panel>
							<Running />
						</Panel>
						<Panel>
							<Coding allPosts={allPosts} />
						</Panel>
						<Panel>
							<Coffee />
						</Panel>
						<Panel>
							<Dog />
						</Panel>
					</MainWrap>
				</AppWrap>
			</Layout>
		);
	}
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'author',
		'coverImage',
		'excerpt',
	]);

	return {
		props: { allPosts },
	};
}
