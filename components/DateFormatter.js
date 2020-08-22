import styled from 'styled-components';
import { parseISO, format } from 'date-fns';
import { veryLight } from '../utils';

const StyledTime = styled.time`
	color: ${veryLight};
`;

const DateFormatter = ({ dateString }) => {
	const date = parseISO(dateString);
	return (
		<StyledTime dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</StyledTime>
	);
};

export default DateFormatter;
