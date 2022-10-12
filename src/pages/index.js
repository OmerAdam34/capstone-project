import {useSession} from 'next-auth/react';
import Image from 'next/image';
import {useState} from 'react';
import styled from 'styled-components';

import Cassette from '../../public/images/cassette.png';
import Logo2 from '../../public/images/logo-white.png';
import MusicPlayer from '../components/MusicPlayer';
import Recorder from '../components/Recorder';
import {IncognitoButton} from '../styled-components/Button.styled';
import {IncognitoHeadline} from '../styled-components/Headline.styled';
import {IncognitoContainer} from '../styled-components/Incognito.styled';
import {IncognitoBox} from '../styled-components/IncognitoBox.styled';
import {LoginPage} from '../styled-components/LoginPage.styled';

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

const CassetteImg = styled.div`
	position: absolute;
	bottom: 10%;
	left: 14%;
	width: 250px;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

export default function HomePage() {
	const {data: session} = useSession();
	const [showApp, setShowApp] = useState(false);
	return session || showApp ? (
		<div>
			<MusicPlayer />
			<Recorder />
		</div>
	) : (
		<div>
			<LoginPage>
				<LogoWhite>
					<Image src={Logo2} width="1000" height="1000" alt="logo" objectFit="cover" />
				</LogoWhite>
				<IncognitoContainer>
					<IncognitoHeadline>PLEASE LOGIN</IncognitoHeadline>
				</IncognitoContainer>

				<CassetteImg>
					<Image src={Cassette} width="1307" height="840" alt="Icon" objectFit="cover" />
				</CassetteImg>
				<IncognitoBox></IncognitoBox>

				<IncognitoButton
					onClick={() => {
						setShowApp(true);
					}}
				>
					CONTINUE WITHOUT LOGIN
				</IncognitoButton>
			</LoginPage>
		</div>
	);
}
