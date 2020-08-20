import styled from 'styled-components';
import { above } from '../utils';

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	width: 100%;
	${above.small`
		max-width: 640px;
	`}
	${above.med`
		max-width: 768px;
	`}
	${above.large`
		max-width: 1024px;
	`}
`;
