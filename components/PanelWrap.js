import styled from 'styled-components';
import { above, elevation } from '../utils';

export const PanelWrap = styled.div`
	grid-column: 0 / 1;
	grid-row: 1 / 2;
	overflow-y: scroll;
	padding-bottom: 2rem;
	${above.small`
    grid-column: 1 / 2;
  `}
`;
