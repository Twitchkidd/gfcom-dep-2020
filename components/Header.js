import Link from 'next/link';
import styled from 'styled-components';
import { above, lightPurple } from '../utils';
import { metadata } from '../siteMetadata';

const { siteTitle } = metadata;

const HeaderH2 = styled.h3`
	font-size: 1.5rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	line-height: 1.25;
	margin-bottom: 4rem;
	margin-top: 2rem;
	${above.med`
    font-size: 2.25rem;
    letter-spacing: -0.04em;
  `}
`;

const A = styled.a`
	&:hover {
		text-decoration: underline;
	}
	color: ${lightPurple};
	background-image: none;
`;

const Header = () => (
	<HeaderH2>
		<Link href='/'>
			<A>{siteTitle}</A>
		</Link>
	</HeaderH2>
);

export default Header;
