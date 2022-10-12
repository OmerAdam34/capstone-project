import {useState} from 'react';

export default function Navigation() {
	const [show, setShow] = useState(true);

	return (
		<div>
			{show ? (
				<div>
					<h1>Account</h1> <h1>Introduction</h1> <h1>Sign Out</h1>
				</div>
			) : null}
			<button onClick={() => setShow(!show)}>menu</button>
		</div>
	);
}
