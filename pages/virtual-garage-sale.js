import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container, VGSCard } from '../components';
import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import { Line } from 'rc-progress';
import { Layout } from '../components';
import { compareDesc } from 'date-fns';
import {
	darkPink,
	darkPurple,
	darkBlue,
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
			setTotalPercent(
				Math.round(
					(items.filter(item => item.soldOn !== '').length / items.length) * 100
				)
			);
		}
	}, [categories]);
	let flights = ['6', '5', '1', '2', '3', '4'];
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
									{category.items
										.sort((a, b) => compareDesc(a.datePosted, b.datePosted))
										.map(item => (
											<VGSCard key={item.title} item={item} cat={c} />
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

// const VGSCard = styled.figure`
// 	height: 150px;
// 	max-width: 15rem;
// 	border: 1px solid ${light};
// 	border-radius: 0.75rem;
// `;

// VGSCard.Image = styled.img`
// 	max-width: 100%;
// `;
