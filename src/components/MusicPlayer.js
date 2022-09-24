import {useState} from 'react';
import {useEffect} from 'react';

import Player from './Player';

function MusicPlayer() {
	const [songs] = useState([
		{
			title: 'Beat 1',
			producer: 'Unknown',
			src: './beats/beat1.mp3',
		},
		{
			title: 'Beat 2',
			producer: 'Unknown',
			src: './beats/beat2.mp3',
		},
		{
			title: 'Beat 3',
			producer: 'Unknown',
			src: './beats/beat3.mp3',
		},
		{
			title: 'Beat 4',
			producer: 'Unknown',
			src: './beats/beat4.mp3',
		},
		{
			title: 'Beat 5',
			producer: 'Unknown',
			src: './beats/beat5.mp3',
		},
		{
			title: 'Beat 6',
			producer: 'Unknown',
			src: './beats/beat6.mp3',
		},
		{
			title: 'Beat 7',
			producer: 'Unknown',
			src: './beats/beat7.mp3',
		},
		{
			title: 'Beat 8',
			producer: 'Unknown',
			src: './beats/beat8.mp3',
		},
		{
			title: 'Beat 9',
			producer: 'Unknown',
			src: './beats/beat9.mp3',
		},
		{
			title: 'Beat 10',
			producer: 'Unknown',
			src: './beats/beat10.mp3',
		},
		{
			title: 'Beat 11',
			producer: 'Unknown',
			src: './beats/beat11.mp3',
		},
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(0);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);

	return (
		<div>
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default MusicPlayer;
