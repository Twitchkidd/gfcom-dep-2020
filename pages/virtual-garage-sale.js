import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import addDays from 'date-fns/addDays';
import Link from 'next/link';
import { Container } from '../components';
import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
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
	handleItem,
	slugify,
	veryLight,
} from '../utils';
import { getAllItems } from '../lib';

const blurb =
	'Super great deals! Wide variety of never-before-posted art, antiques, and so much more!';

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
		title,
		description,
		image,
		link,
		platform,
		auctionPrice,
		price,
		previousPrice,
		previousAuctionPrice,
	} = item;
	return soldOn ? (
		<CardWrap key={title} sold={soldOn !== ''} as='div' platform={platform}>
			<DetailsWrap>
				<h3>{title}</h3>
				<p>{description}</p>
			</DetailsWrap>
			<ImageWrap>
				<Image
					src={require(`../public${image}`)}
					loading={cat === 0 ? 'eager' : 'lazy'}
				/>
				<PriceTag>
					<Price>Found a home!</Price>
				</PriceTag>
			</ImageWrap>
		</CardWrap>
	) : (
		<CardWrap
			key={title}
			sold={soldOn !== ''}
			href={link}
			alt={platform + ' post'}
			platform={platform}>
			<DetailsWrap>
				<h3>{title}</h3>
				<p>{description}</p>
				{/* THIS NEEDS A CHANGE */}
				<p>Click/tap to go to {platform}.com!</p>
			</DetailsWrap>
			<ImageWrap>
				<Image
					src={require(`../public${image}`)}
					loading={cat === 0 ? 'eager' : 'lazy'}
				/>
				<PriceTag>
					{previousPrice ? (
						previousAuctionPrice ? (
							auctionPrice ? (
								<>
									<PreviousPrice>${previousPrice}</PreviousPrice>
									<Price>
										{' '}
										${auctionPrice}/${price} Auction/Buy Now!
									</Price>
								</>
							) : (
								<>
									<PreviousPrice>${previousPrice}</PreviousPrice>
									<Price> {price}</Price>
								</>
							)
						) : (
							<>
								<PreviousPrice>${previousPrice}</PreviousPrice>
								<Price> {price}</Price>
							</>
						)
					) : auctionPrice ? (
						<Price>
							${auctionPrice}/${price} Auction/Buy Now!
						</Price>
					) : (
						<Price>${price}</Price>
					)}
				</PriceTag>
			</ImageWrap>
		</CardWrap>
	);
};

export default function VirtualGarageSale({ rows }) {
	const [categories, setCategories] = useState(null);
	const [totalPercent, setTotalPercent] = useState();
	useEffect(() => {
		const categoriesArray = Array.from(new Set(rows.map(row => row[2]).sort()));
		const handledItems = rows.map(row => {
			const handledItem = handleItem(row);
			console.log(handledItem);
			return handledItem;
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
	let flights = ['5', '1', '2', '3', '4'];
	return (
		<Layout vgs={true}>
			<Container>
				<SiteHeader />
				{!categories ? null : (
					<>
						<Carousel>
							{flights.map((f, i) => (
								<Slide
									key={`Flight number ${f}.`}
									src={require(`../public/virtualGarageSale/flight${f}.jpg`)}
									alt={`Flights of items, batch ${f}.`}
									loading={i === 0 ? 'eager' : 'lazy'}
								/>
							))}
						</Carousel>
						<Header>Gareth's Virtual Garage Sale!</Header>
						<Blurb>{blurb}</Blurb>
						<ProgressWrap>
							{`${totalPercent}% of items have found a home!`}
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
				<Footer />
			</Container>
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
