import {FaBackward} from 'react-icons/fa';
import {FaForward} from 'react-icons/fa';
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';

import {BackwardButton} from '../styled-components/Button.styled';
import {PlayButton} from '../styled-components/Button.styled';
import {ForwardButton} from '../styled-components/Button.styled';

function PlayerControls(props) {
	return (
		<div>
			<BackwardButton onClick={() => props.SkipSong(false)}>
				<FaBackward />
			</BackwardButton>
			<PlayButton onClick={() => props.setIsPlaying(!props.isPlaying)}>
				{props.isPlaying ? <FaPause /> : <FaPlay />}
			</PlayButton>
			<ForwardButton onClick={() => props.SkipSong()}>
				<FaForward />
			</ForwardButton>
		</div>
	);
}

export default PlayerControls;
