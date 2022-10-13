import styled from 'styled-components';

export const Details = styled.p`
	position: absolute;
	z-index: 2;
	top: 131.2px;
	left: 100px;
	font-family: monospace;
	font-size: 1rem;
	text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2), 0 -5px 35px rgba(255, 255, 255, 0.3);
`;

export const Producer = styled(Details)`
	top: 152.2px;
`;
