import styled from 'styled-components';

export const Audio = styled.audio`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (min-width: 376px) {
		position: relative;
		left: 2.5%;
		width: 78%;
	}
`;

export const AudioProfile = styled(Audio)`
	width: 98%;
`;
