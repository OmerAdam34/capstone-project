import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';

import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';
import Tape from './Tape';

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
				let temporary = props.currentSongIndex;
				temporary++;

				if (temporary > props.songs.length - 1) {
					temporary = 0;
				}

				return temporary;
			});
		} else {
			props.setCurrentSongIndex(() => {
				let temporary = props.currentSongIndex;
				temporary--;

				if (temporary < 0) {
					temporary = props.songs.length - 1;
				}

				return temporary;
			});
		}
	};

	return (
		<div>
			<audio src={props.songs[props.currentSongIndex].src} ref={audioElement} />
			<PlayerDetails song={props.songs[props.currentSongIndex]} />
			<PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
			<Tape isPlaying={isPlaying} />
		</div>
	);
}
export default Player;
