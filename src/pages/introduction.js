import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Image from 'next/image';
import {IoIosArrowDown} from 'react-icons/io';
import styled from 'styled-components';

import IntroductionOne from '../../public/images/chooseBeat.png';
import IntroductionThree from '../../public/images/karaoke.png';
import LogoIcon from '../../public/images/logo-small.png';
import IntroductionTwo from '../../public/images/lyrics.png';
import IntroductionFour from '../../public/images/recording.png';
import IntroductionFive from '../../public/images/send.png';
import {IntroductionContainer} from '../styled-components/IntroductionContainer.styled';
import {IntroductionHeadline} from '../styled-components/IntroductionHeadline.styled';
import {IntroductionNotes} from '../styled-components/IntroductionNotes.styled';

const Icon = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

const StepOne = styled.div`
	position: absolute;
	right: 0;
	bottom: 5px;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

const StepTwo = styled.div`
	position: absolute;
	right: 0;
	bottom: 420px;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

const StepThree = styled.div`
	position: absolute;
	top: 600px;
	right: 0;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
	transform: rotate(-10deg);
`;

const StepFour = styled.div`
	position: absolute;
	right: 0;
	bottom: 750px;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

const StepFive = styled.div`
	position: absolute;
	top: 420px;
	right: 0;
	left: 0;
	width: 95%;
	height: auto;
	padding: 10px 10px 10px 10px;
	object-fit: cover;
`;

export default function Introduction() {
	return (
		<div>
			<Parallax pages={5} style={{top: '0', left: '0'}}>
				<ParallaxLayer sticky={{start: 0, end: 4}}>
					<IntroductionContainer>
						<Icon>
							<Image
								src={LogoIcon}
								width="1000"
								height="156"
								alt="Icon"
								objectFit="cover"
							/>
						</Icon>
						<IntroductionHeadline>Introduction</IntroductionHeadline>
					</IntroductionContainer>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<IntroductionNotes style={{padding: '10px'}}>
						1. Choose a beat
					</IntroductionNotes>
					<IoIosArrowDown
						style={{
							width: '30px',
							height: '30px',
							position: 'relative',
							left: '46%',
						}}
					/>
					<StepOne>
						<Image
							src={IntroductionOne}
							width="2163"
							height="1369"
							alt="Icon"
							objectFit="cover"
						/>
					</StepOne>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={2}
					style={{backgroundColor: '#232323', zIndex: '1'}}
				/>

				<ParallaxLayer
					offset={1}
					speed={0}
					style={{
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
						zIndex: '1',
					}}
				>
					<IntroductionNotes style={{padding: '10px'}}>
						2. Create your lyrics
					</IntroductionNotes>
					<IoIosArrowDown style={{width: '30px', height: '30px'}} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'black',
					}}
				>
					<StepTwo>
						<Image
							src={IntroductionTwo}
							width="3328"
							height="3901"
							alt="Icon"
							objectFit="cover"
						/>
					</StepTwo>
					<IntroductionNotes style={{padding: '10px'}}>
						3. Try to rap with a beat
					</IntroductionNotes>
					<IoIosArrowDown style={{width: '30px', height: '30px'}} />
					<StepThree>
						<Image
							src={IntroductionThree}
							width="3009"
							height="1158"
							alt="Icon"
							objectFit="cover"
						/>
					</StepThree>
				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={3}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<IntroductionNotes style={{padding: '10px'}}>
						4. Show your skills and record it
					</IntroductionNotes>
					<IoIosArrowDown style={{width: '30px', height: '30px'}} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={0.5}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<StepFour>
						<Image
							src={IntroductionFour}
							width="2404"
							height="1854"
							alt="Icon"
							objectFit="cover"
						/>
					</StepFour>
					<IntroductionNotes style={{padding: '10px'}}>
						5. Download and send your own mp3 to someone or collect it
					</IntroductionNotes>
					<StepFive>
						<Image
							src={IntroductionFive}
							width="1773"
							height="604"
							alt="Icon"
							objectFit="cover"
						/>
					</StepFive>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
