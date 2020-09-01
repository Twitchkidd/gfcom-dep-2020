import styled from 'styled-components';
import { Layout } from '../components';
import { light } from '../utils';
import categories from '../virtualGarageSale.js';

const ItemsGrid = styled.div`
	width: 90%;
	height: 90%;
	overflow-y: scroll;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(1fr, 3);
	grid-template-rows: 2rem;
	grid-auto-rows: 1fr;
`;

const ItemName = styled.p`
	margin-bottom: 0;
`;

const Card = styled.figure`
	height: 150px;
	max-width: 15rem;
	border: 1px solid ${light};
	border-radius: 0.75rem;
`;

Card.Image = styled.img`
	max-width: 100%;
`;

export default () => (
	<Layout>
		<h2>Virtual Garage Sale!</h2>
		<p>This is a todo, sorry folks!</p>
	</Layout>
);
