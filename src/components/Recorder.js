import MicRecorder from 'mic-recorder-to-mp3';
import {nanoid} from 'nanoid';
import {useEffect, useState, useRef} from 'react';
import {FaMicrophone} from 'react-icons/fa';
import {FaMicrophoneAltSlash} from 'react-icons/fa';

export default function Recorder() {
	const recorder = useRef(null);
	const audioPlayer = useRef(null);

	const [blobUrl, setBlobUrl] = useState(null);
	const [audioFile, setAudioFile] = useState(null);
	const [isRecording, setIsRecording] = useState(null);

	const handleAddRecording = event => {
		if (event.key === 'Enter') {
			setAddRecordings([...addRecordings, {id: nanoid(), url: blobUrl, src: audioPlayer}]);
		}
	};

	const [addRecordings, setAddRecordings] = useState([
		{id: nanoid(), url: blobUrl, src: audioPlayer},
	]);

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
			<div>
				<button
					onKeyDown={handleAddRecording}
					onClick={isRecording ? stopRecording : startRecording}
				>
					{isRecording ? <FaMicrophoneAltSlash /> : <FaMicrophone />}
				</button>
			</div>

			<h4>MY RECORDED TRACKS:</h4>
			{addRecordings.map(addRecording => (
				<div key={addRecording.id} className="audio-container">
					<li>
						<audio
							ref={addRecording.src}
							src={addRecording.blobUrl}
							controls="controls"
						></audio>
					</li>
				</div>
			))}
		</div>
	);
}
