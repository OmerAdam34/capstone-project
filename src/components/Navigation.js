import Link from 'next/link';
import {useState} from 'react';
import {RiMenu5Fill} from 'react-icons/ri';
import {useSpring, animated} from 'react-spring';

import {LinkOne} from '../styled-components/Links.styled';
import {List} from '../styled-components/list.styled';
import {NavigationButton} from '../styled-components/NavigationButton.styled';

export default function Navigation() {
	const [active, setActive] = useState(false);

	const springs = useSpring({
		y: active ? 0 : -300,
	});

	return (
		<div>
			<NavigationButton onClick={() => setActive(!active)}>
				<RiMenu5Fill />
			</NavigationButton>

			{active ? (
				<animated.div
					style={{
						zIndex: 1,
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						height: 250,
						padding: 8,
						background: '#1f2022',
						borderRadius: 8,
						...springs,
					}}
				>
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
				</animated.div>
			) : null}
		</div>
	);
}
