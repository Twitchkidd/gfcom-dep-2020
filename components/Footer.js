import styled from 'styled-components';
import Link from 'next/link';
import Bio from './Bio';
import { below } from '../utils';

const FooterRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${props => (props.spread ? 'space-around' : 'center')};
	width: 42rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 1rem;
	${below.med`
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `}
`;

const SocialLink = styled.a`
	background-image: none;
`;

const Social = styled.img`
	width: 30px;
	height: 30px;
	margin-bottom: 0;
`;

const StyledFooter = styled.footer`
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 3rem;
	${below.small`
		margin-bottom: 2rem;
	`}
	min-height: 14rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Footer = () => (
	<StyledFooter>
		<FooterRow>
			<Bio />
		</FooterRow>
		<FooterRow spread>
			<SocialLink href='https://github.com/Twitchkidd' title="Gareth's GitHub!">
				<Social src={require('../public/github.svg')} />
			</SocialLink>
			<SocialLink
				href='https://twitter.com/barefootgareth'
				title="Gareth's Twitter!">
				<Social src={require('../public/twitter.svg')} />
			</SocialLink>
			<SocialLink
				href='https://www.linkedin.com/in/gareth-field-7b1514134/'
				title="Gareth's LinkedIn">
				<Social src={require('../public/linkedin.svg')} />
			</SocialLink>
			<SocialLink
				href='https://www.strava.com/athletes/1704712'
				title="Gareth's Strava!">
				<Social src={require('../public/strava.svg')} />
			</SocialLink>
			<SocialLink href='mailto: field.gareth@gmail.com' title='E-mail Gareth!'>
				<Social src={require('../public/gmail.svg')} />
			</SocialLink>
		</FooterRow>
		<FooterRow>
			<Link href='/'>
				<a>← Back home</a>
			</Link>
		</FooterRow>
		<FooterRow>
			{`© ${new Date().getFullYear()}, Built with`}
			<div style={{ width: '0.25rem' }} />
			<a href='https://www.nextjs.org'>Next.js</a>
		</FooterRow>
	</StyledFooter>
);

export default Footer;
