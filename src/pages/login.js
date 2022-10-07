import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import {DiGithubFull} from 'react-icons/di';
import {ImGithub} from 'react-icons/im';
import styled from 'styled-components';

import Logo from '../../public/logo/logo-no-background.png';
import {Button} from '../styled-components/Button.styled';
import {GithubContainer} from '../styled-components/GithubContainer.styled';
import {Headline} from '../styled-components/Headline.styled';
import {LoginPage} from '../styled-components/LoginPage.styled';

const isPreview = process.env.VERCEL_ENV === 'preview';

const LogoImage = styled.div`
	width: 270px;
	height: auto;
	margin-top: -15%;
	padding: 30px 20px 30px 20px;
	border: 3px solid black;
	box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
`;

export default function Login() {
	const {data: session} = useSession();

	if (session) {
		return (
			<div>
				<h2>WELCOME,</h2>
				<h1>{session.user.name}</h1>
				<p>SIGNED IN AS: </p>
				<p>{session.user.email} </p>

				<Button onClick={() => signOut()}>Sign out</Button>
			</div>
		);
	}
	return (
		<LoginPage>
			<LogoImage>
				<Image src={Logo} width="1000" height="313" alt="logo" objectFit="cover" />
			</LogoImage>

			<Headline>SIGN IN WITH</Headline>

			<GithubContainer>
				<ImGithub style={{width: '90px', height: '90px'}} />
				<Button
					onClick={() => {
						signIn(isPreview ? 'credentials' : 'github');
					}}
				>
					<DiGithubFull style={{width: '50px', height: '50px'}} />
				</Button>
			</GithubContainer>
		</LoginPage>
	);
}
