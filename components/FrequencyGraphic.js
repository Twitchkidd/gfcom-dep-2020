import styled from 'styled-components';
import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';

const BoxesWrap = styled.div`
	width: 8rem;
	height: 10rem;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	overflow-x: scroll;
`;

const Box = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: ${props => props.color};
	margin: 0 0.25rem 0.25rem 0;
`;

export const FrequencyGraphic = ({ posts }) => {
	// console.log(posts[0].date);
	// const days = [];
	// days.length = 4;
	// console.log(days);

	// const days = differenceInDays(
	// 	parseISO(posts[0].date),
	// 	parseISO(posts[posts.length - 1].date)
	// );
	console.log(days);
	return (
		<BoxesWrap>
			<Box color='#060' />
		</BoxesWrap>
	);
	// return <BoxesWrap>{Array(days).fill(<Box color='#060' />)}</BoxesWrap>;
};
