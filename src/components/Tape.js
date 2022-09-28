import Lottie from 'lottie-react';
import {useRef, useEffect} from 'react';

import tape from '../../tape.json';

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
		<div>
			<Lottie lottieRef={lottieRef} animationData={tape} play={isPlaying} />
		</div>
	);
}
