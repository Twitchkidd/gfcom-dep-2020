import styled from 'styled-components';
import { above } from '../utils';

export const PostTitle = styled.h1`
	font-size: 2.75rem;
	font-weight: 700;
	letter-spacing: -0.04em;
	line-height: 1.2;
	margin-bottom: 3rem;
	${above.med`
    font-size: 4.5rem;
    line-height: 1;
    text-align: left;
  `}
	${above.large`
    font-size: 6.25rem;
  `}
`;
