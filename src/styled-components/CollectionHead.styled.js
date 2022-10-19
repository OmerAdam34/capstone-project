import styled from 'styled-components';

export const CollectionHead = styled.h4`
	position: absolute;
	bottom: 31%;
	left: 60%;
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 2rem;
	font-weight: 850;
	letter-spacing: 0.35rem;
	text-align: center;
	@media (min-width: 376px) {
		bottom: 40%;
	}
`;

export const CollectionHead2 = styled(CollectionHead)`
	bottom: 27%;
	letter-spacing: 1.02rem;
	@media (min-width: 376px) {
		bottom: 36%;
	}
`;

export const CollectionHead3 = styled(CollectionHead)`
	bottom: 23%;
	letter-spacing: 1.02rem;
	@media (min-width: 376px) {
		bottom: 32%;
	}
`;
