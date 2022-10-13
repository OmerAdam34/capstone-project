import Link from 'next/link';
import {useState} from 'react';
import {RiMenu5Fill} from 'react-icons/ri';
import {useSpring, animated as a} from 'react-spring';

import {LinkOne} from '../styled-components/Links.styled';
import {LinkTwo} from '../styled-components/Links.styled';
import {LinkThree} from '../styled-components/Links.styled';
import {NavigationButton} from '../styled-components/NavigationButton.styled';
import {NavigationMenu} from '../styled-components/NavigationMenu.styled';

export default function Navigation() {
	const [show, setShow] = useState(false);

	const contentProps = useSpring({
		opacity: show ? 1 : 0,
		marginTop: show ? 100 : -500,
	});

	return (
		<NavigationMenu>
			<NavigationButton onClick={() => setShow(a => !a)}>
				<RiMenu5Fill />
			</NavigationButton>

			{show ? (
				<a.div style={contentProps}>
					<ul>
						<div>
							<Link href="/">
								<LinkOne>Studio</LinkOne>
							</Link>
						</div>

						<div>
							<Link href="/introduction">
								<LinkTwo>Introduction</LinkTwo>
							</Link>
						</div>
						<br />
						<div>
							<Link href="/login">
								<LinkThree>Account</LinkThree>
							</Link>
						</div>
					</ul>
				</a.div>
			) : null}
		</NavigationMenu>
	);
}
