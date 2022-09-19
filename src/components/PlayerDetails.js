function PlayerDetails(props) {
	return (
		<div>
			<h3>{props.song.title}</h3>
			<h4>Producer: {props.song.producer}</h4>
		</div>
	);
}
export default PlayerDetails;
