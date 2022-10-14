import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		set => ({
			addRecordings: [],
			setAddRecordings: state => {
				set({addRecordings: state});
			},
		}),
		{name: 'Recordings'}
	)
);

export default useStore;
