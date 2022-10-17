import styled from 'styled-components';

export const GithubContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 220px;
	height: 220px;
	gap: 20px;
	margin-top: -15%;
	border: 3px solid black;
	box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
	color: black;
	@media (min-width: 376px) {
		width: 75%;
		height: 280px;
		margin-top: 0.5%;
	}
`;
