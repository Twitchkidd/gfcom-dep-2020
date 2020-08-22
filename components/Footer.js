import styled from 'styled-components';
import { almostWhite } from '../utils';

const FooterRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${props => (props.spread ? 'space-around' : 'center')};
`;

const Social = styled.img`
	width: 30px;
	height: 30px;
`;

const StyledFooter = styled.footer`
	background-color: ${almostWhite};
`;

const Footer = () => (
	<StyledFooter>
		<FooterRow>
			<Bio />
		</FooterRow>
		<FooterRow>
			<Social src={require('../public/github.svg')} />
			<Social src={require('../public/twitter.svg')} />
			<Social src={require('../public/linkedin.svg')} />
			<Social src={require('../public/strava.svg')} />
			<Social src={require('../public/gmail.svg')} />
		</FooterRow>
		<FooterRow>
			<Link href='/'>
				<a>← Back to home</a>
			</Link>
		</FooterRow>
		<FooterRow>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href='https://www.nextjs.org'>Next.js</a>
		</FooterRow>
	</StyledFooter>
);

export default Footer;
