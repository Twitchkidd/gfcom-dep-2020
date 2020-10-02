export const handleItem = row => {
	const attemptNumber = row[19] !== '*' ? 3 : row[12] !== '*' ? 2 : 1;
	const category = row[2];
	const soldOn = row[3];
	const title = [row[6], row[13], row[19]][attemptNumber - 1];
	const description = [row[7], row[14], row[20]][attemptNumber - 1];
	const image = [row[8], row[15], row[21]][attemptNumber - 1].includes(',')
		? [row[8], row[15], row[21]][attemptNumber - 1].split(',')[0].trim()
		: [row[8], row[15], row[21]][attemptNumber - 1];
	const link = [row[9], row[16], row[22]][attemptNumber - 1];
	const platform = [row[9], row[16], row[22]][attemptNumber - 1].includes(
		'ebay'
	)
		? 'eBay'
		: 'Craigslist';
	const auctionPrice = [row[10], row[17], row[23]][attemptNumber - 1];
	const price = [row[11], row[18], row[24]][attemptNumber - 1];
	const previousPrice =
		attemptNumber > 2 ? row[18] : attemptNumber > 1 ? row[11] : '';
	const previousAuctionPrice =
		attemptNumber > 2 ? row[17] : attemptNumber > 1 ? row[10] : '';
	return {
		category,
		soldOn,
		title,
		description,
		image,
		link,
		platform,
		auctionPrice,
		price,
		previousPrice,
		previousAuctionPrice,
	};
};
