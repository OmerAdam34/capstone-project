import {useSession} from 'next-auth/react';
import {useState} from 'react';

import MusicPlayer from '../components/MusicPlayer';
import Recorder from '../components/Recorder';
import {Button} from '../styled-components/Button.styled';

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
			<Button
				onClick={() => {
					setShowApp(true);
				}}
			>
				CONTINUE WITHOUT LOGIN
			</Button>
		</div>
	);
}
