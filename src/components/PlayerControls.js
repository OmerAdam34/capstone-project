import {FaBackward} from 'react-icons/fa';
import {FaForward} from 'react-icons/fa';
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';

function PlayerControls(props) {
	return (
		<div>
			<button onClick={() => props.SkipSong(false)}>
				<FaBackward />
			</button>
			<button onClick={() => props.setIsPlaying(!props.isPlaying)}>
				{props.isPlaying ? <FaPause /> : <FaPlay />}
			</button>
			<button onClick={() => props.SkipSong()}>
				<FaForward />
			</button>
		</div>
	);
}

export default PlayerControls;
