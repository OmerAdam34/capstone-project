import Lottie from 'lottie-react';
import {useRef, useEffect} from 'react';

import tape from '../../tape.json';
import {Cassette} from '../styled-components/Cassette.styled';

export default function Tape({isPlaying}) {
	const lottieRef = useRef();

	useEffect(() => {
		if (isPlaying) {
			lottieRef.current.play();
		} else {
			lottieRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<Cassette>
			<Lottie lottieRef={lottieRef} animationData={tape} play={isPlaying} />
		</Cassette>
	);
}
