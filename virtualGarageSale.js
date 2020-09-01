/*
>> Garage Sale Data Object
*/

// * Category
// {
// 	name: "name",
// 	strategy: "description of the strategy, default being to craigslist items for their 'A' price, then their 'B' price, then their 'C' price, then free them or find a home for them somehow",
// 	items: [
// 		{
// 			$ITEM
// 		}
// 	]
// },
// * ... Categories

const categories = [
	{ name: 'Adventure Gear', strategy: 'default' },
	{ name: 'Antiques', strategy: 'default' },
	{ name: 'Appliances', strategy: 'default' },
	{ name: 'Art', strategy: 'default' },
	{ name: 'Arts & Crafts', strategy: 'default' },
	{ name: 'Bike Parts', strategy: 'default' },
	{ name: 'Books', strategy: 'default' },
	{ name: 'Business & Industrial', strategy: 'default' },
	{ name: 'Cameras & Photo', strategy: 'default' },
	{ name: 'CDs/DVDs/VHS', strategy: 'default' },
	{ name: 'Cell Phones & Accessories', strategy: 'default' },
	{ name: 'Coins & Paper Money', strategy: 'default' },
	{ name: 'Collectibles', strategy: 'default' },
	{ name: 'Computers', strategy: 'default' },
	{ name: 'Computer Parts', strategy: 'default' },
	{ name: 'Electronics', strategy: 'default' },
	{ name: 'Free', strategy: 'default' },
	{ name: 'Furniture', strategy: 'default' },
	{ name: 'Garage Sale', strategy: 'default' },
	{ name: 'General', strategy: 'default' },
	{ name: 'Home & Garden', strategy: 'default' },
	{ name: 'Materials', strategy: 'default' },
	{ name: 'Memorabilia', strategy: 'default' },
	{ name: 'Pottery & Glass', strategy: 'default' },
	{ name: 'Tools', strategy: 'default' },
	{ name: 'Toys & Hobbies', strategy: 'default' },
	{ name: 'Video Gaming', strategy: 'default' },
];

const itemsWithoutSaleAttemptsOrIds = categories
	.map(category =>
		category.items.map(item => ({
			name: item.name,
			description: item.description,
			categories: item.categories,
		}))
	)
	.flat()
	.map((item, i) => ({ ...item, id: i }));

const items = [
	// * Item
	{
		id: 0,
		name: 'name',
		description: 'description of the item',
		categories: ["Item's", 'Categories'],
		saleAttempts: item.saleAttempts,
	},
];

const saleAttempts = [
	{
		item: 0,
		// * Sale Attempt
		attempts: [
			{
				date: Date(),
				url: `https://${url}/`,
				advertizedPrice: 12000.0,
				success: false,
				finalPrice: null,
			},
			// * ... Sale Attempts
			{
				date: Date(),
				url: `https://${url}/`,
				advertizedPrice: 10000.0,
				success: true,
				finalPrice: 9000.9,
			},
		],
	},
];

const itemsWithSaleAttempts = itemsWithoutSaleAttempts.map(item => ({
	...item,
	saleAttempts: saleAttempts[item.id],
}));

export default [
	{
		name: 'Tools',
		items: [
			{
				name: 'Tin Snips',
				description: "Big ass tin snips, probably 40 years old and kickin'.",
				imgFileName: 'tinSnips',
				url: 'https://google.com',
			},
		],
	},
];
