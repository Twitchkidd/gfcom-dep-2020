import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import addDays from 'date-fns/addDays';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { Line } from 'rc-progress';
import { Layout } from '../components';
import {
	above,
	white,
	almostWhite,
	darkPink,
	darkPurple,
	darkBlue,
	eigengrau,
	elevation,
	slugify,
	veryLight,
} from '../utils';
import { getAllItems } from '../lib';

const Header = styled.h1``;

const Slide = styled.img`
	height: 360px;
	max-width: 100%;
	object-fit: cover;
`;

const Blurb = styled.p``;

const ProgressWrap = styled.div`
	margin: 1rem auto;
`;

const TableOfCategoriesWrap = styled.div``;

const CategoryButton = styled.button`
	padding: 0.5rem;
	margin: 0.25rem;
	border-radius: 0.25rem;
	&:hover {
		${elevation[2]};
	}
`;

const CategoryButtonA = styled.a`
	background-image: none;
`;

const CategoryWrap = styled.section``;

const CategoryHeader = styled.h2`
	text-decoration: underline;
	position: relative;
	&::before {
		content: '#';
		position: absolute;
		top: 0.5rem;
		left: -1rem;
		color: ${veryLight};
		font-size: 1rem;
	}
`;

const CardsWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

// card in tablet, plz stretch content vertically
const CardWrap = styled.a`
	display: flex;
	color: ${eigengrau};
	border: 2px solid ${props => (props.sold ? '#006600' : 'gray')};
	border-radius: 0.5rem;
	${elevation[1]};
	padding: 1rem;
	margin: 1rem;
	flex: 1;
	${above.small`
		margin: 0.25rem;
		max-width: 329px;
	`}
	${above.med`
		margin: 0.5rem;
		max-width: 272px;
	`}
	${above.large`
		margin: 1rem;
		max-width: 356px;
	`}
	background-image: none;
`;

const DetailsWrap = styled.div`
	max-width: 300px;
	min-width: 150px;
`;

const ImageWrap = styled.div`
	position: relative;
	max-width: 100%;
	float: right;
`;

const Image = styled.img`
	max-width: 200px;
`;

const PriceTag = styled.div`
	position: absolute;
	top: -0.5rem;
	left: -0.5rem;
	border: 1px solid ${almostWhite};
	border-radius: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.25rem;
	background: ${white};
`;

const Price = styled.span`
	font-size: 0.75rem;
`;

const PreviousPrice = styled(Price)`
	color: red;
	text-decoration: line-through;
`;

const Card = ({ item, cat }) => {
	const {
		soldOn,
		startDate,
		title,
		description,
		image,
		link,
		platform,
		auctionPrice,
		price,
		previousPrice,
	} = item;
	return (
		<CardWrap
			key={title}
			sold={soldOn !== ''}
			href={link}
			alt={platform + ' post'}
			platform={platform}>
			<DetailsWrap>
				<h3>{title}</h3>
				<p>{description}</p>
				<p>Click/tap to go to {platform}.com!</p>
			</DetailsWrap>
			<ImageWrap>
				<Image
					src={require(`../public${image}`)}
					loading={cat === 0 ? 'eager' : 'lazy'}
				/>
				<PriceTag>
					{auctionPrice === '' ? (
						previousPrice === '' ? (
							<Price>${price}</Price>
						) : (
							<>
								<PreviousPrice>${previousPrice}</PreviousPrice>
								<Price> {price}</Price>
							</>
						)
					) : previousPrice === '' ? (
						<Price>
							${auctionPrice}/${price} Auction/Buy Now
						</Price>
					) : (
						<>
							<PreviousPrice>${previousPrice}</PreviousPrice>
							<Price>
								{' '}
								${auctionPrice}/${price} Auction/Buy Now
							</Price>
						</>
					)}
				</PriceTag>
			</ImageWrap>
			{/* TODO {platform === 'Craigslist' ? null : <p>{startDate}</p>} */}
		</CardWrap>
	);
};

const blurb = "Let's find homes for everything Gareth needs to sell!";

