import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import {DiGithubFull} from 'react-icons/di';
import {FaUser} from 'react-icons/fa';
import {ImGithub} from 'react-icons/im';
import {IoIosMail} from 'react-icons/io';
import styled from 'styled-components';

import Cassette from '../../public/images/cassette.png';
import Logo2 from '../../public/images/logo-white.png';
import SignInLogo from '../../public/images/signInLogo.png';
import Navigation from '../components/Navigation';
import useStore from '../hooks/useStore';
import {AccountDetails} from '../styled-components/AccountDetails.styled';
import {MailDetail} from '../styled-components/AccountDetails.styled';
import {AudioProfile} from '../styled-components/Audio.styled';
import {AudiContainerProfile} from '../styled-components/AudioContainer.styled';
import {Button} from '../styled-components/Button.styled';
import {SignOutButton} from '../styled-components/Button.styled';
import {Circle} from '../styled-components/Circle.style';
import {CollectionHead} from '../styled-components/CollectionHead.styled';
import {CollectionHead2} from '../styled-components/CollectionHead.styled';
import {CollectionHead3} from '../styled-components/CollectionHead.styled';
import {GithubContainer} from '../styled-components/GithubContainer.styled';
import {GithubProfilePicture} from '../styled-components/GithubProfilePicture.styled';
import {Headline} from '../styled-components/Headline.styled';
import {LoginPage} from '../styled-components/LoginPage.styled';
import {ProfileContainer} from '../styled-components/ProfileContainer.styled';
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
	@media (min-width: 376px) {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 54%;
		background-color: black;
	}
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

const CassetteImg = styled.div`
	position: absolute;
	bottom: 28%;
	left: 6%;
	width: 125px;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
	@media (min-width: 376px) {
		bottom: 28.9%;
		width: 145px;
		height: 101px;
	}
`;

export default function Login() {
	const {data: session} = useSession();

	const addRecordings = useStore(state => state.addRecordings);
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
				<ProfileContainer>
					<GithubProfilePicture src={session.user.image} alt="GithubImage" />

					<FaUser
						style={{
							backgroundColor: 'lightgrey',
							borderRadius: '50px',
							width: '27px',
							height: '27px',
							position: 'absolute',
							right: '160px',
							top: '155px',
						}}
					/>
					<AccountDetails>
						USERNAME: <b> {session.user.name}</b>
					</AccountDetails>

					<IoIosMail
						style={{
							backgroundColor: 'lightgrey',
							borderRadius: '50px',
							width: '27px',
							height: '27px',
							position: 'absolute',
							right: '160px',
							top: '191px',
						}}
					/>
					<MailDetail>
						SIGNED IN AS: <b>{session.user.email}</b>
					</MailDetail>
					<SignOutButton onClick={() => signOut()}>Sign out</SignOutButton>
				</ProfileContainer>
				<Circle></Circle>
				<CassetteImg>
					<Image src={Cassette} width="1307" height="840" alt="Icon" objectFit="cover" />
				</CassetteImg>
				<div>
					<CollectionHead>MY CO</CollectionHead>
					<CollectionHead2>LLEC</CollectionHead2>
					<CollectionHead3>TION</CollectionHead3>
				</div>
				{addRecordings.map(addRecording => {
					return (
						<>
							<AudiContainerProfile>
								<AudioProfile
									src={addRecording.url}
									controls="controls"
								></AudioProfile>
							</AudiContainerProfile>
						</>
					);
				})}
				<Navigation />
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
