import Link from 'next/link';
import {useState} from 'react';

import {NavigationMenu} from '../styled-components/NavigationMenu.styled';

export default function Navigation() {
	const [show, setShow] = useState(false);

	return (
		<NavigationMenu>
			<button onClick={() => setShow(!show)}>menu</button>

			{show ? (
				<div>
					<Link href="/">
						<p>Studio</p>
					</Link>
					<Link href="/introduction">
						<p>Introduction</p>
					</Link>
					<Link href="/login">
						<p>Account</p>
					</Link>
				</div>
			) : null}
		</NavigationMenu>
	);
}
