import styled from 'styled-components';

export const DeleteButton = styled.button`
	position: relative;
	bottom: 46px;
	left: 84%;
	padding: 8px 6px 8px 6px;
	border: 3px solid;
	box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
	color: #000;
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 0.8rem;
	font-weight: 800;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
	user-select: none;
	touch-action: manipulation;
	:active {
		position: relative;
		bottom: 43px;
		left: 86%;
		border: 3px solid;
		box-shadow: 0 0 0 0;
	}
	@media (min-width: 376px) {
		left: 80.9%;
	}
`;
