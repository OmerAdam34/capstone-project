import {useSession} from 'next-auth/react';
import {useState} from 'react';

import MusicPlayer from '../components/MusicPlayer';
import Recorder from '../components/Recorder';

export default function HomePage() {
	const {data: session} = useSession();
	const [showApp, setShowApp] = useState(false);
	return session || showApp ? (
		<div>
			<MusicPlayer />
			<Recorder />
		</div>
	) : (
		<div>
			<h1>Please login</h1>
			<button
				onClick={() => {
					setShowApp(true);
				}}
			>
				continue without login
			</button>
		</div>
	);
}
