import Link from 'next/link';
import {useState} from 'react';
import {useSpring, animated as a} from 'react-spring';

import {NavigationButton} from '../styled-components/NavigationButton.styled';
import {NavigationMenu} from '../styled-components/NavigationMenu.styled';

export default function Navigation() {
	const [show, setShow] = useState(false);

	const contentProps = useSpring({
		opacity: show ? 1 : 0,
		marginTop: show ? 0 : -500,
	});

	return (
		<NavigationMenu>
			<NavigationButton onClick={() => setShow(!show)}>M</NavigationButton>

			{show ? (
				<a.div style={contentProps}>
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
				</a.div>
			) : null}
		</NavigationMenu>
	);
}
