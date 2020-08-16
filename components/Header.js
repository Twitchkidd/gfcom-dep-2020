import Link from 'next/link';
import styled from 'styled-components';
import { above } from '../utils';

const HeaderH2 = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	line-height: 1.25;
	margin-bottom: calc(20rem / 4);
	margin-top: calc(8rem / 4);
	${above.med`
    font-size: 2.25rem;
    letter-spacing: -0.04em;
  `}
`;

const A = styled.a`
	&:hover {
		text-decoration: underline;
	}
`;

export const Header = () => (
	<HeaderH2>
		<Link href='/'>
			<A>Blog</A>
		</Link>
		.
	</HeaderH2>
);
