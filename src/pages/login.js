import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import {DiGithubFull} from 'react-icons/di';
import {ImGithub} from 'react-icons/im';
import styled from 'styled-components';

import Logo from '../../public/logo/logo-no-background.png';
import Logo2 from '../../public/logo/logo-white.png';
import {Button} from '../styled-components/Button.styled';
import {GithubContainer} from '../styled-components/GithubContainer.styled';
import {Headline} from '../styled-components/Headline.styled';
import {LoginPage} from '../styled-components/LoginPage.styled';

const isPreview = process.env.VERCEL_ENV === 'preview';

const LogoWhite = styled.div`
	position: absolute;
	top: -30px;
	right: 0;
	left: 0;
	width: 100%;
	height: auto;
	box-shadow: rgba(0, 0, 0, 0.2) 0 60px 40px -7px;
`;

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
				<h2>WELCOME TO</h2>
				<LogoImage>
					<Image src={Logo} width="1000" height="313" alt="logo" objectFit="cover" />
				</LogoImage>
				<h1>{session.user.name}</h1>
				<p>SIGNED IN AS: </p>
				<p>{session.user.email} </p>

				<Button onClick={() => signOut()}>Sign out</Button>
			</div>
		);
	}
	return (
		<LoginPage>
			<LogoWhite>
				<Image src={Logo2} width="1000" height="1000" alt="logo" objectFit="cover" />
			</LogoWhite>

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
