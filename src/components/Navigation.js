import Link from 'next/link';
import {useState} from 'react';
import {RiMenu5Fill} from 'react-icons/ri';
import {useSpring, animated as a} from 'react-spring';

import {LinkOne} from '../styled-components/Links.styled';
import {List} from '../styled-components/list.styled';
import {NavigationButton} from '../styled-components/NavigationButton.styled';

export default function Navigation() {
	const [show, setShow] = useState(false);

	const contentProps = useSpring({
		opacity: show ? 1 : 0,
		marginTop: show ? 0 : -1500,
	});

	return (
		<div>
			<NavigationButton onClick={() => setShow(a => !a)}>
				<RiMenu5Fill />
			</NavigationButton>

			{show ? (
				<a.div style={contentProps}>
					<List>
						<li>
							<Link href="/">
								<LinkOne>Studio</LinkOne>
							</Link>
						</li>

						<li>
							<Link href="/introduction">
								<LinkOne>Introduction</LinkOne>
							</Link>
						</li>
						<li>
							<Link href="/login">
								<LinkOne>Account</LinkOne>
							</Link>
						</li>
					</List>
				</a.div>
			) : null}
		</div>
	);
}
