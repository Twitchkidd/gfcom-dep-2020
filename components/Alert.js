import styled from 'styled-components';
import { Container } from './';

const AlertWrap = styled.div`
	border-bottom-width: 1px;
	${props =>
		props.preview
			? `
    background-color: #333;
    border-color: #333;
    color: white;
  `
			: `
    background-color: #FAFAFA;
    border-color: #EAEAEA;
  `}
`;

const ConditionalWrap = styled.div`
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	text-align: center;
	font-size: 0.875rem;
`;

const AlertLink = styled.a`
	text-decoration: underline;
	transition-property: background-color, border-color, color, fill, stroke;
	transition-duration: 200ms;
	&:hover {
		${props =>
			props.exit
				? `
      color: #79ffe1;
    `
				: `
      color: #0070F3;
    `}
	}
`;

const Alert = ({ preview }) => (
	<AlertWrap>
		<Container>
			<ConditionalWrap>
				{preview ? (
					<>
						This is page is a preview.{' '}
						<AlertLink href='/api/exit-preview' exit>
							Click here
						</AlertLink>{' '}
						to exit preview mode.
					</>
				) : (
					<>
						The source code for this blog is{' '}
						<AlertLink href='https://github.com/zeit/next.js/tree/canary/examples/blog-starter'>
							available on GitHub
						</AlertLink>
						.
					</>
				)}
			</ConditionalWrap>
		</Container>
	</AlertWrap>
);

export default Alert;
