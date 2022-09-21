import MicRecorder from 'mic-recorder-to-mp3';
import {useEffect, useState, useRef} from 'react';
import {FaMicrophone} from 'react-icons/fa';
import {FaMicrophoneAltSlash} from 'react-icons/fa';

export default function Recorder() {
	const recorder = useRef(null);
	const audioPlayer = useRef(null);

	const [blobUrl, setBlobUrl] = useState(null);
	const [audioFile, setAudioFile] = useState(null);
	const [isRecording, setIsRecording] = useState(null);

	useEffect(() => {
		recorder.current = new MicRecorder({bitRate: 128});
	}, []);

	const startRecording = () => {
		recorder.current.start().then(() => {
			setIsRecording(true);
		});
	};

	const stopRecording = () => {
		recorder.current
			.stop()
			.getMp3()
			.then(([buffer, blob]) => {
				const file = new File(buffer, 'audio.mp3', {
					type: blob.type,
					lastModified: Date.now(),
				});
				const newBlobUrl = URL.createObjectURL(blob);
				setBlobUrl(newBlobUrl);
				setIsRecording(false);
				setAudioFile(file);
			});
		console.log(audioFile);
	};

	return (
		<div>
			<button onClick={isRecording ? stopRecording : startRecording}>
				{isRecording ? <FaMicrophoneAltSlash /> : <FaMicrophone />}
			</button>
			<audio ref={audioPlayer} src={blobUrl} controls="controls"></audio>
		</div>
	);
}
