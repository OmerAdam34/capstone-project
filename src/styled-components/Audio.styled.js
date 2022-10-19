import styled from 'styled-components';

export const Audio = styled.audio`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (min-width: 376px) {
		position: relative;
		top: 115px;
	}
`;

export const AudioProfile = styled(Audio)`
	width: 98%;
`;
