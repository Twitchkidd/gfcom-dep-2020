import { forwardRef, useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
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
	lightest,
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
	darkerBlue,
	darkerPink,
	blue,
	pink,
	storageAvailable,
} from '../utils';
import { scale } from '../Typography';
import { getAllPosts } from '../lib';
import { metadata } from '../siteMetadata';

const { siteTitle, blurb } = metadata;

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#__next');

const SocialsModalCloseButton = styled.button`
	border: 1px solid ${darkerPink};
	border-radius: 1rem;
	padding: 0.5rem;
`;

const SocialsModalLink = styled.a`
	color: ${blue};
`;

const SocialsModalIcon = styled.img`
	width: 40px;
	height: 40px;
	padding: 8px;
`;

const SocialsModalLinkName = styled.p`
	margin-top: 4px;
	color: ${lightest};
`;

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
	position: relative;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: minmax(20%, 10rem) 1fr;
	${above.small`
		grid-template-columns: minmax(18rem, 40%) 1fr;
		grid-template-rows: minmax(8rem, 20%) 1fr;
	`}
`;

const Title = styled.h1`
	color: ${light};
	text-align: center;
`;

const TabsWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const PagesWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: end;
`;

const SocialsWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 88px;
	justify-self: end;
`;

const SocialsLink = styled.a`
	display: inline-block;
	width: 24px;
	height: 24px;
	padding-right: 8px;
	padding-bottom: 8px;
`;

const MoreLessButton = styled.button`
	position: absolute;
	top: 8px;
	left: calc(100vw - 48px);
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	margin-bottom: 0.25rem;
`;

const MoreLessText = styled.span`
	display: inline-block;
`;

const SocialsButton = styled.button`
	width: 88px;
	height: 88px;
`;

const SocialsButtonIcon = styled.img`
	width: 100%;
	height: 100%;
`;

const SocialsIcon = styled.img`
	width: 2rem;
	height: 2rem;
	background: hotPink;
`;

const SocialsLinkName = styled.span`
	font-size: 0.5rem;
`;

const BioImage = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 9999px;
	margin: 0.67em 0;
	margin-right: 0.5rem;
`;

const SideBar = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Header1 = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	place-self: center;
	${above.small`
		max-width: 18rem;
	`}
`;

const Header2 = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	${above.small`
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		padding-left: 2rem;
		padding-right: 2rem;
	`}
`;

const Header3 = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const MainOverlay = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	z-index: 1;
	${above.small`
		grid-column: 2 / 3;
	`}
`;

const MainWrap = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	overflow: scroll;
	padding: 1rem 1rem 1rem 2.5rem;
	z-index: 2;
	${above.small`
		grid-column: 2 / 3;
	`}
`;

const Nav = styled.nav`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 10rem;
	z-index: 3;
`;

const NavToggleButton = styled.button`
	width: 60px;
	height: 60px;
	background: ${lightPurple};
	justify-self: end;
	z-index: 3;
`;

const NavToggleButtonIcon = styled.img`
	width: 100%;
	height: 100%;
`;

const NavToggleButtonText = styled.p`
	color: ${lightest};
`;

const NavIndicator = styled.div`
	padding: 2rem;
	z-index: 3;
`;

