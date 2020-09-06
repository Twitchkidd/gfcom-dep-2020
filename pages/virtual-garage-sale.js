import styled from 'styled-components';
import { Layout } from '../components';
import { light, veryLight, darkPink, darkPurple, darkBlue } from '../utils';
// import {  } from '../lib';

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

const ItemsGrid = styled.div`
	width: 90%;
	height: 90%;
	overflow-y: scroll;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(1fr, 3);
	grid-template-rows: 2rem;
	grid-auto-rows: 1fr;
`;

const ItemName = styled.p`
	margin-bottom: 0;
`;

const Card = styled.figure`
	height: 150px;
	max-width: 15rem;
	border: 1px solid ${light};
	border-radius: 0.75rem;
`;

Card.Image = styled.img`
	max-width: 100%;
`;

export default () => (
	<Layout>
		<CaruselHeaderWrap>
			<Header>Virtual Garage Sale</Header>
			<Carusel>
				{flights.map(flight => (
					<Slide>
						<Image src={flight.url} />
					</Slide>
				))}
			</Carusel>
		</CaruselHeaderWrap>
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
				<CategoryButton>
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
		))}
	</Layout>
);

// export async function getStaticProps() {
// 	const allPosts = getAllPosts([
// 		'title',
// 		'date',
// 		'author',
// 		'coverImage',
// 		'description',
// 		'excerpt',
// 		'slug',
// 	]);

// 	return {
// 		props: { allPosts },
// 	};
// }
