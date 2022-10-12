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
					<ul>
						<li>
							<Link href="/">
								<a>Studio</a>
							</Link>
						</li>
						<li>
							<Link href="/introduction">
								<a>Introduction</a>
							</Link>
						</li>
						<li>
							<Link href="/login">
								<a>Account</a>
							</Link>
						</li>
					</ul>
				</div>
			) : null}
		</NavigationMenu>
	);
}
