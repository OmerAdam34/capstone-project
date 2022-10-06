import {useSession, signIn, signOut} from 'next-auth/react';
import {DiGithubFull} from 'react-icons/di';
import {ImGithub} from 'react-icons/im';

import {LoginPage} from '../styled-components/Login.styled';
import {LogoContainer} from '../styled-components/LogoContainer.styled';

const isPreview = process.env.VERCEL_ENV === 'preview';

export default function Login() {
	const {data: session} = useSession();

	if (session) {
		return (
			<LoginPage>
				<p>
					WELCOME,
					<br /> {session.user.name}
				</p>
				<br />
				SIGNED IN AS {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</LoginPage>
		);
	}
	return (
		<LoginPage>
			<div>
				<h2>WELCOME TO</h2>
				<div>
					<h1>LIL </h1>
					<p>STUDIO</p>
				</div>
			</div>

			<p>SIGN IN WITH:</p>
			<LogoContainer>
				<ImGithub style={{width: '50px', height: '50px'}} />
				<button
					onClick={() => {
						signIn(isPreview ? 'credentials' : 'github');
					}}
				>
					<DiGithubFull />
				</button>
			</LogoContainer>
		</LoginPage>
	);
}
