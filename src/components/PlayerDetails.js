import {Details} from '../styled-components/Details.styled';
import {Producer} from '../styled-components/Details.styled';

export default function PlayerDetails(props) {
	return (
		<div>
			<Details>title: {props.song.title}</Details>
			<Producer>Producer: {props.song.producer}</Producer>
		</div>
	);
}
