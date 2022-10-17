import styled from 'styled-components';

export const Details = styled.p`
	position: absolute;
	z-index: 1;
	top: 131.2px;
	left: 100px;
	font-family: monospace;
	font-size: 1rem;
	text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2), 0 -5px 35px rgba(255, 255, 255, 0.3);
	@media (min-width: 376px) {
		top: 135px;
	}
`;

export const Producer = styled(Details)`
	top: 152.2px;
	@media (min-width: 376px) {
		top: 158px;
	}
`;
