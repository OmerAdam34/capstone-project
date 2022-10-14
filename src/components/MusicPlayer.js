import Image from 'next/image';
import {useState} from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';

import SignInLogo from '../../public/images/signInLogo.png';
import {SignInContainer} from '../styled-components/SignInContainer.styled';
import {MusicPlayerHeadline} from '../styled-components/SignInHeadline.styed';

import Navigation from './Navigation';
import Player from './Player';

const SignInIcon = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

function MusicPlayer() {
	const [songs] = useState([
		{
			title: 'beat 1',
			producer: 'unknown',
			src: './beats/beat1.mp3',
		},
		{
			title: 'beat 2',
			producer: 'unknown',
			src: './beats/beat2.mp3',
		},
		{
			title: 'beat 3',
			producer: 'unknown',
			src: './beats/beat3.mp3',
		},
		{
			title: 'beat_4',
			producer: 'unknown',
			src: './beats/beat4.mp3',
		},
		{
			title: 'beat 5',
			producer: 'unknown',
			src: './beats/beat5.mp3',
		},
		{
			title: 'beat 6',
			producer: 'unknown',
			src: './beats/beat6.mp3',
		},
		{
			title: 'beat 7',
			producer: 'unknown',
			src: './beats/beat7.mp3',
		},
		{
			title: 'beat 8',
			producer: 'unknown',
			src: './beats/beat8.mp3',
		},
		{
			title: 'beat 9',
			producer: 'unknown',
			src: './beats/beat9.mp3',
		},
		{
			title: 'beat 10',
			producer: 'unknown',
			src: './beats/beat10.mp3',
		},
		{
			title: 'beat 11',
			producer: 'unknown',
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
			<SignInContainer>
				<SignInIcon>
					<Image
						src={SignInLogo}
						width="2000"
						height="313"
						alt="Icon"
						objectFit="cover"
					/>
				</SignInIcon>
				<MusicPlayerHeadline>MANUFACTURE</MusicPlayerHeadline>
			</SignInContainer>
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
			<Navigation />
		</div>
	);
}

export default MusicPlayer;
