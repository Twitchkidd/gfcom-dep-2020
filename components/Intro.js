import styled from 'styled-components';
import { above } from '../utils';

const IntroSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 4rem;
	margin-bottom: 4rem;
	${above.med`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  `}
`;

const IntroH1 = styled.h1`
	font-size: 2.75rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	line-height: 1.2;
	${above.med`
    font-size: 6.25rem;
    padding-right: 2rem;
  `}
`;

const IntroH4 = styled.h4`
	text-align: center;
	font-size: 1.125rem;
	margin-top: calc(5rem / 4);
	${above.med`
    text-align: left;
    padding-left: 2rem;
  `}
`;

const IntroLink = styled.a`
	text-decoration: underline;
	transition-property: background-color, border-color, color, fill, stroke;
	transition-duration: 200ms;
	&:hover {
		color: #0070f3;
	}
`;

export const Intro = () => (
	<IntroSection>
		<IntroH1>Blog.</IntroH1>
		<IntroH4>
			A statically generated blog example using{' '}
			<IntroLink href='https://nextjs.org/'>Next.js</IntroLink> and Markdown.
		</IntroH4>
	</IntroSection>
);
