import styled from 'styled-components';
import { above } from '../utils';

export const PanelWrap = styled.div`
	grid-column: 0 / 1;
	grid-row: 1 / 2;
	overflow-y: scroll;
	${above.small`
    grid-column: 1 / 2;
  `}
`;
