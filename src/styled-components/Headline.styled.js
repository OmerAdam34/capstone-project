import styled from 'styled-components';

export const Headline = styled.p`
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 2.15rem;
	font-weight: 750;
	@media (min-width: 376px) {
		position: relative;
		top: 70px;
		font-size: 2.9rem;
		font-weight: 750;
	}
`;

export const IncognitoHeadline = styled(Headline)`
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 2.25rem;
	font-weight: 750;
`;
