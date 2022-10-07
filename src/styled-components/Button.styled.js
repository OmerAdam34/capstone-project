import styled from 'styled-components';

export const Button = styled.button`
	position: relative;
	width: 100px;
	padding: 0.25em 0.5em;
	border: 3px solid;
	box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
	color: #000;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	letter-spacing: 2px;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
	user-select: none;
	touch-action: manipulation;

	.Button:active {
		top: 5px;
		left: 5px;
		box-shadow: 0 0 0 0;
	}

	@media (min-width: 768px) {
		.button-54 {
			padding: 0.25em 0.75em;
		}
	}
`;
