import {Details} from '../styled-components/Details.styled';
import {Producer} from '../styled-components/Details.styled';

export default function PlayerDetails(props) {
	return (
		<>
			<Details>title: {props.song.title}</Details>
			<Producer>producer: {props.song.producer}</Producer>
		</>
	);
}
