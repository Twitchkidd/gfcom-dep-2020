import styled from 'styled-components';

const BioWrap = styled.div`
	display: flex;
	align-items: center;
`;

const BioImage = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 9999px;
	margin-right: 1rem;
`;

const BioBlurb = styled.div`
	font-size: 1.125rem;
	font-weight: 700;
`;

const Bio = () => (
	<BioWrap>
		<BioImage src={require('../public/profile-pic.jpg')} alt={'Gareth Field'} />
		<BioBlurb>
			Gareth Field is a trailrunner, developer, and dog-dad based out of
			beautiful downtown New London, Connecticut!
		</BioBlurb>
	</BioWrap>
);

export default Bio;
