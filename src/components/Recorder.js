import MicRecorder from 'mic-recorder-to-mp3';
import {nanoid} from 'nanoid';
import {useEffect, useState, useRef} from 'react';
// import EdiText from 'react-editext';
import {FaMicrophone} from 'react-icons/fa';
import {FaMicrophoneAltSlash} from 'react-icons/fa';

import {Audio} from '../styled-components/Audio.styled';
import {AudioContainer} from '../styled-components/AudioContainer.styled';
import {RecordingButton} from '../styled-components/Button.styled';
import {DeleteButton} from '../styled-components/DeleteButton.styled';
import {StyledEdiText} from '../styled-components/StyledEdiText.styled';
import {TapeCollectionHeadline} from '../styled-components/TapeCollectionHeadline.styled';

export default function Recorder() {
	const recorder = useRef(null);

	const [isRecording, setIsRecording] = useState(null);

	const handleAddRecording = (blobUrl, audiofile) => {
		setAddRecordings([
			...addRecordings,
			{id: nanoid(), url: blobUrl, src: audiofile, description: 'add your description'},
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

			<TapeCollectionHeadline>MY RECORDINGS:</TapeCollectionHeadline>

			{addRecordings.map(addRecording => (
				<div key={addRecording.id} className="audio-container">
					<StyledEdiText
						value={addRecording.description}
						type="text"
						onSave={value => handleSave(value, addRecording.id)}
						id={addRecording.id}
						editOnViewClick={false}
						submitOnEnter={true}
						style={{width: '12%', height: '70%'}}
					/>
					<AudioContainer>
						<Audio src={addRecording.url} controls="controls"></Audio>
					</AudioContainer>
					<DeleteButton onClick={() => deleteAudio(addRecording.id)}>DELETE</DeleteButton>
				</div>
			))}
		</div>
	);
}
