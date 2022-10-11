import MicRecorder from 'mic-recorder-to-mp3';
import {nanoid} from 'nanoid';
import Link from 'next/link';
import {useEffect, useState, useRef} from 'react';
import EdiText from 'react-editext';
import {FaMicrophone} from 'react-icons/fa';
import {FaMicrophoneAltSlash} from 'react-icons/fa';

import {RecordingButton} from '../styled-components/Button.styled';
import {IntroButton} from '../styled-components/Button.styled';
import {DeleteButton} from '../styled-components/Button.styled';
import {CollectionHead} from '../styled-components/CollectionHead.styled';
import {Output} from '../styled-components/Recordings.styled';

export default function Recorder() {
	const recorder = useRef(null);

	const [isRecording, setIsRecording] = useState(null);

	const handleAddRecording = (blobUrl, audiofile) => {
		setAddRecordings([
			...addRecordings,
			{id: nanoid(), url: blobUrl, src: audiofile, description: 'Add your des.'},
		]);
	};

	const deleteAudio = id => {
		setAddRecordings(addRecordings.filter(addRecording => addRecording.id !== id));
	};

	const [addRecordings, setAddRecordings] = useState([]);

	const handleSave = (value, id) => {
		setAddRecordings(
			addRecordings.map(addRecording => {
				return addRecording.id === id
					? {...addRecording, description: value}
					: addRecording;
			})
		);
	};

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
			<RecordingButton onClick={isRecording ? stopRecording : startRecording}>
				{isRecording ? <FaMicrophoneAltSlash /> : <FaMicrophone />}
			</RecordingButton>

			<CollectionHead>MY TAPES:</CollectionHead>

			{addRecordings.map(addRecording => (
				<Output key={addRecording.id} className="audio-container">
					<EdiText
						value={addRecording.description}
						type="text"
						onSave={value => handleSave(value, addRecording.id)}
						id={addRecording.id}
						editButtonContent={'Title'}
						editOnViewClick={false}
						submitOnEnter={true}
					/>
					<audio src={addRecording.url} controls="controls"></audio>

					<DeleteButton onClick={() => deleteAudio(addRecording.id)}>DELETE</DeleteButton>
				</Output>
			))}

			<div>
				<Link href="/introduction">
					<IntroButton>SEE INTRODUCTION</IntroButton>
				</Link>
			</div>
		</div>
	);
}
