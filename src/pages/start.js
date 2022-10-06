import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';

export default function start() {
	return (
		<div>
			<h1>Introduction</h1>

			<Parallax pages={5} style={{top: '0', left: '0'}}>
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h2>1. Choose a beat</h2>
					<video autoPlay loop muted height="150%" width="150%">
						<source src="/videos/bg1.mp4" type="video/mp4" />
					</video>
					<IoIosArrowDown style={{width: '25px', height: '25px'}} />
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
					<h2>2. Create your own lyrics</h2>
					<IoIosArrowDown />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'black',
					}}
				>
					<h2>3. Try to sing/rap your lyrics with the beat</h2>
					<IoIosArrowDown />
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
					<h2>4. All right, show your skills and record it</h2>
					<IoIosArrowDown />
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
					<h2>5. Download and send your own mp3 to someone or collect it</h2>
					<div>
						<button>
							<Link href="/">START </Link>
						</button>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
