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

const Avatar = () => (
	<AvatarWrap>
		<AvatarImage
			src={require('../public/profile-pic.jpg')}
			alt={'Gareth Field'}
		/>
		<AvatarName>Gareth Field</AvatarName>
	</AvatarWrap>
);

export default Avatar;