const NavIndicatorText = styled.p`
	color: ${pink};
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
		<QuoteAttribution>
			<cite>{attribution}</cite>
		</QuoteAttribution>
	</QotDWrap>
);

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

const Tab = forwardRef((props, ref) => {
	const { onClick } = useTabState();
	return (
		<Button ref={ref} onClick={onClick} type={props.type}>
			<ButtonContentsWrapper type={props.type}>
				{props.children}
			</ButtonContentsWrapper>
		</Button>
	);
});

export default function Index({ allPosts }) {
	const [initialState, setInitialState] = useState({
		mobile: null,
		quote: {
			quote: '',
			attribution: '',
		},
	});
	const [index, setIndex] = useState(1);
	const [moreLess, setMoreLess] = useState({ fileName: 'less', text: 'Less' });
	const [socialsModalOpen, setSocialsModalOpen] = useState(false);
	const codingRef = useRef();
	const getInitialHeaderCount = () => {
		// check if there's localstorage ... when did we just do this? polar pairs?
	};
	const openSocialsModal = () => {
		setSocialsModalOpen(true);
	};
	// const afterSocialsModalOpen = () => {
	// 	subtitle.style.color = '#060';
	// };
	const closeSocialsModal = () => {
		setSocialsModalOpen(false);
	};
	const handleLess = () => {
		if (initialState.mobile) {
		} else {
			setMoreLess({ fileName: 'more', text: 'More' });
		}
	};
	const handleDelightButton = () => {
		window.alert('Hi!');
	};
	useEffect(() => {
		if (initialState.mobile !== null) {
			codingRef.current.focus();
		}
	}, [initialState.mobile]);
	const isMobileRef = useRef();
	useEffect(() => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		if (typeof window !== `undefined`) {
			console.log('window defined');
			isMobileRef.current = window.innerWidth <= 640;
			if (storageAvailable('localStorage')) {
				console.log('localStorage defined');
				// If we have localStorage:
				const storedHeaderState = JSON.parse(
					localStorage.getItem('headerState')
				);
				// capture storedHeaderState if it's there
				if (
					storedHeaderState &&
					typeof storedHeaderState.mobile === `boolean` &&
					typeof storedHeaderState.headerCount === `number` &&
					storedHeaderState.headerCount >= 0 &&
					storedHeaderState.headerCount <= 3
				) {
					console.log('generally valid');
					// if there's storedHeaderState and the general shape is valid
					if (!storedHeaderState.mobile) {
						console.log('was on desktop');
						// and it was on desktop
						if (isMobileRef.current) {
							console.log('actually on mobile');
							// but if we're actually on mobile
							localStorage.setItem(
								'headerState',
								JSON.stringify({
									mobile: true,
									headerCount: 3,
								})
							);
							// set the default for mobile in localStorage
							setInitialState({
								mobile: true,
								headerCount: 3,
								quote: {
									quote: randomQuote.quote,
									attribution: randomQuote.attribution,
								},
							});
							// and in state
						} else {
							console.log('are on desktop');
							// but if *are* on desktop
							if (storedHeaderState.headerCount <= 2) {
								console.log('desktop valid');
								// and the count is still valid
								setInitialState({
									mobile: false,
									headerCount: storedHeaderState.headerCount,
									quote: {
										quote: randomQuote.quote,
										attribution: randomQuote.attribution,
									},
								});
								// set state to prior state
							} else {
								console.log('desktop invalid');
								// but if the stored count is not valid
								localStorage.setItem(
									'headerState',
									JSON.stringify({
										mobile: false,
										headerCount: 2,
									})
								);
								// set the default for desktop in localStorage
								setInitialState({
									mobile: false,
									headerCount: 2,
									quote: {
										quote: randomQuote.quote,
										attribution: randomQuote.attribution,
									},
								});
								// and in state
							}
						}
					} else {
						console.log('was on mobile');
						// it was on mobile, so
						if (isMobileRef.current) {
							console.log('are on mobile');
							// if we're on mobile
							setInitialState({
								mobile: true,
								headerCount: storedHeaderState.headerCount,
								quote: {
									quote: randomQuote.quote,
									attribution: randomQuote.attribution,
								},
							});
							// set prior state
						} else {
							console.log('are on desktop');
							// but if we're actually on desktop
							localStorage.setItem(
								'headerState',
								JSON.stringify({
									mobile: false,
									headerCount: 2,
								})
							);
							// set the default for desktop in localStorage
							setInitialState({
								mobile: false,
								headerCount: 2,
								quote: {
									quote: randomQuote.quote,
									attribution: randomQuote.attribution,
								},
							});
							// and in state
						}
					}
				} else {
					console.log('generally invalid');
					// but if the stored state wasn't generally valid
					if (isMobileRef.current) {
						console.log('are on mobile');
						// and we're on moblie
						localStorage.setItem(
							'headerState',
							JSON.stringify({
								mobile: true,
								headerCount: 3,
							})
						);
						// set the default for mobile in localStorage
						setInitialState({
							mobile: true,
							headerCount: 3,
							quote: {
								quote: randomQuote.quote,
								attribution: randomQuote.attribution,
							},
						});
						// and in state
					} else {
						console.log('are on desktop');
						// or if we're on desktop
						localStorage.setItem(
							'headerState',
							JSON.stringify({
								mobile: false,
								headerCount: 2,
							})
						);
						// set the default for desktop in localStorage
						setInitialState({
							mobile: false,
							headerCount: 2,
							quote: {
								quote: randomQuote.quote,
								attribution: randomQuote.attribution,
							},
						});
						// and in state
					}
				}
			} else {
				// but if there's no localStorage
				console.log('no localStorage');
				if (isMobileRef.current) {
					setInitialState({
						mobile: true,
						headerCount: 3,
						quote: {
							quote: randomQuote.quote,
							attribution: randomQuote.attribution,
						},
					});
				} else {
					setInitialState({
						mobile: false,
						headerCount: 2,
						quote: {
							quote: randomQuote.quote,
							attribution: randomQuote.attribution,
						},
					});
				}
				// set state based on mobile or not
			}
		} // otherwise we're in Node
	}, []);
	if (initialState.mobile === null) {
		return <>Loading ...</>;
	} else {
		return (
			<Layout home>
				<Head>
					<title>{siteTitle}</title>
				</Head>
				<AppWrap>
					<Tabs state={[index, setIndex]}>
						<MoreLessButton>
							<MoreLessIcon
								src={require(`../public/${moreLess.fileName}.svg`)}
							/>
							<MoreLessText>{moreLess.text}</MoreLessText>
						</MoreLessButton>
						{initialState.mobile === true ? (
							/* * Mobile Mode! * */
							<>
								<Modal
									isOpen={socialsModalOpen}
									// onAfterOpen={afterSocialsModalOpen}
									onRequestClose={closeSocialsModal}
									style={customStyles}
									contentLabel='Social Links Modal'>
									{socials.map(social => {
										if (social.name === 'App Store') {
											return (
												<Link href='/run-club' key={social.name}>
													<a>
														<SocialsModalIcon
															src={require(`../public/${social.fileName}.svg`)}
														/>
														<SocialsModalLinkName>
															{social.name}
														</SocialsModalLinkName>
													</a>
												</Link>
											);
										}
										if (social.name === 'RSS Feed') {
											return (
												<Link href='/rss' key={social.name}>
													<a>
														<SocialsModalIcon
															src={require(`../public/${social.fileName}.svg`)}
														/>
														<SocialsModalLinkName>
															{social.name}
														</SocialsModalLinkName>
													</a>
												</Link>
											);
										}
										return (
											<SocialsModalLink href={social.url} key={social.name}>
												<SocialsModalIcon
													src={require(`../public/${social.fileName}.svg`)}
												/>
												<SocialsModalLinkName>
													{social.name}
												</SocialsModalLinkName>
											</SocialsModalLink>
										);
									})}
									<SocialsModalCloseButton onClick={closeSocialsModal}>
										Close
									</SocialsModalCloseButton>
								</Modal>
								<Header1>
									<BioImage
										src={require('../public/profile-pic.jpg')}
										alt={'Gareth Field'}
									/>
									<Title>{siteTitle}</Title>
									<MoreLessShadowElement />
								</Header1>
								<MainOverlay>
									<Nav>
										<TabsWrap>
											<Tab type='running'>
												<IconSVG
													src={require('../public/running.svg')}
													alt=''
													id='running'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Running
												</ButtonText>
											</Tab>
											<Tab type='coding' ref={codingRef}>
												<IconSVG
													src={require('../public/coding.svg')}
													alt=''
													id='coding'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Coding
												</ButtonText>
											</Tab>
											<Tab type='coffee'>
												<IconSVG
													src={require('../public/coffee.svg')}
													alt=''
													id='coffee'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Coffee
												</ButtonText>
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
												<Link href={page.url} key={page.name}>
													<a>{page.name}</a>
												</Link>
											))}
										</PagesWrap>
										<SocialsButton onClick={openSocialsModal}>
											<SocialsButtonIcon
												src={require('../public/socialsIcon.png')}
											/>
										</SocialsButton>
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
											<DelightButtonIcon
												src={require('../public/delightButton.svg')}
											/>
											<DelightButtonText>Delight Button</DelightButtonText>
										</DelightButton>
										<MoreLessShadowElement />
									</Header3>
									<NavIndicator>
										<NavIndicatorText>{tabs[index]}</NavIndicatorText>
									</NavIndicator>
									<NavToggleButton>
										<NavToggleButtonIcon />
										<NavToggleButtonText>+</NavToggleButtonText>
									</NavToggleButton>
								</MainOverlay>
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
							</>
						) : (
							/* * Desktop Mode! */
							<>
								<Header1>
									<BioImage
										src={require('../public/profile-pic.jpg')}
										alt={'Gareth Field'}
									/>
									<Title>{siteTitle}</Title>
								</Header1>
								<SideBar>
									<Nav>
										<TabsWrap>
											<Tab type='running'>
												<IconSVG
													src={require('../public/running.svg')}
													alt=''
													id='running'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Running
												</ButtonText>
											</Tab>
											<Tab type='coding' ref={codingRef}>
												<IconSVG
													src={require('../public/coding.svg')}
													alt=''
													id='coding'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Coding
												</ButtonText>
											</Tab>
											<Tab type='coffee'>
												<IconSVG
													src={require('../public/coffee.svg')}
													alt=''
													id='coffee'
												/>
												<ButtonText style={{ ...scale(3 / 4) }}>
													Coffee
												</ButtonText>
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
												<Link href={page.url} key={page.name}>
													<a>{page.name}</a>
												</Link>
											))}
										</PagesWrap>
										<SocialsWrap>
											{socials.map(social => {
												if (social.name === 'App Store') {
													return (
														<SocialsLink href='/run-club' key={social.name}>
															<a>
																<SocialsIcon
																	src={require(`../public/${social.fileName}.svg`)}
																/>
																<SocialsLinkName>{social.name}</SocialsLinkName>
															</a>
														</SocialsLink>
													);
												}
												if (social.name === 'RSS Feed') {
													return (
														<SocialsLink href='/rss' key={social.name}>
															<a>
																<SocialsIcon
																	src={require(`../public/${social.fileName}.svg`)}
																/>
																<SocialsLinkName>{social.name}</SocialsLinkName>
															</a>
														</SocialsLink>
													);
												}
												return (
													<SocialsLink href={social.url} key={social.name}>
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
									<Blurb>{blurb} Enjoy the blog and everything!</Blurb>
									<MoreLessShadowElement />
								</Header2>
								<MainOverlay>
									<Header3>
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
									</Header3>
								</MainOverlay>
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
							</>
						)}
					</Tabs>
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
		'slug',
	]);

	return {
		props: { allPosts },
	};
}
