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

export const IntroButton = styled(Button)`
	position: relative;
	top: 97.5%;
	left: 22%;
	:active {
		top: 97.5%;
		left: 22%;
		box-shadow: 0 0 0 0;
	}
`;

export const SignOutButton = styled(Button)`
	position: relative;
	top: 10px;
	left: 20px;
	:active {
		top: 16px;
		left: 25px;
		box-shadow: 0 0 0 0;
	}
`;

export const RecordingButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 43.9%;
	left: 21%;
	width: 15%;
	height: 7.7%;
	:active {
		top: 43.9%;
		left: 22%;
		box-shadow: 0 0 0 0;
	}
`;

export const BackwardButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 43.9%;
	left: 37.3%;
	width: 15%;
	height: 7.7%;
	:active {
		top: 43.9%;
		left: 38.3%;
		box-shadow: 0 0 0 0;
	}
`;

export const PlayButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 43.9%;
	left: 53.6%;
	width: 15%;
	height: 7.7%;
	:active {
		top: 43.9%;
		left: 54.6%;
		box-shadow: 0 0 0 0;
	}
`;

export const ForwardButton = styled(Button)`
	position: absolute;
	z-index: 1;
	top: 43.9%;
	left: 70%;
	width: 15%;
	height: 7.7%;
	:active {
		top: 43.9%;
		left: 71%;
		box-shadow: 0 0 0 0;
	}
`;

// export const DeleteButton = styled(Button)`
// 	position: relative;
// 	bottom: 57px;
// 	left: 84%;
// 	padding: 8px 0 8px 0;
// 	border: 3px solid;
// 	/* box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0; */
// 	color: #000;
// 	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
// 		'Helvetica Neue', sans-serif;
// 	font-size: 0.8rem;
// 	font-weight: 800;
// 	text-decoration: none;
// 	text-transform: uppercase;
// 	cursor: pointer;
// 	user-select: none;
// 	touch-action: manipulation;
// 	:active {
// 		position: relative;
// 		bottom: 10%;
// 		left: 84%;
// 		border: 3px solid;
// 		box-shadow: 0 0 0 0;
// 	}
// `;
