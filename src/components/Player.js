import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
	const audioElement = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (isPlaying) {
			audioElement.current.play();
		} else {
			audioElement.current.pause();
		}
	});

	const SkipSong = (forwards = true) => {
		if (forwards) {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp++;

				if (temp > props.songs.length - 1) {
					temp = 0;
				}

				return temp;
			});
		} else {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp--;

				if (temp < 0) {
					temp = props.songs.length - 1;
				}

				return temp;
			});
		}
	};

	return (
		<div>
			<audio src={props.songs[props.currentSongIndex].src} ref={audioElement} />
			<PlayerDetails song={props.songs[props.currentSongIndex]} />
			<PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
		</div>
	);
}
export default Player;
