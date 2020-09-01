/*
	>> Garage Sale Data Object
*/

const categories = [
	// * Category
	{
		name: "name",
		strategy: "description of the strategy",
		items:
	},
	// * ... Categories
]

const itemsWithoutSaleAttemptsOrIds = categories.map(category => (
	category.items.map(item => ({
		name: item.name,
		description: item.description,
		categories: item.categories,
	}))
)).flat().map((item, i) => ({...item, id: i}));

const items = [
	// * Item
	{
		id: 0,
		name: "name",
		description: "description of the item",
		categories: [
			"Item's", "Categories"
		],
		saleAttempts: item.saleAttempts
	}
]

const itemsWithSaleAttempts = itemsWithoutSaleAttempts.map(item => ({...item, saleAttempts: saleAttempts[item.id]})


const saleAttempts = [
	// * Sale Attempt
	{
		date: Date(),
		url: `https://${url}/`,
		advertizedPrice: 12000.00,
		success: false,
		finalPrice: null
	},
	// * ... Sale Attempts
	{
		date: Date(),
		url: `https://${url}/`,
		advertizedPrice: 10000.00,
		success: true,
		finalPrice: 9000.90
	}
]

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
