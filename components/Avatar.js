import styled from 'styled-components';

const AvatarWrap = styled.div`
	display: flex;
	align-items: center;
`;

const AvatarImage = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 9999px;
	margin-right: 1rem;
`;

const AvatarName = styled.div`
	font-size: 1.125rem;
	font-weight: 700;
`;

export default Avatar = ({ name, picture }) => (
	<AvatarWrap>
		<AvatarImage src={picture} alt={name} />
		<AvatarName>{name}</AvatarName>
	</AvatarWrap>
);
