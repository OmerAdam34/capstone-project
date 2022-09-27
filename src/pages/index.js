import MusicPlayer from '../components/MusicPlayer';
import Recorder from '../components/Recorder';
import Tape from '../components/Tape';

export default function HomePage() {
	return (
		<div>
			<MusicPlayer />
			<Recorder />
			<Tape />
		</div>
	);
}
