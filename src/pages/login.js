import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import {DiGithubFull} from 'react-icons/di';
import {ImGithub} from 'react-icons/im';
import styled from 'styled-components';

import Logo2 from '../../public/images/logo-white.png';
import SignInLogo from '../../public/images/signInLogo.png';
import {Button} from '../styled-components/Button.styled';
import {GithubContainer} from '../styled-components/GithubContainer.styled';
import {GithubProfilePicture} from '../styled-components/GithubProfilePicture.styled';
import {Headline} from '../styled-components/Headline.styled';
import {LoginPage} from '../styled-components/LoginPage.styled';
import {SignInContainer} from '../styled-components/SignInContainer.styled';
import {SignInHeadline} from '../styled-components/SignInHeadline.styed';

const isPreview = process.env.VERCEL_ENV === 'preview';

const LogoWhite = styled.div`
	position: absolute;
	top: -30px;
	right: 0;
	left: 0;
	width: 100%;
	height: auto;
	background-color: black;
	box-shadow: rgba(0, 0, 0, 0.56) 0 22px 70px 4px;
`;

const SignInIcon = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

export default function Login() {
	const {data: session} = useSession();

	if (session) {
		return (
			<div>
				<SignInContainer>
					<SignInIcon>
						<Image
							src={SignInLogo}
							width="2000"
							height="313"
							alt="Icon"
							objectFit="cover"
						/>
					</SignInIcon>
					<SignInHeadline>YOUR PROFILE</SignInHeadline>
				</SignInContainer>
				<GithubProfilePicture src={session.user.image} alt="GithubImage" />
				<Button onClick={() => signOut()}>Sign out</Button>
				<h2>WELCOME {session.user.name} </h2>
				<p>SIGNED IN AS: </p>
				<p>{session.user.email} </p>
				<h4>COLLECTION:</h4>
				<Button>START</Button>
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
