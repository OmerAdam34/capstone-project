import MicRecorder from 'mic-recorder-to-mp3';
import {nanoid} from 'nanoid';
import {useEffect, useState, useRef} from 'react';
import {FaMicrophone} from 'react-icons/fa';
import {FaMicrophoneAltSlash} from 'react-icons/fa';

export default function Recorder() {
	const recorder = useRef(null);

	const [isRecording, setIsRecording] = useState(null);

	const handleAddRecording = (blobUrl, audiofile) => {
		setAddRecordings([...addRecordings, {id: nanoid(), url: blobUrl, src: audiofile}]);
	};

	const [addRecordings, setAddRecordings] = useState([]);

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
				const newBlobUrl = URL.createObjectURL(file);
				setIsRecording(false);
				handleAddRecording(newBlobUrl, file);
			});
	};

	return (
		<div>
			<div>
				<button onClick={isRecording ? stopRecording : startRecording}>
					{isRecording ? <FaMicrophoneAltSlash /> : <FaMicrophone />}
				</button>
			</div>

			<h4>MY RECORDED TRACKS:</h4>
			{addRecordings.map(addRecording => (
				<div key={addRecording.id} className="audio-container">
					<audio src={addRecording.url} controls="controls"></audio>
				</div>
			))}
		</div>
	);
}