export default function VirtualGarageSale({ rows }) {
	const [categories, setCategories] = useState(null);
	const [totalPercent, setTotalPercent] = useState();
	useEffect(() => {
		const categoriesArray = Array.from(new Set(rows.map(row => row[2]).sort()));
		const handledItems = rows.map(row => {
			const attemptNumber = row[19] !== '*' ? 3 : row[12] !== '*' ? 2 : 1;
			return {
				category: row[2],
				soldOn: row[3],
				startDate: [row[5], row[12], row[18]][attemptNumber - 1],
				title: [row[6], row[13], row[19]][attemptNumber - 1],
				description: [row[7], row[14], row[20]][attemptNumber - 1],
				image: [row[8], row[15], row[21]][attemptNumber - 1].includes(',')
					? [row[8], row[15], row[21]][attemptNumber - 1].split(',')[0].trim()
					: [row[8], row[15], row[21]][attemptNumber - 1],
				link: [row[9], row[16], row[22]][attemptNumber - 1],
				platform: [row[9], row[16], row[22]][attemptNumber - 1].includes('ebay')
					? 'eBay'
					: 'Craigslist',
				auctionPrice: [row[10], row[17], row[23]][attemptNumber - 1],
				price: [row[11], row[18], row[24]][attemptNumber - 1],
				previousPrice:
					attemptNumber > 2 ? row[18] : attemptNumber > 1 ? row[11] : '',
			};
		});
		setCategories(
			categoriesArray.map(category => ({
				name: category,
				items: handledItems.filter(item => item.category === category),
				percent:
					Math.round(
						handledItems
							.filter(item => item.category === category)
							.filter(item => item.soldOn !== '').length /
							handledItems.filter(item => item.category === category).length
					) * 100,
			}))
		);
	}, []);
	useEffect(() => {
		if (categories) {
			const items = categories.map(category => category.items).flat();
			console.log(
				Math.round(
					(items.filter(item => item.soldOn !== '').length / items.length) * 100
				)
			);
			setTotalPercent(
				Math.round(
					(items.filter(item => item.soldOn !== '').length / items.length) * 100
				)
			);
		}
	}, [categories]);
	let flights = ['1', '2', '3', '4'];
	return (
		<Layout>
			{!categories ? null : (
				<>
					<Carousel>
						{flights.map(f => (
							<Slide
								key={`Flight number ${f}.`}
								src={require(`../public/virtualGarageSale/flight${f}.jpg`)}
								alt={`Flights of items, batch ${f}.`}
								loading='eager'
							/>
						))}
					</Carousel>
					<Header>Virtual Garage Sale</Header>
					<Blurb>{blurb}</Blurb>
					<ProgressWrap>
						<Line
							percent={totalPercent ? `${totalPercent}` : '0'}
							strokeWidth='1'
							strokeColor={['#006600', veryLight]}
							// strokeColor={[
							// 	{
							// 		'100%': `${darkBlue}`,
							// 		'50%': `${darkPurple}`,
							// 		'0%': `${darkPink}`,
							// 	},
							// 	veryLight,
							// ]}
						/>
						{/* green? */}
					</ProgressWrap>
					<TableOfCategoriesWrap>
						{categories.map(category => (
							<CategoryButton key={category.name}>
								<Link href={`/virtual-garage-sale#${slugify(category.name)}`}>
									<CategoryButtonA>{category.name}</CategoryButtonA>
								</Link>
							</CategoryButton>
						))}
					</TableOfCategoriesWrap>
					{categories.map((category, c) => (
						<CategoryWrap key={category.name} id={slugify(category.name)}>
							<CategoryHeader>{category.name}</CategoryHeader>
							<CardsWrap>
								{category.items.map(item => (
									<Card key={item.title} item={item} cat={c} />
								))}
							</CardsWrap>
						</CategoryWrap>
					))}
				</>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const rows = await getAllItems();
	return {
		props: { rows },
	};
}

// const ItemsGrid = styled.div`
// 	width: 90%;
// 	height: 90%;
// 	overflow-y: scroll;
// 	display: grid;
// 	gap: 1rem;
// 	grid-template-columns: repeat(1fr, 3);
// 	grid-template-rows: 2rem;
// 	grid-auto-rows: 1fr;
// `;

// const ItemName = styled.p`
// 	margin-bottom: 0;
// `;

// const Card = styled.figure`
// 	height: 150px;
// 	max-width: 15rem;
// 	border: 1px solid ${light};
// 	border-radius: 0.75rem;
// `;

// Card.Image = styled.img`
// 	max-width: 100%;
// `;
