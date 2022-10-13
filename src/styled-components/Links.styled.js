import styled from 'styled-components';

export const LinkOne = styled.a`
	position: absolute;
	z-index: 12;
	bottom: 120%;
	left: 25%;
	width: 140%;
	height: 14%;
	padding: 5px;
	border: none;
	background-color: #252525;
	box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
	color: white;
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 1.5rem;
	font-weight: 750;
	letter-spacing: 0.3rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
`;

export const LinkTwo = styled(LinkOne)`
	bottom: 105%;
	margin-top: 40px;
`;

export const LinkThree = styled(LinkOne)`
	bottom: 90%;
	margin-top: 60px;
`;
