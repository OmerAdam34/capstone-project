import EdiText from 'react-editext';
import styled from 'styled-components';

export const StyledEdiText = styled(EdiText)`
	margin-left: 20px;
	font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
		'Helvetica Neue', sans-serif;
	font-size: 0.87rem;
	font-weight: 450;
	input,
	textarea {
		margin-right: 4px;
		border-radius: 25px;
		background: #fff;
		color: #303030;
		font-weight: 500;
	}
	button[editext='edit-button'] {
		/* border: 1px solid black; */
		background-color: white;
		color: #000;
		font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		font-size: 0.8rem;
		font-weight: 800;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		user-select: none;
		touch-action: manipulation;
	}
	button[editext='save-button'] {
		position: relative;
		left: 14px;
		background-color: white;
		font-weight: bold;
		&:hover {
			background: green;
		}
	}
	button[editext='cancel-button'] {
		position: relative;
		left: 14px;
		background-color: white;
		font-weight: bold;
		&:hover {
			background: red;
			color: #fff;
		}
	}
`;
