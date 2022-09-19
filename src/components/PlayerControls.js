import {FaBackward} from 'react-icons/fa';
import {FaForward} from 'react-icons/fa';
import {FaPlay} from 'react-icons/fa';
// import {FaPause} from 'react-icons/fa';

function PlayerControls(props) {
	return (
		<div>
			<button>
				<FaBackward />
			</button>
			<button onClick={() => props.setIsPlaying(!props.isPlaying)}>
				<FaPlay />
			</button>
			<button>
				<FaForward />
			</button>
		</div>
	);
}

export default PlayerControls;
