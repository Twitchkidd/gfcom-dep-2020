import { parseISO, format } from 'date-fns';

export default DateFormater = ({ dateString }) => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};
