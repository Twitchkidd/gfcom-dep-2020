const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const sheetUrl =
	'https://docs.google.com/spreadsheets/d/1VSL2DLusx8s6uqHv61BGNoVWE-5D_7Iq9BZr4_numl8/edit#gid=0';
const spreadSheetIdRegex = new RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)');
const sheetIdRegex = new RegExp('[#&]gid=([0-9]+)');
const spreadSheetId = spreadSheetIdRegex.exec(sheetUrl)[1];
const sheetId = sheetIdRegex.exec(sheetUrl)[1];

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
	if (err) return console.log('Error loading client secret file:', err);
	// Authorize a client with credentials, then call the Google Sheets API.
	authorize(JSON.parse(content), listDescriptions);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.installed;
	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0]
	);

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getNewToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token));
		callback(oAuth2Client);
	});
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	});
	console.log('Authorize this app by visiting this url:', authUrl);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	rl.question('Enter the code from that page here: ', code => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err)
				return console.error(
					'Error while trying to retrieve access token',
					err
				);
			oAuth2Client.setCredentials(token);
			// Store the token to disk for later program executions
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
				if (err) return console.error(err);
				console.log('Token stored to', TOKEN_PATH);
			});
			callback(oAuth2Client);
		});
	});
}

/**
 * Prints the titles and descriptions of virtual garage sale items.
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listDescriptions(auth) {
	const sheets = google.sheets({ version: 'v4', auth });
	sheets.spreadsheets.values.get(
		{
			spreadsheetId: spreadSheetId,
			range: 'A2:C',
		},
		(err, res) => {
			if (err) return console.log('The API returned an error: ' + err);
			const rows = res.data.values;
			if (rows.length) {
				console.log('Title, Description:');
				// Print columns A and C, which correspond to indices 0 and 2.
				rows.map(row => {
					console.log(`${row[0]}, ${row[2]}`);
				});
			} else {
				console.log('No data found.');
			}
		}
	);
}

let items;

/**
 * Prints the titles and descriptions of virtual garage sale items.
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listSheet(auth) {
	const sheets = google.sheets({ version: 'v4', auth });
	sheets.spreadsheets.values.get(
		{
			spreadsheetId: spreadSheetId,
			range: `${sheetId}`,
		},
		(err, res) => {
			if (err) return console.log('The API returned an error: ' + err);
			const rows = res.data.values;
			if (rows.length) {
				console.log('Spreadsheet:');
				rows.map(row => {
					console.log(
						`${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}, ${row[5]}, ${row[6]}, ${row[7]}, ${row[8]}, ${row[9]}, ${row[10]}, ${row[11]}`
					);
				});
				items = rows;
			} else {
				console.log('No data found.');
			}
		}
	);
}

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

// const categories = [
// 	{ name: 'Adventure Gear', strategy: 'default' },
// 	{ name: 'Antiques', strategy: 'default' },
// 	{ name: 'Appliances', strategy: 'default' },
// 	{ name: 'Art', strategy: 'default' },
// 	{ name: 'Arts & Crafts', strategy: 'default' },
// 	{ name: 'Bike Parts', strategy: 'default' },
// 	{ name: 'Books', strategy: 'default' },
// 	{ name: 'Business & Industrial', strategy: 'default' },
// 	{ name: 'Cameras & Photo', strategy: 'default' },
// 	{ name: 'CDs/DVDs/VHS', strategy: 'default' },
// 	{ name: 'Cell Phones & Accessories', strategy: 'default' },
// 	{ name: 'Coins & Paper Money', strategy: 'default' },
// 	{ name: 'Collectibles', strategy: 'default' },
// 	{ name: 'Computers', strategy: 'default' },
// 	{ name: 'Computer Parts', strategy: 'default' },
// 	{ name: 'Electronics', strategy: 'default' },
// 	{ name: 'Free', strategy: 'default' },
// 	{ name: 'Furniture', strategy: 'default' },
// 	{ name: 'Garage Sale', strategy: 'default' },
// 	{ name: 'General', strategy: 'default' },
// 	{ name: 'Home & Garden', strategy: 'default' },
// 	{ name: 'Materials', strategy: 'default' },
// 	{ name: 'Memorabilia', strategy: 'default' },
// 	{ name: 'Pottery & Glass', strategy: 'default' },
// 	{ name: 'Tools', strategy: 'default' },
// 	{ name: 'Toys & Hobbies', strategy: 'default' },
// 	{ name: 'Video Gaming', strategy: 'default' },
// ];

// const itemsWithoutSaleAttemptsOrIds = categories
// 	.map(category =>
// 		category.items.map(item => ({
// 			name: item.name,
// 			description: item.description,
// 			categories: item.categories,
// 		}))
// 	)
// 	.flat()
// 	.map((item, i) => ({ ...item, id: i }));

// const items = [
// 	// * Item
// 	{
// 		id: 0,
// 		name: 'name',
// 		description: 'description of the item',
// 		categories: ["Item's", 'Categories'],
// 		saleAttempts: item.saleAttempts,
// 	},
// ];

// const saleAttempts = [
// 	{
// 		item: 0,
// 		// * Sale Attempt
// 		attempts: [
// 			{
// 				date: Date(),
// 				url: `https://${url}/`,
// 				advertizedPrice: 12000.0,
// 				success: false,
// 				finalPrice: null,
// 			},
// 			// * ... Sale Attempts
// 			{
// 				date: Date(),
// 				url: `https://${url}/`,
// 				advertizedPrice: 10000.0,
// 				success: true,
// 				finalPrice: 9000.9,
// 			},
// 		],
// 	},
// ];

// const itemsWithSaleAttempts = itemsWithoutSaleAttempts.map(item => ({
// 	...item,
// 	saleAttempts: saleAttempts[item.id],
// }));

// export default [
// 	{
// 		name: 'Tools',
// 		items: [
// 			{
// 				name: 'Tin Snips',
// 				description: "Big ass tin snips, probably 40 years old and kickin'.",
// 				imgFileName: 'tinSnips',
// 				url: 'https://google.com',
// 			},
// 		],
// 	},
// ];

// export const getAllCategories = () => {
// 	// Todo: stuff
// 	return categories;
// };
