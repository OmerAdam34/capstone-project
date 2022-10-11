import styled from 'styled-components';

export const Button = styled.button`
	position: relative;
	width: auto;
	padding: 0.25em 0.5em;
	border: 3px solid;
	box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
	color: #000;
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 1rem;
	font-weight: 800;
	letter-spacing: 2px;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
	user-select: none;
	touch-action: manipulation;

	:active {
		top: 5px;
		left: 5px;
		box-shadow: 0 0 0 0;
	}
`;
export const IntroductionButton = styled(Button)`
	position: relative;
	top: 97.5%;
	left: 9rem;
	:active {
		top: 5px;
		left: 5px;
		box-shadow: 0 0 0 0;
	}
`;

export const SignOutButton = styled(Button)`
	position: relative;
	top: 10px;
	left: 20px;
	:active {
		top: 5px;
		left: 5px;
		box-shadow: 0 0 0 0;
	}
`;

export const RecordingButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 270.24px;
	left: 90px;
	width: 55px;
	height: 51px;
	:active {
		top: 280px;
		left: 90px;
		box-shadow: 0 0 0 0;
	}
`;

export const BackwardButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 270.24px;
	left: 150px;
	width: 55px;
	height: 51px;
	:active {
		top: 180px;
		left: 80px;
		box-shadow: 0 0 0 0;
	}
`;

export const PlayButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 270.24px;
	left: 210px;
	width: 55px;
	height: 51px;
`;

export const ForwardButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 270.24px;
	right: 50px;
	width: 55px;
	height: 51px;
`;
