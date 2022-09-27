import Lottie from 'lottie-react';
import {useRef} from 'react';

import tape from '../../tape.json';

export default function Tape() {
	const lottieRef = useRef();
	return (
		<div>
			<h1>Tape</h1>
			<Lottie lottieRef={lottieRef} animationData={tape} />
		</div>
	);
}
