import styled from 'styled-components';
import { above, white, almostWhite, elevation, eigengrau } from '../utils';

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

export const VGSCard = ({ item, cat }) => {
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
