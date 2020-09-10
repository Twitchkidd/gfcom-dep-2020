import styled from 'styled-components';
import Link from 'next/link';
import Carousel from '@brainhubeu/react-carousel';
import { Line } from 'rc-progress';
import { Layout } from '../components';
import { elevation, veryLight, darkPink, darkPurple, darkBlue } from '../utils';
import { getAllItems } from '../lib';

const CarouselHeaderWrap = styled.header``;

const Header = styled.h1``;

const Slide = styled.img`
	max-width: 100%;
`;

const Blurb = styled.p``;

const ProgressWrap = styled.div``;

const TableOfCategoriesWrap = styled.div``;

const CategoryButton = styled.button``;

const CategoryButtonA = styled.a``;

const CategoryWrap = styled.section``;

const CategoryHeader = styled.h2``;

const CardWrap = styled.div``;

const Card = ({ item }) => {
	const { description, name, soldOn } = item;
	return (
		<CardWrap homed={soldOn}>
			<h3>{name}</h3>
			<p>{description}</p>
			{/* <img? || CARUSEL?! */}
		</CardWrap>
	);
};

const blurb = 'Four score and seven years ago ...';

export default function VirtualGarageSale({ rows }) {
	const handledRows = rows.map(row => {
		return {
			name: row[18] !== '' ? row[19] : row[12] !== '' ? row[13] : row[6],
			sold: row[3] !== '',
		};
	});
	console.log(handledRows);
	const categoriesArray = Array.from(new Set(rows.map(row => row[1]).sort()));
	const categories = categoriesArray.map(category => ({
		name: category,
		items: handledRows.filter(item => item.category === category),
	}));
	let flights = [];
	flights.length = 4;
	return (
		<Layout>
			Hey
			{/* <CarouselHeaderWrap>
				<Header>Virtual Garage Sale</Header>
				<Carousel>
					{flights.map((flight, i) => (
						<Slide
							key={`Flight number ${i}.`}
							src={require(`../public/virtualGarageSale/flight${i + 1}.jpg`)}
							alt={`Flights of items, batch ${i + 1}.`}
						/>
					))}
				</Carousel>
			</CarouselHeaderWrap>
			<Blurb>{blurb}</Blurb>
			<ProgressWrap>
				<Line
					percent={[percent, 100 - percent]}
					strokeWidth='6'
					strokeColor={[
						{
							'100%': `${darkBlue}`,
							'50%': `${darkPurple}`,
							'0%': `${darkPink}`,
						},
						veryLight,
					]}
				/>
			</ProgressWrap>
			<TableOfCategoriesWrap>
				{categories.map(category => (
					<CategoryButton key={category.name}>
						<Link href={`/virtual-garage-sale#${category.slug}`}>
							<CategoryButtonA>{category.name}</CategoryButtonA>
						</Link>
					</CategoryButton>
				))}
			</TableOfCategoriesWrap>
			{categories.map(category => (
				<CategoryWrap key={category.name}>
					<CategoryHeader>{category.name}</CategoryHeader>
					{category.items.map(item => (
						<Card key={item.name} item={item} />
					))}
				</CategoryWrap>
			))} */}
		</Layout>
	);
}

export async function getStaticProps() {
	const rows = await getAllItems();
	/*
		- Percent complete
		- Categories ✅

		- Items: (BY CATEGORY!)
			- Not Sold:
				- Most recent:
					- Title
					- Description
					- Image (out of images)
					- Link
					- Platform
						- Price or Auction/Buy price ... oooh, how do you look up the current auction rather than the start?
						- Any previous price/auction prices
		- Sold?
			- Title
			- Description
			- Image (out of images)
	*/
	return {
		props: { rows },
	};
}

/*

flights = [../public/vgs/f1, ../public/vgs/f2, ...]

total = items.length
sold = soldItems.length

categories = items.map().filter()

items = items.map(item =>
	if items.soldFor {
		{ title, description, category, images, soldOn } = item
	} else if (items.saleAttempt[saleAttempts.length]) {
		{ title, description, category, images, link, saleAttemptAuctionPrice, saleAttemptPrice } = item
	} else {
		{ title, description, category, images, link, saleAttemptPrice } = item
	}
)

*/

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
