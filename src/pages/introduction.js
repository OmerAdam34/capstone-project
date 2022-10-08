import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';

import {Button} from '../styled-components/Button.styled';
import {IntroductionNotes} from '../styled-components/IntroductionNotes.styled';

export default function introduction() {
	return (
		<div>
			<Parallax pages={5} style={{top: '0', left: '0'}}>
				<ParallaxLayer sticky={{start: 0, end: 4}}>
					<IntroductionNotes>Introduction</IntroductionNotes>
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
					<IoIosArrowDown style={{width: '30px', height: '30px'}} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={2} style={{backgroundColor: '#232323'}} />

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
					<IntroductionNotes style={{padding: '10px'}}>
						3. Try to rap with a beat
					</IntroductionNotes>
					<IoIosArrowDown style={{width: '30px', height: '30px'}} />
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
					<IntroductionNotes style={{padding: '10px'}}>
						5. Download and send your own mp3 to someone or collect it
					</IntroductionNotes>

					<Button>
						<Link href="/">START </Link>
					</Button>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
